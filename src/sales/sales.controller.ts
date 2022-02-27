import { Controller, Get, Post, UseInterceptors, UnsupportedMediaTypeException, Param,  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { SalesService } from './sales.service';
import { parse } from 'papaparse';
import camelcase
 from 'camelcase';
import e from 'express';
@Controller('sales')
export class SalesController {
    constructor (private salesService: SalesService){}

    @Post('/record')
    @UseInterceptors(
        FileInterceptor('file', { storage: diskStorage({
        destination: './files',
        filename: function (req, file, cb) {
            cb (null, 'dummy.csv')
        }
    }), }),  )
    async uploadFile(){           
        const csvFile = readFileSync('./files/dummy.csv');
        const data = csvFile.toString();

        const parsedData = await parse(data, {
            header:true,
            skipEmptyLines:true,
            transformHeader: (header) => camelcase(header.toLowerCase().replace('#','').trim()),
            complete: (results) => results.data,
        });
        console.log(parsedData);
        if (!parsedData.data){
            throw new Error('No data to process');
        }
        for (const element of parsedData.data) {
            await this.salesService.upload(element['userName'], parseInt(element['age']), parseFloat(element['height']), element['gender'], parseFloat(element['sales']),element['lastPurchaseDate']);
        }       
    }
    
    @Get('/report/:date')
    async getReport(@Param('date') date: string){
       let start,end;
       if (date.indexOf('&')){
            [start,end]=date.replace('start=','').replace('end=','').split('&');
            
       }
       else{
        start=date.replace('start=','').replace('end=','');  
       }    
       const result= await this.salesService.searchByDate(start,end);  
       return result;
    }
    
}
