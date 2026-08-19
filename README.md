# JavaScript Demo

A simple JavaScript demo project.

## Run

```bash
npm install
npm start
```

# Instruction and notes

## In this session

** Setup Git Response
 - `git init`
 - `git status`
 - `git add`
 - `git commit -m "<commit-message>"

2.git ignore the following files
 - /debug
 - logs/
 - .env
 - allure-results
 - tests-examples/
 - example.*
 - *.log

 ** Push chnages to remote**
 1.Git Commands
  - `git branch -M main`
  - `git remote add origin <remote-url>`
  - `git remote -v`
  - `git push -u origin main`
2.Issue
  - `git config --list`
  - `git push -f origin main` -> force push

3.Remenmber this - `ACP` - `Add commit push`

**In this session**

**writing first test**
1.Target web app:`https://katalon-demo-cura.herokuapp.com/`
2.steps
   1. Go to the home page
   2. Assert if the little is correct
   3. Assert header text
3.Done! 

**Option 2 - CLI**
- Help -> `npx playwright codegen --help`
- CLI basic command - `npx playwright codegen`
- with URL `npx playwright codegen https://katalon-demo-cura.herokuapp.com/`

**Deep dive into Playwrites Locators**

// `page.getBy*()` and `page.locator()` methods returns the `locator` object
// The above methods not to be `awaited`
// The type of locator is an `object`
// Locators are LAZY until an action is fired on them

**Interacting with web Elements**
- codegen CLI: `npx playwright codegen https://katalon-demo-cura.herokuapp.com/`

**Allure Setup**
1.Check if allure is installed globally - > `allure --version`, if present
2.Install allure commandline globally - >`npm install -g allure-commandline`
3.Install 'Allure' Reporter for project level - > `npm install -D allure-playwright`
4.Add it is the config file
```ts
reporter: [
 [ `html`]                       //Default playwright HTML reporter
 [`allure-playwright`]           //Allure reporter

],
```
6.Run a test and confirm that the new folder is created `allure-results`
7.Spin up the report - > `allure serve`
8.Done! 

**Allure Advanced Setup**
fore more detailed reporting, you can configure additional options:

```ts
reporter:[
  [
  'html',
  {
    open: 'never',//don't auto-open HTML report
  },
],
[
  'allure-playwright',
  {
    details:true,
    suiteTitle:true,
    environmentInfo:{
      name:'TEST',
      appName: "CURA",
      Release: 'Release 1.1',
      node_version: process.version
    },
  },
],
]

**Screenshot**
1.Config options - > `use` - >`screenshot`
2.At test scope level


**Advanced Debugging - pw-API level**
- set `DEBUG=pw:api` to view the API level logs
- Other namesspaces exist too, e.g. `pw:browser*, pw:channel*, pw:protocole*.`

**for stable CI testing**
```ts
args: [
"--no-sandbox",
"--disable-dev-shm-usage"
"--disable-gpu"
"--disable-extensions"
"--disable-background-networking"
"--no-first-run"
"--disable-default-apps"
]
```
### For cross-Origin Testing
```ts
args[
  "--disable-web-security",
  "--disable-features=VizDisplayCompositor",
  "--allow-running-insecure-content",
  "--disable-background-networking"
]
```
### For Mobile
```ts
args[
  "--use-mobile-user-agent",
  "--touch-event=enabled",
  "--enable-viewport-meta"


]
