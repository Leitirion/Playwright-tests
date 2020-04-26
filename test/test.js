const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'webkit']) {
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://ya.ru');
        await page.type('div[class="search2__input"]', `Hello ${browserType}!`, { delay: 100 });
        await page.click('button[class="button suggest2-form__button button_theme_websearch button_size_xl i-bem"]');
        await page.waitFor(5000);
        await page.screenshot({
            //  path: `screenshots/test-${browserType}.png` 
            path: `./test-${browserType}.png`
        });
        await browser.close();
    }
})();