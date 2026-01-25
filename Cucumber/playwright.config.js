
import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

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
    screenshot : 'on',
   // trace: 'on' ,
      trace: 'retain-on-failure' ,
    viewport: null,               
    launchOptions: {
      args: ['--start-maximized'] 
    }
  },
});