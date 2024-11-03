const engineHelper = require('@iobroker/legacy-testing/engineHelper');
const guiHelper = require('@iobroker/legacy-testing/guiHelper');
const { existsSync } = require('node:fs');
const {
    deleteFoldersRecursive,
} = require('@iobroker/build-tools');
let gPage;

describe.skip('admin-gui', () => {
    before(async function () {
        this.timeout(240_000);
        // Clean tmp folder
        if (existsSync(`${__dirname}/../tmp/iobroker-data`)) {
            deleteFoldersRecursive(`${__dirname}/../tmp/iobroker-data`);
        }

        // install js-controller, web and vis-2-beta
        await engineHelper.startIoBroker();
        const { page } = await guiHelper.startBrowser(process.env.CI === 'true');
        gPage = page;
    });

    it('Check admin fullcalendar', async function () {
        this.timeout(120_000);
        await gPage.waitForSelector('.MuiButtonBase-root', { timeout: 120_000 });
        await guiHelper.screenshot(gPage, '00_started');
    });

    after(async function () {
        this.timeout(5_000);
        await guiHelper.stopBrowser();
        console.log('BROWSER stopped');
        await engineHelper.stopIoBroker();
        console.log('ioBroker stopped');
    });
});
