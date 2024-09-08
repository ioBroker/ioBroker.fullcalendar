const engineHelper = require('./engineHelper');
const guiHelper = require('./guiHelper');
const {
    deleteFoldersRecursive,
} = require('@iobroker/build-tools');
let gPage;

async function screenshot(page, fileName) {
    page = page || gPage;
    await page.screenshot({ path: `${__dirname}/../tmp/screenshots/${fileName}.png` });
}

describe('admin-gui', () => {
    before(async function () {
        this.timeout(240_000);
        // Clean tmp folder
        deleteFoldersRecursive(`${__dirname}/../tmp`);

        // install js-controller, web and vis-2-beta
        await engineHelper.startIoBroker();
        const { page } = await guiHelper.startBrowser(process.env.CI === 'true');
        gPage = page;
    });

    it('Check admin fullcalendar', async function () {
        this.timeout(120_000);
        await gPage.waitForSelector('.MuiButtonBase-root', { timeout: 120_000 });
        await screenshot(gPage, '00_started');
    });

    after(async function () {
        this.timeout(5_000);
        await guiHelper.stopBrowser();
        console.log('BROWSER stopped');
        await engineHelper.stopIoBroker();
        console.log('ioBroker stopped');
    });
});
