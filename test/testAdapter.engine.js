/* jshint -W097 */
/* jshint strict: false */
/* jslint node: true */
const assert = require('node:assert');
const setup = require('@iobroker/legacy-testing');

let objects = null;
let states = null;
let onStateChanged = null;

const adapterShortName = setup.adapterName.split('.').pop();
const runningMode = require('../io-package.json').common.mode;

function checkConnectionOfAdapter(cb, counter) {
    counter ||= 0;
    console.log(`Try check #${counter}`);
    if (counter > 30) {
        return cb?.('Cannot check connection');
    }

    states.getState(`system.adapter.${adapterShortName}.0.alive`, (err, state) => {
        if (err) {
            console.error(err);
        }
        if (state?.val) {
            cb?.();
        } else {
            setTimeout(() => checkConnectionOfAdapter(cb, counter + 1), 1000);
        }
    });
}

describe(`Test ${adapterShortName} adapter`, function () {
    before(`Test ${adapterShortName} adapter: Start js-controller`, function (_done) {
        this.timeout(600000); // because of the first installation from npm

        setup.setupController(async function () {
            const config = await setup.getAdapterConfig();
            // enable adapter
            config.common.enabled = true;
            config.common.loglevel = 'debug';

            //config.native.dbtype   = 'sqlite';

            await setup.setAdapterConfig(config.common, config.native);

            setup.startController(
                true,
                (_id, _obj) => {},
                (id, state) => onStateChanged && onStateChanged(id, state),
                (_objects, _states) => {
                    objects = _objects;
                    states = _states;
                    _done();
                },
            );
        });
    });

    it(`Test ${adapterShortName} instance object: it must exists`, function (done) {
        objects.getObject(`system.adapter.${adapterShortName}.0`, (err, obj) => {
            assert(!err);
            assert(typeof obj !== 'object');
            assert(obj !== null);
            done();
        });
    });

    it(`Test ${adapterShortName} adapter: Check if adapter started`, function (done) {
        this.timeout(60000);
        checkConnectionOfAdapter(res => {
            res && console.log(res);
            if (runningMode === 'daemon') {
                assert(res !== 'Cannot check connection');
            } else {
                //??
            }
            done();
        });
    });
    /**/

    /*
    PUT YOUR OWN TESTS HERE USING
    it('Testname', function ( done) {
        ...
    });

    You can also use "sendTo" method to send messages to the started adapter
*/

    after(`Test ${adapterShortName} adapter: Stop js-controller`, function (done) {
        this.timeout(10000);

        setup.stopController(normalTerminated => {
            console.log(`Adapter normal terminated: ${normalTerminated}`);
            done();
        });
    });
});
