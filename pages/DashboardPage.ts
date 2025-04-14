import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isDashboardVisible(): Promise<boolean> {
    return this.page.isVisible('h6:has-text("Dashboard")');
  }
  
}