import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usescases/add-acount';
import { MongoHelper } from '../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel>{
    const accountCollection = MongoHelper.getColletion('accounts')
    const result = await accountCollection.insertOne(accountData)
    // const account = result.ops[0]
    console.log(result)
    return result
  }
}