import { AddAccountModel } from '../../domain/usescases/add-acount'
import { AccountModel } from '../usescases/add-account/db-add-account-protocols';

export interface AddAccountRepository {
  add(accountData: AddAccountModel): Promise<AccountModel>
}