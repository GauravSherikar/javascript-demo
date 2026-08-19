/// <reference types="node" />
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  globalTimeout: 3 * 60 * 60 * 1000, // 3 hours
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  expect: {
    timeout: 10_000,
  },

  reporter: [["html", { open: "never" }], ["allure-playwright"]],
  /*Shared settingfor all the projrcts below. see https://playwright.dev/docs/api/class-testoptions  */
  use: {
    /*
    Base URL to use in actions like `await page.goto('/')`. If `baseURL` is specified,
    
    */
    //baseURL: "https://katalon-demo-cura.herokuapp.com/",
    //Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: "on",
    ignoreHTTPSErrors: true,
    navigationTimeout: 30_000,
    screenshot: "on",
    // video: "on",
    //actionsTimeout: 10_000,
    //headless: true,
  },
  projects: [
    {
      name: "chromium",
      use: {
       // ...devices["Desktop Chrome"],
       viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
