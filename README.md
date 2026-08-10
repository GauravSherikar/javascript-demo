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