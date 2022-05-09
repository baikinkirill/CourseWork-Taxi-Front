export default class Order {
 private _fromAddress?: string;
 private _toAddress?: string;
 private _cost: number = 0;
 private _driverId: number = 0;

 constructor() {}

 set fromAddress(value: string) {
  this._fromAddress = value;
 }

 set toAddress(value: string) {
  this._toAddress = value;
 }

 set cost(value: number) {
  this._cost = value;
 }

 set driverId(value: number) {
  this._driverId = value;
 }

 get fromAddress(): string {
  return this._fromAddress + '';
 }

 get toAddress(): string {
  return this._toAddress + '';
 }

 get cost(): number {
  return this._cost;
 }

 get driverId(): number {
  return this._driverId;
 }
}
