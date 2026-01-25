import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 2,
  expect: {
    timeout: 5000,
  },

  reporter: 'html',
  use: {
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
    //video: 'retain-on-failure',
    // ...devices['iPhone 11'],
    //viewport: {width:720,height:720}, 
    // ignoreHTTPSErrors: true,
     //permissions:['geolocation']
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'Safari',
      use: {
        browserName: 'webkit',
      },
    },
  ],
});
