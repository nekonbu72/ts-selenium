"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver"); // 3.6.0
var config_1 = require("./config");
// geckodriver v0.18.0
var driver = new selenium_webdriver_1.Builder().forBrowser("firefox").build();
var exe = function () { return __awaiter(_this, void 0, void 0, function () {
    var targetFrame, defaultWindow, handles, _i, handles_1, handle, tmpTitle;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, driver.get(config_1.Config.URL)];
            case 1:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("sei_login")).sendKeys(config_1.Config.SSO_ID)];
            case 2:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("sei_passwd")).sendKeys(config_1.Config.SSO_PASSWORD)];
            case 3:
                _a.sent();
                // submit() はエラーになった
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("login")).sendKeys(selenium_webdriver_1.Key.RETURN)];
            case 4:
                // submit() はエラーになった
                _a.sent();
                return [4 /*yield*/, driver.sleep(2000)];
            case 5:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("fr_menu"))];
            case 6:
                targetFrame = _a.sent();
                return [4 /*yield*/, driver.switchTo().frame(targetFrame)];
            case 7:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.linkText(config_1.Config.SEARCH_MENU)).click()];
            case 8:
                _a.sent();
                return [4 /*yield*/, driver.switchTo().defaultContent()];
            case 9:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("fr_main"))];
            case 10:
                targetFrame = _a.sent();
                return [4 /*yield*/, driver.switchTo().frame(targetFrame)];
            case 11:
                _a.sent();
                return [4 /*yield*/, driver.sleep(2000)];
            case 12:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("kensyu_nm")).sendKeys(config_1.Config.SEARCH)];
            case 13:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name("btn_submit")).sendKeys(selenium_webdriver_1.Key.RETURN)];
            case 14:
                _a.sent();
                return [4 /*yield*/, driver.sleep(2000)];
            case 15:
                _a.sent();
                return [4 /*yield*/, driver
                        .findElement(selenium_webdriver_1.By.id("pms_SeiResult2_link_vd_semdate_fne01_0"))
                        .click()];
            case 16:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.linkText(config_1.Config.DETAIL)).click()];
            case 17:
                _a.sent();
                return [4 /*yield*/, driver.getWindowHandle()];
            case 18:
                defaultWindow = _a.sent();
                return [4 /*yield*/, driver.getAllWindowHandles()];
            case 19:
                handles = _a.sent();
                _i = 0, handles_1 = handles;
                _a.label = 20;
            case 20:
                if (!(_i < handles_1.length)) return [3 /*break*/, 24];
                handle = handles_1[_i];
                return [4 /*yield*/, driver.switchTo().window(handle)];
            case 21:
                _a.sent();
                return [4 /*yield*/, driver.getTitle()];
            case 22:
                tmpTitle = _a.sent();
                if (tmpTitle === config_1.Config.WINDOW) {
                    return [3 /*break*/, 24];
                }
                _a.label = 23;
            case 23:
                _i++;
                return [3 /*break*/, 20];
            case 24: return [4 /*yield*/, driver.sleep(2000)];
            case 25:
                _a.sent();
                return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.linkText(config_1.Config.LINK)).click()];
            case 26:
                _a.sent();
                return [4 /*yield*/, driver.switchTo().window(defaultWindow)];
            case 27:
                _a.sent();
                return [4 /*yield*/, driver.sleep(3000)];
            case 28:
                _a.sent();
                return [4 /*yield*/, driver.close()];
            case 29:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exe();
