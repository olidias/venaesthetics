import { replaceLangInUrl } from "../src/common/url-helper";

test('url helper to convert proper urls', () => {
  const input = "/de/articles";
  const url = new URL(`https://testurl.com/${input}`);
  const targetLang = 'en'
  expect(replaceLangInUrl(url, targetLang)).toBe('https://testurl.com/en/articles');
});