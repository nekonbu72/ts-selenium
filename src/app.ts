import { Builder, By } from "selenium-webdriver";
import { Config } from "./config";

const driver = new Builder().forBrowser("firefox").build();

const exe = async (): Promise<void> => {
    await driver.get(Config.URL);

    await driver.findElement(By.name("sei_login")).sendKeys(Config.SSO_ID);

    await driver.sleep(3000);
    await driver.close();
};

exe();
