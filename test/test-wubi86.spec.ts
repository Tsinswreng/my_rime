import { expect, test } from '@playwright/test'
import { baseURL, item, input, expectValue, selectIME } from './util'

const ime = '86五笔'

test('Simplified/Traditional', async ({ page }) => {
  await page.goto(baseURL)

  await selectIME(page, ime)
  await input(page, 'dc')
  await expect(item(page, '4 碼')).toBeVisible()
  await input(page, '2')
  await expectValue(page, '码')
})
