import { MongoHelper } from '../helpers/mongo-helper'

describe('Account Mongo Repository', () => {
  beforeAll(async ()=>{
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async ()=>{
    await MongoHelper.disconnect()
  })
  test('Should return an account on sucess', ()=>{
    const sut = new AccountMongoRepository()
    const account = sut.add({
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_mail@mail.com')
    expect(account.password).toBe('any_password')
  })
})