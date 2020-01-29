import { Injectable } from '@angular/core';

export class Order {
  ID: number;
  OrderNumber: number;
  OrderDate: string;
  DeliveryDate: string;
  SaleAmount: number;
  Terms: string;
  CustomerStoreCity: string;
  Employee: string;
  Income: number;
  Expense: number;
  Month: string;
}

// export class UserData {
//   SaleAmount: string;
//   City: string;
// }
//
// const userData: UserData[] = [{
//   SaleAmount: '$18000-$20000',
//   City: 'Los Angeles'
// }, {
//   SaleAmount: '$15000-$18000',
//   City: 'San Jose'
// }, {
//   SaleAmount: '$12000-$15000',
//   City: 'Las Vegas'
// }, {
//   SaleAmount: '$9000-$12000',
//   City: 'Denver'
// }, {
//   SaleAmount: '$6000-$9000',
//   City: 'Casper'
// }, {
//   SaleAmount: '$3000-$6000',
//   City: 'Dubai'
// }, {
//   SaleAmount: '$1000-$3000',
//   City: 'China'
// }];

const orders: Order[] = [{
  ID: 1,
  OrderNumber: 35703,
  OrderDate: '2017/04/10',
  DeliveryDate: '2017/04/13 9:00',
  SaleAmount: 11800,
  Terms: '15 Days',
  CustomerStoreCity: 'Los Angeles, CA',
  Employee: 'Harv Mudd',
  Income: 3500,
  Expense: 3000,
  Month: 'January'
}, {
  ID: 4,
  OrderNumber: 35711,
  OrderDate: '2017/01/12',
  DeliveryDate: '2017/01/13 9:00',
  SaleAmount: 16050,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
  Income: 4500,
  Expense: 2000,
  Month: 'February'
}, {
  ID: 5,
  OrderNumber: 35714,
  OrderDate: '2017/01/22',
  DeliveryDate: '2017/01/27 9:00',
  SaleAmount: 14750,
  Terms: '15 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
  Income: 2500,
  Expense: 3000,
  Month: 'March'
}, {
  ID: 7,
  OrderNumber: 35983,
  OrderDate: '2017/02/07',
  DeliveryDate: '2017/02/10 13:00',
  SaleAmount: 3725,
  Terms: '15 Days',
  CustomerStoreCity: 'Denver, CO',
  Employee: 'Todd Hoffman',
  Income: 5500,
  Expense: 2000,
  Month: 'April'
}, {
  ID: 11,
  OrderNumber: 38466,
  OrderDate: '2017/03/01',
  DeliveryDate: '2017/03/03 17:45',
  SaleAmount: 7800,
  Terms: '15 Days',
  CustomerStoreCity: 'Mexico, CA',
  Employee: 'Harv Mudd',
  Income: 3570,
  Expense: 1500,
  Month: 'May'
}, {
  ID: 14,
  OrderNumber: 39420,
  OrderDate: '2017/02/15',
  DeliveryDate: '2017/02/17 11:45',
  SaleAmount: 20500,
  Terms: '15 Days',
  CustomerStoreCity: 'San Jose, CA',
  Employee: 'Jim Packard',
  Income: 2300,
  Expense: 500,
  Month: 'June'
}, {
  ID: 15,
  OrderNumber: 39874,
  OrderDate: '2017/02/04',
  DeliveryDate: '2017/02/10 15:00',
  SaleAmount: 9050,
  Terms: '30 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
  Income: 2500,
  Expense: 3000,
  Month: 'July'
}, {
  ID: 18,
  OrderNumber: 42847,
  OrderDate: '2017/02/15',
  DeliveryDate: '2017/02/17 8:30',
  SaleAmount: 20400,
  Terms: '30 Days',
  CustomerStoreCity: 'Casper, WY',
  Employee: 'Todd Hoffman',
  Income: 4800,
  Expense: 980,
  Month: 'August'
}, {
  ID: 30,
  OrderNumber: 57429,
  OrderDate: '2017/05/16',
  DeliveryDate: '2017/05/19 11:45',
  SaleAmount: 11050,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
  Income: 3600,
  Expense: 1500,
  Month: 'September'
}, {
  ID: 32,
  OrderNumber: 58292,
  OrderDate: '2017/05/13',
  DeliveryDate: '2017/05/19 14:30',
  SaleAmount: 13500,
  Terms: '15 Days',
  CustomerStoreCity: 'Dubai, CA',
  Employee: 'Harv Mudd',
  Income: 4100,
  Expense: 2100,
  Month: 'October'
}, {
  ID: 36,
  OrderNumber: 62427,
  OrderDate: '2017/01/27',
  DeliveryDate: '2017/02/03 18:00',
  SaleAmount: 23500,
  Terms: '15 Days',
  CustomerStoreCity: 'Las Vegas, NV',
  Employee: 'Harv Mudd',
  Income: 8000,
  Expense: 5000,
  Month: 'November'
 },
{
  ID: 91,
  OrderNumber: 214222,
  OrderDate: '2017/02/08',
  DeliveryDate: '2017/02/10 9:45',
  SaleAmount: 11050,
  Terms: '30 Days',
  CustomerStoreCity: 'Phoenix, AZ',
  Employee: 'Clark Morgan',
  Income: 9000,
  Expense: 6000,
  Month: 'December'
}];

@Injectable()
export class Service {
  getOrders(): Order[] {
    return orders;
  }
  // getUserData(): Order[] {
  //   return orders;
  // }
  getGrossProductData(): Order[] {
    return orders;
  }
}
