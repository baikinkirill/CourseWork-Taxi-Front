import { OrderObject } from '@/types/Order';
import { UserType } from '@/enums/UserType';

export interface UserObject {
 id: number;
 firstName: string;
 lastName: string;
 type: UserType;
 activeOrder: number | OrderObject;
}
