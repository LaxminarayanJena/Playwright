
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout:30 *1000,
  expect :
  {
    timeout : 5000, //assertion
  },
  reporter :'html',
   use: {
    browserName: 'chromium',
    headless: false,
    viewport: null,               
    launchOptions: {
      args: ['--start-maximized'] 
    }
  },
});