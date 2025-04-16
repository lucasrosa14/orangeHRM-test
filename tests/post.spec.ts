import { test } from "@playwright/test";
import { isMobileProject, loginWithValidCredentials } from "../utils/utils";
import { PostPage } from "../pages/PostPage";

test.describe('Buzz tests', () => {
    test('Post a message', async ({ page }) => {
        test.skip(isMobileProject(), 'Ignorado em mobile');
        await loginWithValidCredentials(page);
        const postPage = new PostPage(page);
        await postPage.goTo();
        await postPage.postMessage();

    })

    test('Verify posted message', async ({ page }) => {
        test.skip(isMobileProject(), 'Ignorado em mobile');
        await loginWithValidCredentials(page);   
        const postPage = new PostPage(page);
        await postPage.goTo();
        await postPage.postMessage();
        await postPage.verifyPostedMessage();
    })

    test('Like a message', async ({ page }) => {
        test.skip(isMobileProject(), 'Ignorado em mobile');
        await loginWithValidCredentials(page);
        const postPage = new PostPage(page);
        await postPage.goTo();
        await postPage.postMessage();
        await postPage.verifyPostedMessage();
        await postPage.likeMessage();    
    })

  });

