import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usescases/add-acount'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getColletion('accounts')
    const { insertedId } = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne<AccountModel>({
      _id: insertedId
    })
    return MongoHelper.map(account)
  }
}
