var path = location.pathname;
var parts = path.split('/');
parts.splice(-3);

var socket   = io.connect('/', {path: parts.join('/') + '/socket.io'});
var query  = (window.location.search || '').replace(/^\?/, '').replace(/#.*$/, '');
var args   = {};
var common   = null; // common information of adapter
var host     = null; // host object on which the adapter runs
var changed  = false;
var systemConfig;
var certs    = [];
var adapter  = '';
var onChangeSupported = false;

var tmp = window.location.pathname.split('/');
adapter = tmp[tmp.length - 2];

// parse parameters
query.trim().split('&').filter(function (t) {return t.trim();}).forEach(function (b, i) {
    const parts = b.split('=');
    if (!i && parts.length === 1 && !isNaN(parseInt(b, 10))) {
        args.instance = parseInt(b,  10);
    }
    var name = parts[0];
    args[name] = parts.length === 2 ? parts[1] : true;

    if (name === 'instance') {
        args.instance = parseInt( args.instance,  10) || 0;
    }

    if (args[name] === 'true') {
        args[name] = true;
    } else if (args[name] === 'false') {
        args[name] = false;
    }
});
var instance = args.instance;

var _adapterInstance = 'system.adapter.' + adapter + '.' + instance;

$(document).ready(function () {
    'use strict';

    if (typeof noConfigDialog === 'undefined') {
        // Extend dictionary with standard words for adapter
        if (typeof systemDictionary === 'undefined') systemDictionary = {};

        systemDictionary.save =           {"en": "Save",           "de": "Speichern",               "ru": "Сохранить"};
        systemDictionary.saveclose =      {"en": "Save and close", "de": "Speichern und schließen", "ru": "Сохранить и выйти"};
        systemDictionary.none =           {"en": "none",           "de": "keins",                    "ru": ""};
        systemDictionary.all =            {"en": "all",            "de": "alle",                     "ru": "все"};
        systemDictionary['Device list'] = {"en": "Device list",    "de": "Geräteliste",              "ru": "Список устройств"};
        systemDictionary['new device'] =  {"en": "new device",     "de": "Neues Gerät",              "ru": "Новое устройство"};
        systemDictionary.edit =           {"en": "edit",           "de": "Ändern",                   "ru": "Изменить"};
        systemDictionary.delete =         {"en": "delete",         "de": "Löschen",                  "ru": "Удалить"};
        systemDictionary.ok =             {"en": "Ok",             "de": "Ok",                       "ru": "Ok"};
        systemDictionary.cancel =         {"en": "Cancel",         "de": "Abbrechen",                "ru": "Отмена"};
        systemDictionary.Message =        {"en": "Message",        "de": "Mitteilung",               "ru": "Сообщение"};
        systemDictionary.close =          {"en": "Close",          "de": "Schließen",                "ru": "Закрыть"};
        systemDictionary.htooltip =       {"en": "Click for help", "de": "Anclicken",                "ru": "Перейти по ссылке"};

        //socket.on('connection', function () {
        loadSystemConfig(function () {
            if (typeof translateAll === 'function') translateAll();
            loadSettings(prepareTooltips);
        });
        //});
        var $body = $('body');
        $body.wrapInner('<div style="height: calc(100% - 44px); width: 100%; overflow:auto"></div>');
        $body.prepend('<div class="header ui-tabs-nav ui-widget ui-widget-header ui-corner-all" style="padding: 2px" >' +
            '<button id="save" class="translateB">save</button>&nbsp;' +
            '<button id="saveclose" class="translateB">saveclose</button>&nbsp;' +
            '<button id="close" class="translateB" style="float: right;">cancel</button>&nbsp;' +
            '</div>');

        $('button#save').button({icons: {primary: 'ui-icon-disk'}}).click(function () {
            if (typeof save === 'undefined') {
                alert('Please implement save function in your admin/index.html');
                return;
            }
            save(function (obj, common, redirect) {
                if (redirect && parent && parent.adapterRedirect) {
                    parent.adapterRedirect(redirect);
                }
                saveSettings(obj, common);
            });
        });
        $('button#saveclose').button({icons: {
            primary: 'ui-icon-disk',
            secondary: 'ui-icon-close'
        }}).click(function () {
            if (typeof save === 'undefined') {
                alert('Please implement save function in your admin/index.html');
                return;
            }
            save(function (obj, common, redirect) {
                if (redirect && parent && parent.adapterRedirect) {
                    parent.adapterRedirect(redirect);
                }
                saveSettings(obj, common, function () {
                    window.close();
                    if (parent && parent.$iframeDialog) {
                        parent.$iframeDialog.dialog('close');
                    }
                });
            });
        });
        $('button#close').button({icons: {primary: 'ui-icon-close'}}).click(function () {
            window.close();
            if (typeof parent !== 'undefined' && parent && parent.$iframeDialog) {
                parent.$iframeDialog.dialog('close');
            }
        });
    }

   // callback if something changed
    function onChange(isChanged) {
        onChangeSupported = true;
        if (typeof isChanged === 'boolean' && isChanged === false) {
            changed = false;
            $('#save').button('disable');
            $('#saveclose').button('disable');
            $('#close .ui-button-text').html(_('close'));
        } else {
            changed = true;
            $('#save').button('enable');
            $('#saveclose').button('enable');
            $('#close .ui-button-text').html(_('cancel'));
        }
    }
});

function saveSettings(native, common, callback) {
    if (typeof common === 'function') {
        callback = common;
        common = null;
    }

    socket.emit('getObject', _adapterInstance, function (err, oldObj) {
        if (!oldObj) oldObj = {};

        for (var a in native) {
            oldObj.native[a] = native[a];
        }

        if (common) {
            for (var b in common) {
                oldObj.common[b] = common[b];
            }
        }
        socket.emit('setObject', _adapterInstance, oldObj, function (err) {
            if (err) {
                showMessage(err, _('Error'), 'alert');
                return;
            }
            changed = false;
            if (onChangeSupported) {
                $('#save').button('disable');
                $('#saveclose').button('disable');
                $('#close .ui-button-text').html(_('close'));
            }
            if (callback) callback();
        });
    });
}

// Read language settings
function loadSystemConfig(callback) {
    socket.emit('getObject', 'system.config', function (err, res) {
        if (!err && res && res.common) {
            systemLang   = res.common.language || systemLang;
            systemConfig = res;
        }
        socket.emit('getObject', 'system.certificates', function (err, res) {
            if (!err && res) {
                if (res.native && res.native.certificates) {
                    certs = [];
                    for (var c in res.native.certificates) {
                        if (res.native.certificates.hasOwnProperty(c) && !res.native.certificates[c]) continue;
                        var _cert = {
                            name: c,
                            type: (res.native.certificates[c].substring(0, '-----BEGIN RSA PRIVATE KEY'.length) === '-----BEGIN RSA PRIVATE KEY' || res.native.certificates[c].substring(0, '-----BEGIN PRIVATE KEY'.length) === '-----BEGIN PRIVATE KEY') ? 'private' : 'public'
                        };
                        if (_cert.type === 'public') {
                            var m = res.native.certificates[c].split('-----END CERTIFICATE-----');
                            var count = 0;
                            for (var _m = 0; _m < m.length; _m++) {
                                if (m[_m].replace(/[\r\n|\r|\n]+/, '').trim()) count++;
                            }
                            if (count > 1) _cert.type = 'chained';
                        }

                        certs.push(_cert);
                    }
                }
            }
            if (callback) callback();
        });
    });
}

function loadSettings(callback) {
    socket.emit('getObject', _adapterInstance, function (err, res) {
        if (!err && res && res.native) {
            $('.adapter-instance').html(adapter + '.' + instance);
            $('.adapter-config').html('system.adapter.' + adapter + '.' + instance);
            common = res.common;
            if (res.common && res.common.name) $('.adapter-name').html(res.common.name);
            if (typeof load === 'undefined') {
                alert('Please implement save function in your admin/index.html');
            } else {
                load(res.native, onChange);
            }
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            if (typeof callback === 'function') {
                callback();
            }
            alert('error loading settings for ' + _adapterInstance + '\n\n' + err);
        }
    });
}

function prepareTooltips() {
    $('.admin-icon').each(function () {
        var id = $(this).data('id');
        if (!id) {
            var $prev = $(this).prev();
            var $input = $prev.find('input');
            if (!$input.length) $input = $prev.find('select');
            if (!$input.length) $input = $prev.find('textarea');

            if (!$input.length) {
                $prev = $prev.parent();
                $input = $prev.find('input');
                if (!$input.length) $input = $prev.find('select');
                if (!$input.length) $input = $prev.find('textarea');
            }
            if ($input.length) id = $input.attr('id');
        }

        if (!id) return;

        var tooltip = '';
        if (systemDictionary['tooltip_' + id]) {
            tooltip = systemDictionary['tooltip_' + id][systemLang] || systemDictionary['tooltip_' + id].en;
        }

        var icon = '';
        var link = $(this).data('link');
        if (link) {
            if (link === true) {
                if (common.readme) {
                    link = common.readme + '#' + id;
                } else {
                    link = 'https://github.com/ioBroker/ioBroker.' + common.name + '#' + id;
                }
            }
            if (!link.match('^https?:\/\/')) {
                if (common.readme) {
                    link = common.readme + '#' + link;
                } else {
                    link = 'https://github.com/ioBroker/ioBroker.' + common.name + '#' + link;
                }
            }
            icon += '<a class="admin-tooltip-link" target="config_help" href="' + link + '" title="' + (tooltip || systemDictionary.htooltip[systemLang]) + '"><img class="admin-tooltip-icon" src="../../img/info.png" /></a>';
        } else if (tooltip) {
            icon += '<img class="admin-tooltip-icon" title="' + tooltip + '" src="../../img/info.png"/>';
        }

        if (icon) {
            $(this).html(icon);
        }
    });
    $('.admin-text').each(function () {
        var id = $(this).data('id');
        if (!id) {
            var $prev = $(this).prev();
            var $input = $prev.find('input');
            if (!$input.length) $input = $prev.find('select');
            if (!$input.length) $input = $prev.find('textarea');
            if (!$input.length) {
                $prev = $prev.parent();
                $input = $prev.find('input');
                if (!$input.length) $input = $prev.find('select');
                if (!$input.length) $input = $prev.find('textarea');
            }
            if ($input.length) id = $input.attr('id');
        }

        if (!id) return;

        // check if translation for this exist
        if (systemDictionary['info_' + id]) {
            $(this).html('<span class="admin-tooltip-text">' + (systemDictionary['info_' + id][systemLang] || systemDictionary['info_' + id].en) + '</span>');
        }
    });
}

function showMessage(message, title, icon, width) {
    var $dialogMessage = $('#dialog-message-settings');
    if (!$dialogMessage.length) {
        $('body').append('<div id="dialog-message-settings" title="Message" style="display: none">\n' +
            '<p>' +
            '<span id="dialog-message-icon-settings" class="ui-icon ui-icon-circle-check" style="float :left; margin: 0 7px 50px 0;"></span>\n' +
            '<span id="dialog-message-text-settings"></span>\n' +
            '</p>\n' +
            '</div>');
        $dialogMessage = $('#dialog-message-settings');
        $dialogMessage.dialog({
            autoOpen: false,
            modal:    true,
            buttons: [
                {
                    text: _('Ok'),
                    click: function () {
                        $(this).dialog('close');
                    }
                }
            ]
        });
    }
    $dialogMessage.dialog('option', 'width', width + 500);

    if (typeof _ != 'undefined') {
        $dialogMessage.dialog('option', 'title', title || _('Message'));
    } else {
        $dialogMessage.dialog('option', 'title', title || 'Message');
    }
    $('#dialog-message-text-settings').html(message);
    if (icon) {
        $('#dialog-message-icon-settings').show();
        $('#dialog-message-icon-settings').attr('class', '');
        $('#dialog-message-icon-settings').addClass('ui-icon ui-icon-' + icon);
    } else {
        $('#dialog-message-icon-settings').hide();
    }
    $dialogMessage.dialog('open');
}

function confirmMessage(message, title, icon, buttons, callback) {
    var $dialogConfirm =        $('#dialog-confirm-settings');
    if (!$dialogConfirm.length) {
        $('body').append('<div id="dialog-confirm-settings" title="Message" style="display: none">\n' +
            '<p>' +
            '<span id="dialog-confirm-icon-settings" class="ui-icon ui-icon-circle-check" style="float :left; margin: 0 7px 50px 0;"></span>\n' +
            '<span id="dialog-confirm-text-settings"></span>\n' +
            '</p>\n' +
            '</div>');
        $dialogConfirm = $('#dialog-confirm-settings');
        $dialogConfirm.dialog({
            autoOpen: false,
            modal:    true
        });
    }
    if (typeof buttons === 'function') {
        callback = buttons;
        $dialogConfirm.dialog('option', 'buttons', [
            {
                text: _('Ok'),
                click: function () {
                    var cb = $(this).data('callback');
                    $(this).data('callback', null);
                    $(this).dialog('close');
                    if (cb) cb(true);
                }
            },
            {
                text: _('Cancel'),
                click: function () {
                    var cb = $(this).data('callback');
                    $(this).data('callback', null);
                    $(this).dialog('close');
                    if (cb) cb(false);
                }
            }

        ]);
    } else if (typeof buttons === 'object') {
        for (var b = 0; b < buttons.length; b++) {
            buttons[b] = {
                text: buttons[b],
                id: 'dialog-confirm-button-' + b,
                click: function (e) {
                    var id = parseInt(e.currentTarget.id.substring('dialog-confirm-button-'.length), 10);
                    var cb = $(this).data('callback');
                    $(this).dialog('close');
                    if (cb) cb(id);
                }
            }
        }
        $dialogConfirm.dialog('option', 'buttons', buttons);
    }

    $dialogConfirm.dialog('option', 'title', title || _('Message'));
    $('#dialog-confirm-text-settings').html(message);
    if (icon) {
        $('#dialog-confirm-icon-settings')
            .show()
            .attr('class', '')
            .addClass('ui-icon ui-icon-' + icon);
    } else {
        $('#dialog-confirm-icon-settings').hide();
    }
    $dialogConfirm.data('callback', callback);
    $dialogConfirm.dialog('open');
}

function getObject(id, callback) {
    socket.emit('getObject', id, function (err, res) {
        if (!err && res) {
            if (callback) callback(err, res);
        } else {
            if (callback) callback(null);
        }
    });
}

function getState(id, callback) {
    socket.emit('getState', id, function (err, res) {
        if (!err && res) {
            if (callback) callback(err, res);
        } else {
            if (callback) callback(null);
        }
    });
}

function getEnums(_enum, callback) {
    socket.emit('getObjectView', 'system', 'enum', {startkey: 'enum.' + _enum, endkey: 'enum.' + _enum + '.\u9999'}, function (err, res) {
        if (!err && res) {
            var _res   = {};
            for (var i = 0; i < res.rows.length; i++) {
                if (res.rows[i].id === 'enum.' + _enum) continue;
                _res[res.rows[i].id] = res.rows[i].value;
            }
            if (callback) callback(null, _res);
        } else {
            if (callback) callback(err, []);
        }
    });
}

function getGroups(callback) {
    socket.emit('getObjectView', 'system', 'group', {startkey: 'system.group.', endkey: 'system.group.\u9999'}, function (err, res) {
        if (!err && res) {
            var _res   = {};
            for (var i = 0; i < res.rows.length; i++) {
                _res[res.rows[i].id] = res.rows[i].value;
            }
            if (callback) callback(null, _res);
        } else {
            if (callback) callback(err, []);
        }
    });
}

function getUsers(callback) {
    socket.emit('getObjectView', 'system', 'user', {startkey: 'system.user.', endkey: 'system.user.\u9999'}, function (err, res) {
        if (!err && res) {
            var _res   = {};
            for (var i = 0; i < res.rows.length; i++) {
                _res[res.rows[i].id] = res.rows[i].value;
            }
            if (callback) callback(null, _res);
        } else {
            if (callback) callback(err, []);
        }
    });
}

function fillUsers(elemId, current, callback) {
    getUsers(function (err, users) {
        var text = '';
        for (var u in users) {
            text += '<option value="' + u + '" ' + ((current === u) ? 'selected' : '') + ' >' + users[u].common.name[0].toUpperCase() + users[u].common.name.substring(1)  + '</option>\n';
        }
        $(elemId).html(text);
    });
}

function getIPs(host, callback) {
    if (typeof host === 'function') {
        callback = host;
        host = null;
    }

    socket.emit('getHostByIp', host || common.host, function (ip, _host) {
        if (_host) {
            host = _host;
            var IPs4 = [{name: '[IPv4] 0.0.0.0 - ' + _('Listen on all IPs'), address: '0.0.0.0', family: 'ipv4'}];
            var IPs6 = [{name: '[IPv6] ::',      address: '::',      family: 'ipv6'}];
            if (host.native.hardware && host.native.hardware.networkInterfaces) {
                for (var eth in host.native.hardware.networkInterfaces) {
                    for (var num = 0; num < host.native.hardware.networkInterfaces[eth].length; num++) {
                        if (host.native.hardware.networkInterfaces[eth][num].family != 'IPv6') {
                            IPs4.push({name: '[' + host.native.hardware.networkInterfaces[eth][num].family + '] ' + host.native.hardware.networkInterfaces[eth][num].address + ' - ' + eth, address: host.native.hardware.networkInterfaces[eth][num].address, family: 'ipv4'});
                        } else {
                            IPs6.push({name: '[' + host.native.hardware.networkInterfaces[eth][num].family + '] ' + host.native.hardware.networkInterfaces[eth][num].address + ' - ' + eth, address: host.native.hardware.networkInterfaces[eth][num].address, family: 'ipv6'});
                        }
                    }
                }
            }
            for (var i = 0; i < IPs6.length; i++) {
                IPs4.push(IPs6[i]);
            }
            callback(IPs4);
        }
    });
}

function fillSelectIPs(id, actualAddr, noIPv4, noIPv6, callback) {
    getIPs(function (ips) {
        var str = '';
        for (var i = 0; i < ips.length; i++) {
            if (noIPv4 && ips[i].family === 'ipv4') continue;
            if (noIPv6 && ips[i].family === 'ipv6') continue;
            str += '<option value="' + ips[i].address + '" ' + ((ips[i].address === actualAddr) ? 'selected' : '') + '>' + ips[i].name + '</option>';
        }

        $(id).html(str);
        if (typeof callback === 'function') callback();
    });
}

function sendTo(_adapter_instance, command, message, callback) {
    socket.emit('sendTo', (_adapter_instance || adapter + '.' + instance), command, message, callback);
}

function sendToHost(host, command, message, callback) {
    socket.emit('sendToHost', host || common.host, command, message, callback);
}

// fills select with names of the certificates and preselect it
function fillSelectCertificates(id, type, actualValued) {
    var str = '<option value="">' + _('none') + '</option>';
    for (var i = 0; i < certs.length; i++) {
        if (certs[i].type != type) {
            continue;
        }
        str += '<option value="' + certs[i].name + '" ' + ((certs[i].name === actualValued) ? 'selected' : '') + '>' + certs[i].name + '</option>';
    }

    $(id).html(str);
}

function getAdapterInstances(_adapter, callback) {
    if (typeof _adapter === 'function') {
        callback = _adapter;
        _adapter = null;
    }

    socket.emit('getObjectView', 'system', 'instance', {startkey: 'system.adapter.' + (_adapter || adapter), endkey: 'system.adapter.' + (_adapter || adapter) + '.\u9999'}, function (err, doc) {
        if (err) {
            if (callback) callback ([]);
        } else {
            if (doc.rows.length === 0) {
                if (callback) callback ([]);
            } else {
                var res = [];
                for (var i = 0; i < doc.rows.length; i++) {
                    res.push(doc.rows[i].value);
                }
                if (callback) callback (res);
            }
        }

    });
}

function getExtendableInstances(_adapter, callback) {
    if (typeof _adapter === 'function') {
        callback = _adapter;
        _adapter = null;
    }

    socket.emit('getObjectView', 'system', 'instance', null, function (err, doc) {
        if (err) {
            if (callback) callback ([]);
        } else {
            if (doc.rows.length === 0) {
                if (callback) callback ([]);
            } else {
                var res = [];
                for (var i = 0; i < doc.rows.length; i++) {
                    if (doc.rows[i].value.common.webExtendable) {
                        res.push(doc.rows[i].value);
                    }
                }
                if (callback) callback (res);
            }
        }
    });
}

function getIsAdapterAlive(_adapter, callback) {
    if (typeof _adapter === 'function') {
        callback = _adapter;
        _adapter = null;
    }
    getState('system.adapter.' + (_adapter || adapter) + '.' + instance + '.alive', function (err, obj) {
        if (!obj || !obj.val) {
            callback(false);
        } else {
            callback(true);
        }
    });
}

// Adds one entry to the created with editTable table
//  tabId - the id of the table used by editTable
//  value - is one object to add in form {ip: '3.3.3.3', room: 'enum.room.bla3', desc: 'Bla3'}
// $grid  - [optional] - object returned by editTable to speed up the addition
// _isInitial - [optional] - if it is initial fill of the table. To not trigger the onChange
function addToTable(tabId, value, $grid, _isInitial) {
    $grid = $grid || $('#' + tabId);
    var obj  = {_id: $grid[0]._maxIdx++};
    var cols = $grid[0]._cols;

    for (var i = 0; i < cols.length; i++) {
        if (cols[i] === 'room') {
            obj[cols[i]] = ($grid[0]._rooms[value[cols[i]]]) ? $grid[0]._rooms[value[cols[i]]].common.name : value[cols[i]];
        } else {
            obj[cols[i]] = value[cols[i]];
        }
    }
    obj._commands =
        '<button data-' + tabId + '-id="' + obj._id + '" class="' + tabId + '-edit-submit">'                        + _('edit')   + '</button>' +
        '<button data-' + tabId + '-id="' + obj._id + '" class="' + tabId + '-delete-submit">'                      + _('delete') + '</button>' +
        '<button data-' + tabId + '-id="' + obj._id + '" class="' + tabId + '-ok-submit" style="display:none">'     + _('ok')     + '</button>' +
        '<button data-' + tabId + '-id="' + obj._id + '" class="' + tabId + '-cancel-submit" style="display:none">' + _('cancel') + '</button>';

    $grid.jqGrid('addRowData', tabId + '_' + obj._id, obj);

    _editInitButtons($grid, tabId, obj._id);

    if (!_isInitial && $grid[0]._onChange) $grid[0]._onChange('add', value);
}

function _editInitButtons($grid, tabId, objId) {
    var search = objId ? '[data-' + tabId + '-id="' + objId + '"]' : '';

    $('.' + tabId + '-edit-submit' + search).unbind('click').button({
        icons: {primary: 'ui-icon-pencil'},
        text:  false
    }).click(function () {
        var id = $(this).attr('data-' + tabId + '-id');

        $('.' + tabId + '-edit-submit').hide();
        $('.' + tabId + '-delete-submit').hide();
        $('.' + tabId + '-ok-submit[data-' + tabId + '-id="' + id + '"]').show();
        $('.' + tabId + '-cancel-submit[data-' + tabId + '-id="' + id + '"]').show();

        $grid.jqGrid('editRow', tabId + '_' + id, {url: 'clientArray'});
        if ($grid[0]._edited.indexOf(id) === -1) {
            $grid[0]._edited.push(id);
        }
        changed = true;
        $('#save').button('enable');
        $('#saveclose').button('enable');
        if (onChangeSupported) $('#close .ui-button-text').html(_('cancel'));
    }).css({'height': '18px', width: '22px'});

    $('.' + tabId + '-delete-submit' + search).unbind('click').button({
        icons: {primary: 'ui-icon-trash'},
        text:  false
    }).click(function () {
        var id = $(this).attr('data-' + tabId + '-id');
        $grid.jqGrid('delRowData', tabId + '_' + id);

        changed = true;
        $('#save').button('enable');
        $('#saveclose').button('enable');
        if (onChangeSupported) $('#close .ui-button-text').html(_('cancel'));

        var pos = $grid[0]._edited.indexOf(id);
        if (pos !== -1) {
            $grid[0]._edited.splice(pos, 1);
        }
        if ($grid[0]._onChange) $grid[0]._onChange('del', id);
    }).css({'height': '18px', width: '22px'});

    $('.' + tabId + '-ok-submit' + search).unbind('click').button({
        icons: {primary: 'ui-icon-check'},
        text:  false
    }).click(function () {
        var id = $(this).attr('data-' + tabId + '-id');

        $('.' + tabId + '-edit-submit').show();
        $('.' + tabId + '-delete-submit').show();
        $('.' + tabId + '-ok-submit').hide();
        $('.' + tabId + '-cancel-submit').hide();

        $grid.jqGrid('saveRow', tabId + '_' + id, {url: 'clientArray'});

        changed = true;
        $('#save').button('enable');
        $('#saveclose').button('enable');
        if (onChangeSupported) $('#close .ui-button-text').html(_('cancel'));

        var pos = $grid[0]._edited.indexOf(id);
        if (pos !== -1) {
            $grid[0]._edited.splice(pos, 1);
        }
        if ($grid[0]._onChange) $grid[0]._onChange('changed', $grid.jqGrid('getRowData', tabId + '_' + id));
    }).css({'height': '18px', width: '22px'});

    $('.' + tabId + '-cancel-submit' + search).unbind('click').button({
        icons: {primary: 'ui-icon-close'},
        text:  false
    }).click(function () {
        var id = $(this).attr('data-' + tabId + '-id');

        $('.' + tabId + '-edit-submit').show();
        $('.' + tabId + '-delete-submit').show();
        $('.' + tabId + '-ok-submit').hide();
        $('.' + tabId + '-cancel-submit').hide();

        $grid.jqGrid('restoreRow', tabId + '_' + id, false);
        var pos = $grid[0]._edited.indexOf(id);
        if (pos !== -1) {
            $grid[0]._edited.splice(pos, 1);
        }
    }).css({'height': '18px', width: '22px'});
}

function _editTable(tabId, cols, values, rooms, top, onChange) {
    var title = 'Device list';
    if (typeof tabId === 'object') {
        cols     = tabId.cols;
        values   = tabId.values;
        rooms    = tabId.rooms;
        top      = tabId.top;
        onChange = tabId.onChange;
        if (tabId.title) title = tabId.title;
        tabId    = tabId.tabId;
    }

    initGridLanguage(systemLang);
    var colNames = [];
    var colModel = [];
    var $grid = $('#' + tabId);
    var room;

    colNames.push('id');
    colModel.push({
        name:    '_id',
        index:   '_id',
        hidden:  true
    });
    for (var i = 0; i < cols.length; i++) {
        var width = null;
        var checkbox = null;

        if (typeof cols[i] === 'object') {
            width  = cols[i].width;
            if (cols[i].checkbox) checkbox = true;
            cols[i] = cols[i].name;
        }
        colNames.push(_(cols[i]));
        var _obj = {
            name:     cols[i],
            index:    cols[i],
//                width:    160,
            editable: true
        };
        if (width) _obj.width = width;
        if (checkbox) {
            _obj.edittype    = 'checkbox';
            _obj.editoptions = {value: 'true:false'};
        }

        if (cols[i] === 'room') {
            var list = {'': _('none')};
            for (room in rooms) {
                list[room] = _(rooms[room].common.name);
            }
            _obj.stype =         'select';
            _obj.edittype =      'select';
            _obj.editoptions =   {value: list};
            _obj.searchoptions = {
                sopt:  ['eq'],
                value: ':' + _('all')
            };
            for (room in rooms) {
                _obj.searchoptions.value += ';' + _(rooms[room].common.name) + ':' + _(rooms[room].common.name);
            }
        }
        colModel.push(_obj);
    }
    colNames.push('');
    colModel.push({name: '_commands', index: '_commands', width: 50, editable: false, align: 'center', search: false});

    $grid[0]._cols     = cols;
    $grid[0]._rooms    = rooms;
    $grid[0]._maxIdx   = 0;
    $grid[0]._top      = top;
    $grid[0]._edited   = [];
    $grid[0]._onChange = onChange;

    $grid.jqGrid({
        datatype:  'local',
        colNames:  colNames,
        colModel:  colModel,
        width:     800,
        height:    330,
        pager:     $('#pager-' + tabId),
        rowNum:    1000,
        rowList:   [1000],
        ondblClickRow: function (rowid) {
            var id = rowid.substring((tabId + '_').length);
            $('.' + tabId + '-edit-submit').hide();
            $('.' + tabId + '-delete-submit').hide();
            $('.' + tabId + '-ok-submit[data-' + tabId + '-id="' + id + '"]').show();
            $('.' + tabId + '-cancel-submit[data-' + tabId + '-id="' + id + '"]').show();
            $grid.jqGrid('editRow', rowid, {url: 'clientArray'});
            if ($grid[0]._edited.indexOf(id) === -1) $grid[0]._edited.push(id);

            changed = true;
            $('#save').button('enable');
            $('#saveclose').button('enable');
            if (onChangeSupported) $('#close .ui-button-text').html(_('cancel'));
        },
        sortname:  'id',
        sortorder: 'desc',
        viewrecords: false,
        pgbuttons: false,
        pginput: false,
        pgtext: false,
        caption: _(title),
        ignoreCase: true,
        loadComplete: function () {
            _editInitButtons($grid, tabId);
        },
        onSortCol: function () {
            changed = true;
            $('#save').button('enable');
            $('#saveclose').button('enable');
            if (onChangeSupported) $('#close .ui-button-text').html(_('cancel'));
        }
    }).jqGrid('filterToolbar', {
        defaultSearch: 'cn',
        autosearch:    true,
        searchOnEnter: false,
        enableClear:   false,
        afterSearch:   function () {
            _editInitButtons($grid, tabId);
        }
    });

    $('#pager-' + tabId + '_center').hide();

    if ($('#pager-' + tabId).length) {
        $grid.navGrid('#pager-' + tabId, {
            search:  false,
            edit:    false,
            add:     false,
            del:     false,
            refresh: false
        }).jqGrid('navButtonAdd', '#pager-' + tabId, {
            caption: '',
            buttonicon: 'ui-icon-plus',
            onClickButton: function () {
                // Find new unique name
                var found;
                var newText = _('New');
                var ids = $grid.jqGrid('getDataIDs');
                var idx = 1;
                var obj;
                do {
                    found = true;
                    for (var _id = 0; _id < ids.length; _id++) {
                        obj = $grid.jqGrid('getRowData', ids[_id]);
                        if (obj && obj[$grid[0]._cols[0]] === newText + idx)  {
                            idx++;
                            found = false;
                            break;
                        }
                    }
                } while (!found);

                obj = {};
                for (var t = 0; t < $grid[0]._cols.length; t++) {
                    obj[$grid[0]._cols[t]] = '';
                }
                obj[$grid[0]._cols[0]] = newText + idx;

                changed = true;
                $('#save').button('enable');
                $('#saveclose').button('enable');
                if (onChangeSupported) $('#close .ui-button-text').html(_('cancel'));

                addToTable(tabId, obj, $grid);
            },
            position: 'first',
            id:       'add-cert',
            title:    _('new device'),
            cursor:   'pointer'
        });
    }

    if (values) {
        for (var u = 0; u < values.length; u++) {
            addToTable(tabId, values[u], $grid, true);
        }
    }
    $(window).resize(function () {
        $grid.setGridHeight($(this).height() - top).setGridWidth($(this).width() - 10);
    });
    $(window).trigger('resize');

    // hide scrollbar
    $('.ui-jqgrid-bdiv').css({'overflow-x': 'hidden'});

    return $grid;
}

// converts "enum.room.Sleeping_room" to "Sleeping room"
// As input gets the list from getEnum
function enumName2Id(enums, name) {
    for (var enumId in enums) {
        if (enums[enumId].common.name === name) return enumId;
        if (enums[enumId].name && enums[enumId].name === name) return enumId;
    }
    return '';
}

// Creates edit table for any configuration array
//   tabId  - is id of table where the jqGrid must be created. E.g: <table id="devices"></table><div id="pager-devices"></div>
//   cols   - array with names of the properties of entry. E.g: ['ip', 'room', 'desc']
//           if column has name room, for that will be automatically the room enums loaded and shown
//   values - array with values in form [{ip: '1.1.1.1', room: 'enum.room.bla1', desc: 'Bla1'},  {ip: '2.2.2.2', room: 'enum.room.bla2', desc: 'Bla2'}
//   top    - top position of the table to set the height of the table automatically. Table must be always as last on the page.
//   onChange - callback called if something is changed in the table
//
// returns the jquery object of $('#tabId')
// To extract data from table
function editTable(tabId, cols, values, top, onChange) {
    if (typeof tabId === 'object') {
        cols     = tabId.cols;
    }

    if (cols.indexOf('room') !== -1) {
        getEnums('rooms', function (err, list) {
            return _editTable(tabId, cols, values, list, top, onChange);
        });
    } else {
        return _editTable(tabId, cols, values, null, top, onChange);
    }
}

// Extract edited array from table
//   tabId  - is id of table where the jqGrid must be created. E.g: <table id="devices"></table><div id="pager-devices"></div>
//   cols   - array with names of the properties of entry. E.g: ['ip', 'room', 'desc']
//
// Returns array with values
function getTableResult(tabId, cols) {
    var $grid = $('#' + tabId);
    for (var j = 0; j < $grid[0]._edited.length; j++) {
        $grid.jqGrid('saveRow', tabId + '_' + $grid[0]._edited[j], {url: 'clientArray'});
    }

    $('.' + tabId + '-edit-submit').show();
    $('.' + tabId + '-delete-submit').show();
    $('.' + tabId + '-ok-submit').hide();
    $('.' + tabId + '-cancel-submit').hide();

    var data = $grid.jqGrid('getRowData');
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var obj = {};
        for (var z = 0; z < cols.length; z++) {
            if (cols[z] === 'room') {
                obj[cols[z]] = enumName2Id($grid[0]._rooms, data[i][cols[z]]);
            } else {
                obj[cols[z]] = data[i][cols[z]];
            }
        }
        res.push(obj);
    }
    return res;
}

/*
 <div id="values">
 <button class="table-button-add" style="margin-left: 10px"></button>
 <table class="table-values" style="width: 100%; calc(100% - 200px)">
 <thead>
 <tr>
 <th data-name="regex"     style="width: 30%" class="translate">Context</th>
 <th data-name="room"      class="translate" data-type="select">Room</th>
 <th data-name="aaa"       class="translate" data-options="1/A;2/B;3/C;4" data-type="select">Room</th>
 <th data-name="enabled"   class="translate" data-type="checkbox">Enabled</th>
 <th data-buttons="delete up down" style="width: 32px"></th>
 </tr>
 </thead>
 </table>
 </td>
 */

/**
 * Create edit table from javascript array.
 *
 * This function creates a html edit table.
 *
 * <pre><code>
 *   <div id="values" style="width: 100%; height: calc(100% - 205px)">
 *      <button class="table-button-add" style="margin-left: 10px"></button>
 *      <div style="width: 100%; height: calc(100% - 30px); overflow: auto;">
 *          <table class="table-values" style="width: 100%;">
 *              <thead>
 *                  <tr>
 *                      <th data-name="_index" style="30px" data-style="width: 100%; text-align: right">Context</th>
 *                      <th data-name="regex"     class="translate" style="width: 30%" data-style="text-align: right">Context</th>
 *                      <th data-name="room"      class="translate" data-type="select">Room</th>
 *                      <th data-name="aaa"       class="translate" data-options="1/A;2/B;3/C;4" data-type="select">Room</th>
 *                      <th data-name="enabled"   class="translate" data-type="checkbox">Enabled</th>
 *                      <th data-buttons="delete up down" style="width: 32px"></th>
 *                  </tr>
 *              </thead>
 *          </table>
 *      </div>
 *   </div>
 * <pre><code>
 *
 * @param {string} id name of the html element (or empty).
 * @param {string} values data array
 * @param {function} onChange this function will be called if something changed
 * @param {function} onReady called, when the table is ready (may be to modify some elements of it)
 * @return {object} array with values
 */
function values2table(divId, values, onChange, onReady) {
    if (typeof values === 'function') {
        onChange = values;
        values   = divId;
        divId    = '';
    }

    values = values || [];
    var names = [];
    var $div;
    if (!divId) {
        $div = $('body');
    } else {
        $div = $('#' + divId);
    }
    var $add = $div.find('.table-button-add');

    if (!$add.data('inited')) {
        $add.data('inited', true);

        $add.button({
            icons: {primary: 'ui-icon-plus'},
            text: false
        })
            //.css({width: '1em', height: '1em'})
            .click(function () {
                var $table = $div.find('.table-values');
                var values = $table.data('values');
                var names = $table.data('names');
                var obj = {};
                for (var i = 0; i < names.length; i++) {
                    if (!names[i]) continue;
                    obj[names[i].name] = names[i].def;
                }
                values.push(obj);
                onChange && onChange();
                setTimeout(function () {
                    values2table(divId, values, onChange, onReady);
                }, 100);
            });
    }

    if (values) {
        var buttons = [];
        var $table = $div.find('.table-values');
        $table.data('values', values);

        // load rooms
        if (!$table.data('rooms') && $table.find('th[data-name="room"]').length) {
            getEnums('rooms', function (err, list) {
                var result = {};
                result[_('none')] = '';
                var nnames = [];
                for (var n in list) {
                    nnames.push(n);
                }
                nnames.sort(function (a, b) {
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    if (a > b) return 1;
                    if (a < b) return -1;
                    return 0;
                });

                for (var l = 0; l < nnames.length; l++) {
                    result[nnames[l]] = list[nnames[l]].common.name || l;
                }
                $table.data('rooms', result);
                values2table(divId, values, onChange, onReady);
            });
            return;
        }
        // load functions
        if (!$table.data('functions') && $table.find('th[data-name="func"]').length) {
            getEnums('functions', function (err, list) {
                var result = {};
                result[_('none')] = '';
                var nnames = [];
                for (var n in list) {
                    nnames.push(n);
                }
                nnames.sort(function (a, b) {
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    if (a > b) return 1;
                    if (a < b) return -1;
                    return 0;
                });

                for (var l = 0; l < nnames.length; l++) {
                    result[nnames[l]] = list[nnames[l]].common.name || l;
                }
                $table.data('functions', result);
                values2table(divId, values, onChange, onReady);
            });
            return;
        }
        $table.find('th').each(function () {
            var name = $(this).data('name');
            if (name) {
                var obj = {
                    name:    name,
                    type:    $(this).data('type') || 'text',
                    def:     $(this).data('default'),
                    style:   $(this).data('style')
                };
                if (obj.type === 'checkbox') {
                    if (obj.def === 'false') obj.def = false;
                    if (obj.def === 'true')  obj.def = true;
                    obj.def = !!obj.def;
                } else if (obj.type === 'select') {
                    var vals = ($(this).data('options') || '').split(';');
                    obj.options = {};
                    for (var v = 0; v < vals.length; v++) {
                        var parts = vals[v].split('/');
                        obj.options[parts[0]] = _(parts[1] || parts[0]);
                        if (v === 0) obj.def = (obj.def === undefined) ? parts[0] : obj.def;
                    }
                } else {
                    obj.def = obj.def || '';
                }
                names.push(obj);
            } else {
                names.push(null);
            }

            name = $(this).data('buttons');

            if (name) {
                var bs = name.split(' ');
                buttons.push(bs);
            } else {
                buttons.push(null);
            }
        });

        $table.data('names', names);

        var text = '';
        for (var v = 0; v < values.length; v++) {
            text += '<tr>';

            for (var i = 0; i < names.length; i++) {
                text += '<td';
                var line = '';
                var style = '';
                if (names[i]) {
                    if (names[i].name === '_index') {
                        style = (names[i].style ? names[i].style : 'text-align: right;');
                        line += (v + 1);
                    } else
                    if (names[i].type === 'checkbox') {
                        line += '<input ' + (names[i].style || '') + '" class="values-input" type="checkbox" data-index="' + v + '" data-name="' + names[i].name + '" ' + (values[v][names[i].name] ? 'checked' : '') + '" data-old-value="' + (values[v][names[i].name] === undefined ? '' : values[v][names[i].name]) + '"/>';
                    } else if (names[i].type === 'select') {
                        line += '<select style="' + (names[i].style ? names[i].style : 'width: 100%') + '" class="values-input" data-index="' + v + '" data-name="' + names[i].name + '">';
                        var options;
                        if (names[i].name === 'room') {
                            options = $table.data('rooms');
                        } else if (names[i].name === 'func') {
                            options = $table.data('functions');
                        } else {
                            options = names[i].options;
                        }
                        var val = (values[v][names[i].name] === undefined ? '' : values[v][names[i].name]);
                        for (var p in options) {
                            line += '<option value="' + p + '" ' + (p === val ? ' selected' : '') + '>' + options[p] + '</option>';
                        }
                        line += '</select>';
                    } else {
                        line += '<input class="values-input" style="' + (names[i].style ? names[i].style : 'width: 100%') + '" type="' + names[i].type + '" data-index="' + v + '" data-name="' + names[i].name + '"/>';
                    }
                }

                if (buttons[i]) {
                    style = 'text-align: center;';
                    for (var b = 0; b < buttons[i].length; b++) {
                        if ((!v && buttons[i][b] === 'up') || v === values.length - 1 && buttons[i][b] === 'down') {
                            line += '<button data-command="' + buttons[i][b] + '" class="values-buttons" disabled>&nbsp;</button>';
                            continue;
                        }
                        line += '<button data-index="' + v + '" data-command="' + buttons[i][b] + '" class="values-buttons"></button>';
                    }
                }
                text += ' style="' + style + '">' + line + '</td>';
            }

            text += '</tr>';
        }
        var $lines = $('.table-lines');
        if (!$lines.length) {
            $table.append('<tbody class="table-lines"></tbody>');
            $lines = $('.table-lines');
        }

        $lines.html(text);

        $lines.find('.values-input').each(function () {
            var $this = $(this);
            var type = $this.attr('type');
            var name = $this.data('name');
            var id = $this.data('index');
            $this.data('old-value', values[id][name]);
            if (type === 'checkbox') {
                $this.prop('checked', values[id][name]);
            } else {
                $this.val(values[id][name]);
            }
        });
        $lines.find('.values-buttons').each(function () {
            var command = $(this).data('command');
            if (command === 'delete') {
                $(this).button({
                    icons: {primary: 'ui-icon-trash'},
                    text: false
                })
                    .css({width: '1em', height: '1em'})
                    .click(function () {
                        var id = $(this).data('index');
                        values.splice(id, 1);
                        onChange && onChange();
                        setTimeout(function () {
                            values2table(divId, values, onChange, onReady);
                        }, 100);
                    });
            } else if (command === 'up') {
                $(this).button({
                    icons: {primary: 'ui-icon-triangle-1-n'},
                    text: false
                })
                    .css({width: '1em', height: '1em'})
                    .click(function () {
                        var id = $(this).data('index');
                        var elem = values[id];
                        values.splice(id, 1);
                        values.splice(id - 1, 0, elem);
                        onChange && onChange();
                        setTimeout(function () {
                            values2table(id, values, onChange, onReady);
                        }, 100);
                    });
            } else if (command === 'down') {
                $(this).button({
                    icons: {primary: 'ui-icon-triangle-1-s'},
                    text: false
                })
                    .css({width: '1em', height: '1em'})
                    .click(function () {
                        var id = $(this).data('index');
                        var elem = values[id];
                        values.splice(id, 1);
                        values.splice(id + 1, 0, elem);
                        onChange && onChange();
                        setTimeout(function () {
                            values2table(id, values, onChange, onReady);
                        }, 100);
                    });
            } else if (command === 'edit') {
                $(this).button({
                    icons: {primary: 'ui-icon-pencil'},
                    text: false
                })
                    .css({width: '1em', height: '1em'})
                    .click(function () {
                        var id = $(this).data('index');
                        var elem = values[id];
                        if (typeof editLine === 'function') {
                            setTimeout(function () {
                                editLine(id, JSON.parse(JSON.stringify(values[id])), function (err, id, newValues) {
                                    if (!err) {
                                        if (JSON.stringify(values[id]) !== JSON.stringify(newValues)) {
                                            onChange && onChange();
                                            values[id] = newValues;
                                            _values2table(id, values, onChange, onReady);
                                        }
                                    }
                                });
                            }, 100);
                        }
                    });
            }
        });

        $lines.find('.values-input').change(function () {
            if ($(this).attr('type') === 'checkbox') {
                if ($(this).prop('checked').toString() !== $(this).data('old-value')) onChange();
                values[$(this).data('index')][$(this).data('name')] = $(this).prop('checked');
            } else {
                if ($(this).val() !== $(this).data('old-value')) onChange();
                values[$(this).data('index')][$(this).data('name')] = $(this).val();

            }
        }).keyup(function () {
            $(this).trigger('change');
        });
    }
    if (typeof onReady === 'function') onReady();
}

/**
 * Extract the values from table.
 *
 * This function extracts the values from edit table, that was generated with values2table function.
 *
 * @param {string} id name of the html element (or nothing).
 * @return {object} array with values
 */
function table2values(divId) {
    var $div;
    if (!divId) {
        $div = $('body');
    } else {
        $div = $('#' + divId);
    }
    var names = [];
    $div.find('.table-values th').each(function () {
        var name = $(this).data('name');
        if (name) {
            names.push(name);
        } else {
            names.push('___ignore___');
        }
    });

    var values = [];
    var j = 0;
    $div.find('.table-lines tr').each(function () {
        values[j] = {};

        $(this).find('td').each(function () {
            var $input = $(this).find('input');
            if ($input.length) {
                var name = $input.data('name');
                if ($input.attr('type') === 'checkbox') {
                    values[j][name] = $input.prop('checked');
                } else {
                    values[j][name] = $input.val();
                }
            }
            var $select = $(this).find('select');
            if ($select.length) {
                var name = $select.data('name');
                values[j][name] = $select.val() || '';
            }
        });
        j++;
    });

    return values;
}
