import { describe, expect, test, beforeAll, afterAll } from 'bun:test'
import buildApp from './app.js'

let app
let appUrl

beforeAll(() => {
  app = buildApp()
  appUrl = `http://localhost:${app.port}`
})

afterAll(async () => {
  await app.stop()
})

describe('the app', () => {
  test('says hello to the world', async () => {
    const response = await fetch(`${appUrl}?name=world`)
    const data = await response.text();

    expect(data).toBe('Hello world!')
  })

  test('says hello to strangers', async () => {
    const response = await fetch(appUrl)
    const data = await response.text();

    expect(data).toBe('Hello stranger!')
  })
})
