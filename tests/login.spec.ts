import { test } from '@playwright/test';
import { loginWithValidCredentials, openLoginPage } from '../utils/utils';
import { invalidCredentials, emptyCredentials } from '../fixtures/testData';  

test.describe('Login tests', () => {
    test('Login with valid credentials', async ({ page }) => {
      await loginWithValidCredentials(page)
    })
  
    test('Login with invalid credentials', async ({ page }) => {
      const loginPage = await openLoginPage(page);
      await loginPage.login(invalidCredentials.username, invalidCredentials.password);
      await loginPage.isInvalidCredentials();
    });
  
    test('Login with empty credentials', async ({ page }) => {
      const loginPage = await openLoginPage(page);
      await loginPage.login(emptyCredentials.username, emptyCredentials.password);
      await loginPage.isRequired();
    });
  });