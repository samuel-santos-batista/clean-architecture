import { DbAddAccount } from "./db-add-acount"

describe('DbAddAccount Usecase', () =>{
  test('Should call Encrypter with correct password', async () => {
    class EncrypterSpyStub {
      async encrypt(value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encrypterSpyStub = new EncrypterSpyStub()
    const sut = new DbAddAccount(encrypterSpyStub)
    const encryptSpy = jest.spyOn(encrypterSpyStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})