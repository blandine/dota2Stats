import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/.*/)
  })

  test('should display the main heading', async ({ page }) => {
    await page.goto('/')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Dota2 Stats')
  })

  test('should display feature cards', async ({ page }) => {
    await page.goto('/')
    const cards = page.locator('.bg-gray-800')
    const count = await cards.count()
    expect(count).toBeGreaterThan(0)
  })
})
