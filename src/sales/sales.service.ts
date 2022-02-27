import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Sales } from './sales.entity';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sales) private repo: Repository<Sales>){}

   async upload(userName: string, age: number, height: number, gender: string, sales: number, lastPurchaseDate: string){
        const saleDetails = await this.repo.create({userName, age, height, gender, sales, lastPurchaseDate });
        
        return this.repo.save(saleDetails);
    }
}
