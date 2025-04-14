import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 
import { validCredentials, invalidCredentials, emptyCredentials } from '../fixtures/testData';  

test.describe('Login tests', () => {
    test('Login with valid credentials', async ({page}) => {    
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(validCredentials.username, validCredentials.password);
        await loginPage.isDashboardVisible();
    })

    test('Login with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(invalidCredentials.username, invalidCredentials.password);
        await loginPage.isInvalidCredentials();
    })

    test('Login with empty credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(emptyCredentials.username, emptyCredentials.password);
        await loginPage.isRequired();
    })  
})