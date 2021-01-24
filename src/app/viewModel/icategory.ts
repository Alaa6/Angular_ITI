import {IProduct } from './iproduct'

export interface ICategory {
    id           : number   ,
    Name         : string   ,
    Desciption  ?: string   ,
    productList ?: IProduct[]
}
 