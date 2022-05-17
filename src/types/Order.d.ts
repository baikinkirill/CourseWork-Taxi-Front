import { OrderStatus } from '@/enums/OrderStatus';

export interface OrderObject {
 id: number;
 clientId: number;
 driverId: number;
 fromAddress: string;
 toAddress: string;
 cost: number;
 startTime: number;
 status: OrderStatus;
 endTime: number;
}
