import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login';
import { DashboardPage } from '../pages/DashboardPage';

test('login and verify dashboard details', async ({ page }) => {
  const login = new Login(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.login('Retail Banking', 'demo', 'demo1234');

  await expect(dashboard.welcomeHeading).toHaveText('Welcome, demo');
  await expect(dashboard.accountBalance).toHaveText('₹1,25,000.50');
});