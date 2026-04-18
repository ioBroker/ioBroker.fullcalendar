/*!
 * ioBroker build tasks
 * Date: 2024-09-04
 */
'use strict';

const fs = require('node:fs');
const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');

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
    sync2files(
        `${__dirname}/src-widgets/src/Component/Calendar.jsx`,
        `${__dirname}/src-admin/src/Component/Calendar.jsx`,
    );
    sync2files(
        `${__dirname}/src-widgets/src/Component/EventDialog.jsx`,
        `${__dirname}/src-admin/src/Component/EventDialog.jsx`,
    );
    sync2files(`${__dirname}/src-widgets/src/Component/Utils.js`, `${__dirname}/src-admin/src/Component/Utils.js`);
    sync2files(`${__dirname}/src-widgets/src/Component/styles.css`, `${__dirname}/src-admin/src/Component/styles.css`);
    return buildReact(`${__dirname}/src-widgets`, { rootDir: __dirname, vite: true }).catch(() =>
        console.error('Error by build'),
    );
}

// TASKS
function cleanWidget() {
    deleteFoldersRecursive(`${__dirname}/src-widgets/build`);
    deleteFoldersRecursive(`${__dirname}/widgets`);
}

function copyAllFilesWidget() {
    copyFiles(
        ['src-widgets/build/**/*', '!src-widgets/build/index.html', '!src-widgets/build/mf-manifest.json'],
        'widgets/fullcalendar/',
        {
            process: (fileData, fileName) => {
                if (fileName.includes('installSVGRenderer')) {
                    // zrender has an error. It uses isFunction before it is defined
                    // here is a code:
                    //    bind = protoFunction && isFunction(protoFunction.bind) ? protoFunction.call.bind(protoFunction.bind) : bindPolyfill;
                    // and later comes the definition of isFunction:
                    //   isFunction = function(value) {
                    //     return typeof value === "function";
                    //   };

                    // Minified code looks like:
                    //   ut = ra && Y(ra.bind)
                    // Where Y is isFunction and ra is protoFunction
                    fileData = fileData.toString();
                    const match = fileData.match(/\w+\s*=\s*\w+\s*&&\s*(\w)\(\w+.bind\)/);
                    if (match) {
                        // place before match[0] the definition of isFunction
                        fileData = fileData.replace(
                            match[0],
                            `${match[1]}=value=>typeof value === "function";${match[0]}`,
                        ); // prevent error
                    }
                    return fileData;
                }
            },
        },
    );
}

function copyAllFiles() {
    copyFiles(
        [
            'src-admin/build/*',
            `!src-admin/build/_socket/*.js`,
            // replace it later with
            // ...buildHelper.ignoreSvgFiles(`${__dirname}/src-admin/`),
            `!src-admin/build/static/media/Alarm Systems.*.svg`,
            `!src-admin/build/static/media/Amplifier.*.svg`,
            `!src-admin/build/static/media/Anteroom.*.svg`,
            `!src-admin/build/static/media/Attic.*.svg`,
            `!src-admin/build/static/media/Awnings.*.svg`,
            `!src-admin/build/static/media/Balcony.*.svg`,
            `!src-admin/build/static/media/Barn.*.svg`,
            `!src-admin/build/static/media/Basement.*.svg`,
            `!src-admin/build/static/media/Bathroom.*.svg`,
            `!src-admin/build/static/media/Battery Status.*.svg`,
            `!src-admin/build/static/media/Bedroom.*.svg`,
            `!src-admin/build/static/media/Boiler Room.*.svg`,
            `!src-admin/build/static/media/Carport.*.svg`,
            `!src-admin/build/static/media/Ceiling Spotlights.*.svg`,
            `!src-admin/build/static/media/Cellar.*.svg`,
            `!src-admin/build/static/media/Chamber.*.svg`,
            `!src-admin/build/static/media/Chandelier.*.svg`,
            `!src-admin/build/static/media/Climate.*.svg`,
            `!src-admin/build/static/media/Coffee Makers.*.svg`,
            `!src-admin/build/static/media/Cold Water.*.svg`,
            `!src-admin/build/static/media/Computer.*.svg`,
            `!src-admin/build/static/media/Consumption.*.svg`,
            `!src-admin/build/static/media/Corridor.*.svg`,
            `!src-admin/build/static/media/Curtains.*.svg`,
            `!src-admin/build/static/media/Dining Area.*.svg`,
            `!src-admin/build/static/media/Dining Room.*.svg`,
            `!src-admin/build/static/media/Dining.*.svg`,
            `!src-admin/build/static/media/Dishwashers.*.svg`,
            `!src-admin/build/static/media/Doors.*.svg`,
            `!src-admin/build/static/media/Doorstep.*.svg`,
            `!src-admin/build/static/media/Dressing Room.*.svg`,
            `!src-admin/build/static/media/Driveway.*.svg`,
            `!src-admin/build/static/media/Dryer.*.svg`,
            `!src-admin/build/static/media/Entrance.*.svg`,
            `!src-admin/build/static/media/Equipment Room.*.svg`,
            `!src-admin/build/static/media/Fan.*.svg`,
            `!src-admin/build/static/media/Floor Lamps.*.svg`,
            `!src-admin/build/static/media/Front Yard.*.svg`,
            `!src-admin/build/static/media/Gallery.*.svg`,
            `!src-admin/build/static/media/Garage Doors.*.svg`,
            `!src-admin/build/static/media/Garage.*.svg`,
            `!src-admin/build/static/media/Garden.*.svg`,
            `!src-admin/build/static/media/Gates.*.svg`,
            `!src-admin/build/static/media/Ground Floor.*.svg`,
            `!src-admin/build/static/media/Guest Bathroom.*.svg`,
            `!src-admin/build/static/media/Guest Room.*.svg`,
            `!src-admin/build/static/media/Gym.*.svg`,
            `!src-admin/build/static/media/Hairdryer.*.svg`,
            `!src-admin/build/static/media/Hall.*.svg`,
            `!src-admin/build/static/media/Handle.*.svg`,
            `!src-admin/build/static/media/Hanging Lamps.*.svg`,
            `!src-admin/build/static/media/Heater.*.svg`,
            `!src-admin/build/static/media/Home Theater.*.svg`,
            `!src-admin/build/static/media/Hoods.*.svg`,
            `!src-admin/build/static/media/Hot Water.*.svg`,
            `!src-admin/build/static/media/Humidity.*.svg`,
            `!src-admin/build/static/media/Iron.*.svg`,
            `!src-admin/build/static/media/Irrigation.*.svg`,
            `!src-admin/build/static/media/Kitchen.*.svg`,
            `!src-admin/build/static/media/Laundry Room.*.svg`,
            `!src-admin/build/static/media/Led Strip.*.svg`,
            `!src-admin/build/static/media/Light.*.svg`,
            `!src-admin/build/static/media/Lightings.*.svg`,
            `!src-admin/build/static/media/Living Area.*.svg`,
            `!src-admin/build/static/media/Living Room.*.svg`,
            `!src-admin/build/static/media/Lock.*.svg`,
            `!src-admin/build/static/media/Locker Room.*.svg`,
            `!src-admin/build/static/media/Louvre.*.svg`,
            `!src-admin/build/static/media/Mowing Machine.*.svg`,
            `!src-admin/build/static/media/Music.*.svg`,
            `!src-admin/build/static/media/names.*.txt`,
            `!src-admin/build/static/media/Nursery.*.svg`,
            `!src-admin/build/static/media/Office.*.svg`,
            `!src-admin/build/static/media/Outdoor Blinds.*.svg`,
            `!src-admin/build/static/media/Outdoors.*.svg`,
            `!src-admin/build/static/media/People.*.svg`,
            `!src-admin/build/static/media/Playroom.*.svg`,
            `!src-admin/build/static/media/Pool.*.svg`,
            `!src-admin/build/static/media/Power Consumption.*.svg`,
            `!src-admin/build/static/media/Printer.*.svg`,
            `!src-admin/build/static/media/Pump.*.svg`,
            `!src-admin/build/static/media/Rear Wall.*.svg`,
            `!src-admin/build/static/media/Receiver.*.svg`,
            `!src-admin/build/static/media/Sconces.*.svg`,
            `!src-admin/build/static/media/Second Floor.*.svg`,
            `!src-admin/build/static/media/Security.*.svg`,
            `!src-admin/build/static/media/Shading.*.svg`,
            `!src-admin/build/static/media/Shed.*.svg`,
            `!src-admin/build/static/media/Shutters.*.svg`,
            `!src-admin/build/static/media/Sleeping Area.*.svg`,
            `!src-admin/build/static/media/SmokeDetector.*.svg`,
            `!src-admin/build/static/media/Sockets.*.svg`,
            `!src-admin/build/static/media/Speaker.*.svg`,
            `!src-admin/build/static/media/Stairway.*.svg`,
            `!src-admin/build/static/media/Stairwell.*.svg`,
            `!src-admin/build/static/media/Storeroom.*.svg`,
            `!src-admin/build/static/media/Stove.*.svg`,
            `!src-admin/build/static/media/Summer House.*.svg`,
            `!src-admin/build/static/media/Swimming Pool.*.svg`,
            `!src-admin/build/static/media/Table Lamps.*.svg`,
            `!src-admin/build/static/media/Temperature Sensors.*.svg`,
            `!src-admin/build/static/media/Terrace.*.svg`,
            `!src-admin/build/static/media/Toilet.*.svg`,
            `!src-admin/build/static/media/Tv.*.svg`,
            `!src-admin/build/static/media/Upstairs.*.svg`,
            `!src-admin/build/static/media/Vacuum Cleaner.*.svg`,
            `!src-admin/build/static/media/Ventilation.*.svg`,
            `!src-admin/build/static/media/Wardrobe.*.svg`,
            `!src-admin/build/static/media/Washing Machines.*.svg`,
            `!src-admin/build/static/media/Washroom.*.svg`,
            `!src-admin/build/static/media/Water Consumption.*.svg`,
            `!src-admin/build/static/media/Water Heater.*.svg`,
            `!src-admin/build/static/media/Water.*.svg`,
            `!src-admin/build/static/media/Wc.*.svg`,
            `!src-admin/build/static/media/Weather.*.svg`,
            `!src-admin/build/static/media/Window.*.svg`,
            `!src-admin/build/static/media/Windscreen.*.svg`,
            `!src-admin/build/static/media/Workshop.*.svg`,
            `!src-admin/build/static/media/Workspace.*.svg`,
        ],
        'admin',
    );
}

function patch() {
    if (fs.existsSync(`${__dirname}/admin/index.html`)) {
        let code = fs.readFileSync(`${__dirname}/admin/index.html`).toString('utf8');
        code = code.replace(
            /<script>var script=document\.createElement\("script"\)[^<]+<\/script>/,
            `<script type="text/javascript" src="./../../lib/js/socket.io.js"></script>`,
        );

        fs.unlinkSync(`${__dirname}/admin/index.html`);
        fs.writeFileSync(`${__dirname}/admin/tab_m.html`, code);
    }
    if (fs.existsSync(`${__dirname}/src-admin/build/index.html`)) {
        let code = fs.readFileSync(`${__dirname}/src-admin/build/index.html`).toString('utf8');
        code = code.replace(
            /<script>var script=document\.createElement\("script"\)[^<]+<\/script>/,
            `<script type="text/javascript" src="./../../lib/js/socket.io.js"></script>`,
        );

        fs.writeFileSync(`${__dirname}/src-admin/build/tab_m.html`, code);
    }
}

if (process.argv.includes('--0-widget-clean')) {
    cleanWidget();
} else if (process.argv.includes('--1-widget-npm')) {
    npmInstall(`${__dirname}/src-widgets/`, { force: true }).catch(e =>
        console.error(`Cannot execute npm install: ${e}`),
    );
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
    if (!fs.existsSync(`${__dirname}/src-admin/node_modules`)) {
        npmInstall(`${__dirname}/src-admin/`).catch(e => console.error(`Cannot execute npm install: ${e}`));
    }
} else if (process.argv.includes('--2-build')) {
    buildReact(`${__dirname}/src-admin/`, { rootDir: __dirname, vite: true }).catch(e =>
        console.error(`Cannot execute npm run build: ${e}`),
    );
} else if (process.argv.includes('--3-copy')) {
    copyAllFiles();
} else if (process.argv.includes('--4-patch')) {
    patch();
} else if (process.argv.includes('--build')) {
    deleteFoldersRecursive(`${__dirname}/admin`, ['fullcalendar.png']);
    npmInstall(`${__dirname}/src-admin/`)
        .then(() => buildReact(`${__dirname}/src-admin/`, { rootDir: __dirname, vite: true }))
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
            return npmInstall(`${__dirname}/src-admin/`);
        })
        .then(() => buildReact(`${__dirname}/src-admin/`, { rootDir: __dirname, vite: true }))
        .then(() => {
            copyAllFiles();
            patch();
        });
}
