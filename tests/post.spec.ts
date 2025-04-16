import { test } from "@playwright/test";
import { loginWithValidCredentials } from "../utils/utils";
import { PostPage } from "../pages/PostPage";

test.describe('Buzz tests', () => {
    test('Post a message', async ({ page }) => {

        await loginWithValidCredentials(page);
        const postPage = new PostPage(page);
        await postPage.goTo();
        await postPage.postMessage();

    })

    test('Verify posted message', async ({ page }) => {

        await loginWithValidCredentials(page);   
        const postPage = new PostPage(page);
        await postPage.goTo();
        await postPage.postMessage();
        await postPage.verifyPostedMessage();
    })

    test('Like a message', async ({ page }) => {

        await loginWithValidCredentials(page);
        const postPage = new PostPage(page);
        await postPage.goTo();
        await postPage.postMessage();
        await postPage.verifyPostedMessage();
        await postPage.likeMessage();    
    })

  });

