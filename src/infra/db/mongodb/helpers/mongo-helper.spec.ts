import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongo is down', async () => {
    let accountCollecion = await sut.getColletion('accounts')
    expect(accountCollecion).toBeTruthy()
    await sut.disconnect()
    accountCollecion = await sut.getColletion('accounts')
    expect(accountCollecion).toBeTruthy()
  })
})
