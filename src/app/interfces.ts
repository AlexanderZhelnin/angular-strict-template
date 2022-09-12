import { IRow } from "./table/table.component";

export interface IUser
{
  name: string;
  login: string;
}

export interface IPermissions
{
  read: boolean;
  write: boolean;
}

export interface IRowSpan extends IRow
{

}
