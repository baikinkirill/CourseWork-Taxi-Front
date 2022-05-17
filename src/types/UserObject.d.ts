import { OrderObject } from '@/types/Order';

export enum UserType{
 DRIVER="driver",
 CLIENT="client"
}

export interface UserObject{
 id:number,
 firstName:string,
 lastName:string,
 type:UserType,
 activeOrder:number | OrderObject,

}