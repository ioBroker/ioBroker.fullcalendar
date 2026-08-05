/*!
 * ioBroker build tasks
 * Date: 2024-09-04
 */
'use strict';

const fs = require('node:fs');
const { fork } = require('node:child_process');
const { deleteFoldersRecursive, npmInstall, buildReact, copyFiles } = require('@iobroker/build-tools');

/** Compile the adapter backend: src/*.ts => build/*.js */
function buildBackend() {
    return new Promise((resolve, reject) => {
        const script = `${__dirname}/node_modules/typescript/bin/tsc`;
        if (!fs.existsSync(script)) {
            reject(new Error(`Cannot find execution file: ${script}`));
            return;
        }
        const child = fork(script, ['-p', `${__dirname}/tsconfig.build.json`], { stdio: 'pipe', cwd: __dirname });
        child.stdout?.on('data', data => console.log(data.toString()));
        child.stderr?.on('data', data => console.log(data.toString()));
        child.on('close', code => (code ? reject(new Error(`tsc exit code: ${code}`)) : resolve()));
    });
}

function sync2files(src, dst) {
    let srcTxt = fs.readFileSync(src).toString('utf8');
    let destTxt = fs.readFileSync(dst).toString('utf8');
    if (srcTxt !== destTxt) {
        const srcs = fs.statSync(src);
        const dest = fs.statSync(dst);
        if (srcs.mtime > dest.mtime) {
            if (dst.includes('widgets')) {
                srcTxt = srcTxt.replace(/gui-components/g, 'adapter-react-v5');
            } else {
                srcTxt = srcTxt.replace(/adapter-react-v5/g, 'gui-components');
            }
            fs.writeFileSync(dst, srcTxt);
        } else {
            if (src.includes('widgets')) {
                destTxt = destTxt.replace(/gui-components/g, 'adapter-react-v5');
            } else {
                destTxt = destTxt.replace(/adapter-react-v5/g, 'gui-components');
            }
            fs.writeFileSync(src, destTxt);
        }
    }
}

function buildWidgets() {
    // sync src and src-widgets. Stop it till vis-2 is not updated to react 19
    // sync2files(
    //     `${__dirname}/src-widgets/src/Component/Calendar.tsx`,
    //     `${__dirname}/src-admin/src/Component/Calendar.tsx`,
    // );
    // sync2files(
    //     `${__dirname}/src-widgets/src/Component/EventDialog.tsx`,
    //     `${__dirname}/src-admin/src/Component/EventDialog.tsx`,
    // );
    sync2files(`${__dirname}/src-widgets/src/Component/Utils.ts`, `${__dirname}/src-admin/src/Component/Utils.ts`);
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
    copyFiles(['src-admin/build/**/*', '!src-admin/build/**/_socket/info.js'], 'admin');
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

if (process.argv.includes('--backend-build')) {
    buildBackend().catch(e => {
        console.error(`Cannot build backend: ${e}`);
        process.exit(1);
    });
} else if (process.argv.includes('--0-widget-clean')) {
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
        })
        .then(() => buildBackend());
}
