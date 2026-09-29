import { Page, Locator } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly businessAreaSelect: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.businessAreaSelect = page.getByRole('combobox').first();
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: /log in/i });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(area: string, username: string, password: string) {
    await this.businessAreaSelect.selectOption({ label: area });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}