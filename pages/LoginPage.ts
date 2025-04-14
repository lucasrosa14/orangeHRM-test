import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async isDashboardVisible(): Promise<boolean> {
    return this.page.isVisible('h6:has-text("Dashboard")');
  }

  async isInvalidCredentials(): Promise<boolean> {
    return this.page.isVisible("//p[text()='Invalid credentials']");
  }

  async isRequired(): Promise<boolean> {
    return this.page.isVisible("//span[text()='Required']");
  }
}
