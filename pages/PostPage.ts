import { expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class PostPage {
    private message: string = '';
    readonly page: Page;
   
    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.locator('span:has-text("Buzz")').click();
    }

    async postMessage() {
        this.message = faker.string.sample({ min: 10, max: 20 });
        await this.page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
        await this.page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(this.message);
        await this.page.getByRole('button', { name: 'Post', exact: true }).click();
    }

    async verifyPostedMessage() {
        const post = this.page.getByText(this.message);
        await expect(post).toBeTruthy();
    }

    async likeMessage() {
        
        await this.page.locator('.orangehrm-buzz-stats-row > .oxd-icon').first().click();
        await this.page.getByRole('button', { name: '' }).first().click();
        await this.page.locator('#heart').first().click();
        await this.page.getByText('1 Like').first().click();
    }

}