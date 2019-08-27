import { Builder, By, Key } from "selenium-webdriver"; // 4.0.0-alpha.1
import { Options } from "selenium-webdriver/firefox";
import { Config } from "./config";

const options = new Options()
    .set("browser.download.folderList", 2)
    .set("browser.download.manager.showWhenStarting", false)
    .set("browser.download.dir", Config.DOWNLOAD_DIR)
    .set("browser.helperApps.neverAsk.saveToDisk", Config.MIMETYPE);

// geckodriver v0.18.0
const driver = new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(options)
    .build();

// .withCapabilities(option)

const exe = async (): Promise<void> => {
    await driver.get(Config.URL);

    await driver.findElement(By.name("sei_login")).sendKeys(Config.SSO_ID);
    await driver.findElement(By.name("sei_passwd")).sendKeys(Config.SSO_PASSWORD);
    // submit() はエラーになった
    await driver.findElement(By.name("login")).sendKeys(Key.RETURN);

    await driver.sleep(2000);

    let targetFrame = await driver.findElement(By.name("fr_menu"));
    await driver.switchTo().frame(targetFrame);
    await driver.findElement(By.linkText(Config.SEARCH_MENU)).click();

    await driver.switchTo().defaultContent();
    targetFrame = await driver.findElement(By.name("fr_main"));
    await driver.switchTo().frame(targetFrame);

    await driver.sleep(2000);

    await driver.findElement(By.name("kensyu_nm")).sendKeys(Config.SEARCH);
    await driver.findElement(By.name("btn_submit")).sendKeys(Key.RETURN);

    await driver.sleep(2000);

    await driver
        .findElement(By.id("pms_SeiResult2_link_vd_semdate_fne01_0"))
        .click();
    await driver.findElement(By.linkText(Config.DETAIL)).click();

    const defaultWindow = await driver.getWindowHandle();
    const handles = await driver.getAllWindowHandles();
    for (let handle of handles) {
        await driver.switchTo().window(handle);
        const tmpTitle = await driver.getTitle();
        if (tmpTitle === Config.WINDOW) {
            break;
        }
    }

    await driver.sleep(2000);

    await driver.findElement(By.linkText(Config.LINK)).click();

    await driver.switchTo().window(defaultWindow);
    await driver.sleep(3000);
    await driver.close();
};

exe();
