const helper = require('@iobroker/vis-2-widgets-testing');
const { existsSync } = require('node:fs');
const { deleteFoldersRecursive } = require('@iobroker/build-tools');
const adapterName = require('../package.json').name.split('.').pop();

describe('fullcalendar', () => {
    before(async function () {
        // Clean tmp folder, so js-controller will be set up from scratch and
        // web/vis-2 are part of the "original files" snapshot. Without that, a
        // previous engine test run leaves a snapshot without web/vis-2, which is
        // restored here and removes the web.0/vis-2.0 instances again.
        if (existsSync(`${__dirname}/../tmp/iobroker-data`)) {
            deleteFoldersRecursive(`${__dirname}/../tmp/iobroker-data`);
        }
        this.timeout(180000);
        // install js-controller, web and vis-2-beta
        await helper.startIoBroker({ startOwnAdapter: true });
        await helper.startBrowser(process.env.CI === 'true');
        await helper.createProject();

        // open widgets
        await helper.palette.openWidgetSet(null, adapterName);
        await helper.screenshot(null, '02_widgets_opened');
    });

    it('Check all widgets', async function () {
        this.timeout(60000);
        const widgets = await helper.palette.getListOfWidgets(null, adapterName);
        for (let w = 0; w < widgets.length; w++) {
            const wid = await helper.palette.addWidget(null, widgets[w], true);
            await helper.screenshot(null, `10_${widgets[w]}`);
            await helper.view.deleteWidget(null, wid);
        }
    });

    after(async function () {
        this.timeout(5000);
        await helper.stopBrowser();
        console.log('BROWSER stopped');
        await helper.stopIoBroker();
        console.log('ioBroker stopped');
    });
});
