import {IProduct } from './iproduct'

export interface ICategory {
    ID           : number   ,
    Name         : string   ,
    productList ?: IProduct[]
}
 