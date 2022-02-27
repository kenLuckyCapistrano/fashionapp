import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository, Between} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Sales } from './sales.entity';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sales) private repo: Repository<Sales>){}

   async upload(userName: string, age: number, height: number, gender: string, sales: number, lastPurchaseDate: string){
        const saleDetails = await this.repo.create({userName, age, height, gender, sales, lastPurchaseDate });
        
        return this.repo.save(saleDetails);
    }

    searchByDate(start: Date, end: Date) {
        if (!start) {
          return new Error(`No date supplied`);
        }
        
        if (end){
           return this.repo.find({
                where: {
                    lastPurchaseDate: Between(start,end)
                }
            })
        }
        
        return this.repo.find({
            where: {
                lastPurchaseDate: start
            }
        });
        
    }

}
