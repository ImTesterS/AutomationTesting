import { Selector } from 'testcafe';

fixture('MS-Team Automation')
    .page('https://teams.microsoft.com/')
    .skipJsErrors();

test('Test(3)- Sending message & creating task ', async t => {
    await t
        .wait(2000)
        // .maximizeWindow()

        // login into msteams
        .typeText('input[name="loginfmt"]', 'testid30@outlook.com')
        .click('input[id="idSIButton9"]')
        .typeText('input[name="passwd"]', 'India@123456')
        .click('input[id="idSIButton9"]')
        .click('input[id="idSIButton9"]')
        .click('.use-app-lnk')
        .wait(15000)

        // click on new chat
        .click(Selector('span').withText('Chat'))
        .wait(2000)
        .click('button[title="New Chat (Alt+N)"]')
        .wait(10000)

        // getting into iframe
        .switchToIframe('.embedded-electron-webview.embedded-page-content')

        // add people
        .typeText('input[id="people-picker-input"]', 'testing-44@outlook.com')
        .wait(3000)
        .pressKey('Enter')
        .wait(5000)

    if (await Selector('p').withText('Hello&nbsp;testid!').exists) {
        // send message
        await t
            .typeText('div[data-tid="ckeditor"]', 'Hey tester-, message received!')
            .click('button[data-tid="newMessageCommands-send"]')
            .wait(5000)
    }
    else {
        await t
            .typeText('div[data-tid="ckeditor"]', 'Hey tester-, message not received!')
            .click('button[data-tid="newMessageCommands-send"]')
            .wait(5000)

    }

});