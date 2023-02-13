import { Selector } from 'testcafe';

fixture('MS-Team Automation')
  .page('https://teams.microsoft.com/')
  .skipJsErrors();

  test('Test(3)- Sending message & creating task ', async t => {
    await t
      .wait(2000)
      .maximizeWindow()
  
      // login into msteams
      .typeText('input[name="loginfmt"]', 'testing-44@outlook.com')
      .click('input[id="idSIButton9"]')
      .typeText('input[name="passwd"]', 'India@12345')
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
      .typeText('input[id="people-picker-input"]', 'testid30@outlook.com')
      .wait(3000)
      .pressKey('Enter')
  
      // send message
      .typeText('div[data-tid="ckeditor"]', 'Hello testid!')
      .click('button[data-tid="newMessageCommands-send"]')
      .wait(5000)

    // .expect(Selector('p').withText('Hey&nbsp;tester-,&nbsp;message&nbsp;received!')).exists()
  
      
});