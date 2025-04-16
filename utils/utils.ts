import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { userRegister, validCredentials } from '../fixtures/testData';

export async function openLoginPage(page: Page): Promise<LoginPage> {
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  return loginPage;
}

export async function loginWithValidCredentials(page: Page): Promise<void> {
  const loginPage = await openLoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.login(validCredentials.username, validCredentials.password);
  await dashboardPage.isDashboardVisible();
}

export async function loginWithCreatedUser(page: Page): Promise<void> {
  const loginPage = await openLoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.login(userRegister.username, userRegister.password);
  await dashboardPage.isDashboardVisible();
}
