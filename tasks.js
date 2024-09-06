/*!
 * ioBroker build tasks
 * Date: 2024-09-04
 */
'use strict';

const fs = require('node:fs');
const {
    deleteFoldersRecursive, npmInstall,
    buildReact, copyFiles,
} = require('@iobroker/build-tools');
const adapterName = require('./package.json').name.replace('iobroker.', '');
const buildHelper  = require('@iobroker/vis-2-widgets-react-dev/buildHelper');

function sync2files(src, dst) {
    const srcTxt = fs.readFileSync(src).toString('utf8');
    const destTxt = fs.readFileSync(dst).toString('utf8');
    if (srcTxt !== destTxt) {
        const srcs = fs.statSync(src);
        const dest = fs.statSync(dst);
        if (srcs.mtime > dest.mtime) {
            fs.writeFileSync(dst, srcTxt);
        } else {
            fs.writeFileSync(src, destTxt);
        }
    }
}

function buildWidgets() {
    // sync src and src-widgets
    sync2files(`${__dirname}/src-widgets/src/Component/Calendar.js`, `${__dirname}/src/src/Component/Calendar.js`);
    sync2files(`${__dirname}/src-widgets/src/Component/EventDialog.js`, `${__dirname}/src/src/Component/EventDialog.js`);
    sync2files(`${__dirname}/src-widgets/src/Component/Utils.js`, `${__dirname}/src/src/Component/Utils.js`);
    sync2files(`${__dirname}/src-widgets/src/Component/styles.css`, `${__dirname}/src/src/Component/styles.css`);

    return buildHelper.buildWidgets(__dirname, `${__dirname}/src-widgets/`);
}

// TASKS
function cleanWidget(){
    deleteFoldersRecursive(`${__dirname}/src-widgets/build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
}

function copyAllFilesWidget() {
    copyFiles([`src-widgets/build/*.js`], `widgets/${adapterName}`);
    copyFiles([`src-widgets/build/img/*`], `widgets/${adapterName}/img`);
    copyFiles([`src-widgets/build/*.map`], `widgets/${adapterName}`);

    let files = [`src-widgets/build/static/*`,
        ...buildHelper.ignoreFiles(`src-widgets/`)];
    copyFiles(files, `widgets/${adapterName}/static`);
    copyFiles([
        'src-widgets/build/static/js/*emotion_styled_dist*',
        'src-widgets/build/static/js/*react-transition-group_esm*',
        'src-widgets/build/static/js/*mui_system_colorManipulator*',
    ], `widgets/${adapterName}/static/js`);

    copyFiles([
        'src-widgets/build/static/js/*mui_material_styles_styled_js-node_modules_mui_material_styles_useTheme*.*',
        'src-widgets/build/static/js/*mui_material_styles_useTheme_js-node_modules*.*',
        'src-widgets/build/static/js/*mui_material_Button_Button_js-node_modules_mui_material_DialogActions*.*',
        'src-widgets/build/static/js/*mui_material_Button_Button_js-node_modules_mui_material_Chip_Chip_*.*',
        'src-widgets/build/static/js/*mui_material_Button_Button_js-node_modules_mui_material_Dialog_Dialog_*.*',
        'src-widgets/build/static/js/*mui_styled-engine_index_js-node_modules_mui_system_esm_*.*',
        'src-widgets/build/static/js/*mui_material_styles_styled_*.*',
        'src-widgets/build/static/js/*mui_x-date-pickers_TimePicker_TimePicker*.*',
        'src-widgets/build/static/js/*mui_x-date-pickers_AdapterMoment*.*',
        'src-widgets/build/static/js/*react-transition-group_esm_CSSTransition*.*',
        'src-widgets/build/static/js/*suncalc2_suncalc2*.*',
        ...buildHelper.copyFiles(`src-widgets/`),
    ], `widgets/${adapterName}/static/js`);

    copyFiles([`src-widgets/src/i18n/*.json`], `widgets/${adapterName}/i18n`);

    return new Promise(resolve =>
        setTimeout(() => {
            if (fs.existsSync(`widgets/${adapterName}/static/media`) &&
                !fs.readdirSync(`widgets/${adapterName}/static/media`).length
            ) {
                fs.rmdirSync(`widgets/${adapterName}/static/media`);
            }
            resolve(null);
        }, 500)
    );
}

function copyAllFiles() {
    copyFiles([
        'src/build/*',
        `!src/build/_socket/*.js`,
        // replace it later with
        // ...buildHelper.ignoreSvgFiles(`${__dirname}/src/`),
        `!src/build/static/media/Alarm Systems.*.svg`,
        `!src/build/static/media/Amplifier.*.svg`,
        `!src/build/static/media/Anteroom.*.svg`,
        `!src/build/static/media/Attic.*.svg`,
        `!src/build/static/media/Awnings.*.svg`,
        `!src/build/static/media/Balcony.*.svg`,
        `!src/build/static/media/Barn.*.svg`,
        `!src/build/static/media/Basement.*.svg`,
        `!src/build/static/media/Bathroom.*.svg`,
        `!src/build/static/media/Battery Status.*.svg`,
        `!src/build/static/media/Bedroom.*.svg`,
        `!src/build/static/media/Boiler Room.*.svg`,
        `!src/build/static/media/Carport.*.svg`,
        `!src/build/static/media/Ceiling Spotlights.*.svg`,
        `!src/build/static/media/Cellar.*.svg`,
        `!src/build/static/media/Chamber.*.svg`,
        `!src/build/static/media/Chandelier.*.svg`,
        `!src/build/static/media/Climate.*.svg`,
        `!src/build/static/media/Coffee Makers.*.svg`,
        `!src/build/static/media/Cold Water.*.svg`,
        `!src/build/static/media/Computer.*.svg`,
        `!src/build/static/media/Consumption.*.svg`,
        `!src/build/static/media/Corridor.*.svg`,
        `!src/build/static/media/Curtains.*.svg`,
        `!src/build/static/media/Dining Area.*.svg`,
        `!src/build/static/media/Dining Room.*.svg`,
        `!src/build/static/media/Dining.*.svg`,
        `!src/build/static/media/Dishwashers.*.svg`,
        `!src/build/static/media/Doors.*.svg`,
        `!src/build/static/media/Doorstep.*.svg`,
        `!src/build/static/media/Dressing Room.*.svg`,
        `!src/build/static/media/Driveway.*.svg`,
        `!src/build/static/media/Dryer.*.svg`,
        `!src/build/static/media/Entrance.*.svg`,
        `!src/build/static/media/Equipment Room.*.svg`,
        `!src/build/static/media/Fan.*.svg`,
        `!src/build/static/media/Floor Lamps.*.svg`,
        `!src/build/static/media/Front Yard.*.svg`,
        `!src/build/static/media/Gallery.*.svg`,
        `!src/build/static/media/Garage Doors.*.svg`,
        `!src/build/static/media/Garage.*.svg`,
        `!src/build/static/media/Garden.*.svg`,
        `!src/build/static/media/Gates.*.svg`,
        `!src/build/static/media/Ground Floor.*.svg`,
        `!src/build/static/media/Guest Bathroom.*.svg`,
        `!src/build/static/media/Guest Room.*.svg`,
        `!src/build/static/media/Gym.*.svg`,
        `!src/build/static/media/Hairdryer.*.svg`,
        `!src/build/static/media/Hall.*.svg`,
        `!src/build/static/media/Handle.*.svg`,
        `!src/build/static/media/Hanging Lamps.*.svg`,
        `!src/build/static/media/Heater.*.svg`,
        `!src/build/static/media/Home Theater.*.svg`,
        `!src/build/static/media/Hoods.*.svg`,
        `!src/build/static/media/Hot Water.*.svg`,
        `!src/build/static/media/Humidity.*.svg`,
        `!src/build/static/media/Iron.*.svg`,
        `!src/build/static/media/Irrigation.*.svg`,
        `!src/build/static/media/Kitchen.*.svg`,
        `!src/build/static/media/Laundry Room.*.svg`,
        `!src/build/static/media/Led Strip.*.svg`,
        `!src/build/static/media/Light.*.svg`,
        `!src/build/static/media/Lightings.*.svg`,
        `!src/build/static/media/Living Area.*.svg`,
        `!src/build/static/media/Living Room.*.svg`,
        `!src/build/static/media/Lock.*.svg`,
        `!src/build/static/media/Locker Room.*.svg`,
        `!src/build/static/media/Louvre.*.svg`,
        `!src/build/static/media/Mowing Machine.*.svg`,
        `!src/build/static/media/Music.*.svg`,
        `!src/build/static/media/names.*.txt`,
        `!src/build/static/media/Nursery.*.svg`,
        `!src/build/static/media/Office.*.svg`,
        `!src/build/static/media/Outdoor Blinds.*.svg`,
        `!src/build/static/media/Outdoors.*.svg`,
        `!src/build/static/media/People.*.svg`,
        `!src/build/static/media/Playroom.*.svg`,
        `!src/build/static/media/Pool.*.svg`,
        `!src/build/static/media/Power Consumption.*.svg`,
        `!src/build/static/media/Printer.*.svg`,
        `!src/build/static/media/Pump.*.svg`,
        `!src/build/static/media/Rear Wall.*.svg`,
        `!src/build/static/media/Receiver.*.svg`,
        `!src/build/static/media/Sconces.*.svg`,
        `!src/build/static/media/Second Floor.*.svg`,
        `!src/build/static/media/Security.*.svg`,
        `!src/build/static/media/Shading.*.svg`,
        `!src/build/static/media/Shed.*.svg`,
        `!src/build/static/media/Shutters.*.svg`,
        `!src/build/static/media/Sleeping Area.*.svg`,
        `!src/build/static/media/SmokeDetector.*.svg`,
        `!src/build/static/media/Sockets.*.svg`,
        `!src/build/static/media/Speaker.*.svg`,
        `!src/build/static/media/Stairway.*.svg`,
        `!src/build/static/media/Stairwell.*.svg`,
        `!src/build/static/media/Storeroom.*.svg`,
        `!src/build/static/media/Stove.*.svg`,
        `!src/build/static/media/Summer House.*.svg`,
        `!src/build/static/media/Swimming Pool.*.svg`,
        `!src/build/static/media/Table Lamps.*.svg`,
        `!src/build/static/media/Temperature Sensors.*.svg`,
        `!src/build/static/media/Terrace.*.svg`,
        `!src/build/static/media/Toilet.*.svg`,
        `!src/build/static/media/Tv.*.svg`,
        `!src/build/static/media/Upstairs.*.svg`,
        `!src/build/static/media/Vacuum Cleaner.*.svg`,
        `!src/build/static/media/Ventilation.*.svg`,
        `!src/build/static/media/Wardrobe.*.svg`,
        `!src/build/static/media/Washing Machines.*.svg`,
        `!src/build/static/media/Washroom.*.svg`,
        `!src/build/static/media/Water Consumption.*.svg`,
        `!src/build/static/media/Water Heater.*.svg`,
        `!src/build/static/media/Water.*.svg`,
        `!src/build/static/media/Wc.*.svg`,
        `!src/build/static/media/Weather.*.svg`,
        `!src/build/static/media/Window.*.svg`,
        `!src/build/static/media/Windscreen.*.svg`,
        `!src/build/static/media/Workshop.*.svg`,
        `!src/build/static/media/Workspace.*.svg`,
    ], 'admin');
}

function patch() {
    if (fs.existsSync(`${__dirname}/admin/index.html`)) {
        let code = fs.readFileSync(`${__dirname}/admin/index.html`).toString('utf8');
        code = code.replace(/<script>var script=document\.createElement\("script"\)[^<]+<\/script>/,
            `<script type="text/javascript" src="./../../lib/js/socket.io.js"></script>`);

        fs.unlinkSync(`${__dirname}/admin/index.html`);
        fs.writeFileSync(`${__dirname}/admin/tab_m.html`, code);
    }
    if (fs.existsSync(`${__dirname}/src/build/index.html`)) {
        let code = fs.readFileSync(`${__dirname}/src/build/index.html`).toString('utf8');
        code = code.replace(/<script>var script=document\.createElement\("script"\)[^<]+<\/script>/,
            `<script type="text/javascript" src="./../../lib/js/socket.io.js"></script>`);

        fs.writeFileSync(`${__dirname}/src/build/tab_m.html`, code);
    }
}

if (process.argv.includes('--0-widget-clean')) {
    cleanWidget();
} else if (process.argv.includes('--1-widget-npm')) {
    npmInstall(`${__dirname}/src-widgets/`, { force: true })
        .catch(e => console.error(`Cannot execute npm install: ${e}`));
} else if (process.argv.includes('--2-widget-compile')) {
    buildWidgets();
} else if (process.argv.includes('--3-widget-copy')) {
    copyAllFilesWidget();
} else if (process.argv.includes('--widget-build')) {
    cleanWidget();
    npmInstall(`${__dirname}/src-widgets/`, { force: true })
        .then(() => buildWidgets())
        .then(() => copyAllFilesWidget());
} else if (process.argv.includes('--0-clean')) {
    deleteFoldersRecursive(`${__dirname}/admin`, ['fullcalendar.png']);
} else if (process.argv.includes('--1-npm')) {
    if (!fs.existsSync(`${__dirname}/src/node_modules`)) {
        npmInstall(`${__dirname}/src/`)
            .catch(e => console.error(`Cannot execute npm install: ${e}`));
    }
} else if (process.argv.includes('--2-build')) {
    buildReact(`${__dirname}/src/`)
        .catch(e => console.error(`Cannot execute npm run build: ${e}`));
} else if (process.argv.includes('--3-copy')) {
    copyAllFiles();
} else if (process.argv.includes('--4-patch')) {
    patch();
} else if (process.argv.includes('--build')) {
    deleteFoldersRecursive(`${__dirname}/admin`, ['fullcalendar.png']);
    npmInstall(`${__dirname}/src/`)
        .then(() => buildReact(`${__dirname}/src/`))
        .then(() => {
            copyAllFiles();
            patch();
        });
} else {
    cleanWidget();
    npmInstall(`${__dirname}/src-widgets/`, { force: true })
        .then(() => buildWidgets())
        .then(() => copyAllFilesWidget())
        .then(() => {
            deleteFoldersRecursive(`${__dirname}/admin`, ['fullcalendar.png']);
            return npmInstall(`${__dirname}/src/`);
        })
        .then(() => buildReact(`${__dirname}/src/`))
        .then(() => {
            copyAllFiles();
            patch();
        });
}
