import test, { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { validCredentials } from '../fixtures/testData';

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

export function isMobileProject() {
  const name = test.info().project.name.toLowerCase();
  return name.includes('mobile');
}


