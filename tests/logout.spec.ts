import { test } from "@playwright/test";
import { loginWithValidCredentials } from "../utils/utils";

test.describe('Logout test', () => {
  test.only('Logout', async ({ page }) => {
    await loginWithValidCredentials(page);
    await page.click('//li[@class="oxd-userdropdown"]');
    await page.click('//a[@href="/web/index.php/auth/logout"]');
  });
});
