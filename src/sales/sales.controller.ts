import { Controller, Get, Post, UploadedFile, UseInterceptors, UnsupportedMediaTypeException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { createReadStream, readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { join } from 'path';
import { SalesService } from './sales.service';
import { parse } from 'papaparse';

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

        const parsedData = await  parse(data, {
            header:true,
            skipEmptyLines:true,
            transformHeader: (header) => header.toLowerCase().replace('#','').trim(),
            complete: (results) => results.data,
        });
        if (!parsedData.data){
            throw new Error('No data to process');
        }
        for (const element of parsedData.data) {
            await this.salesService.create(element['user_name'], parseInt(element['age']), parseFloat(element['height']), element['gender'], parseFloat(element['sales']),element['last_purchase_date']);
        }
        
        
       
        
    }
    
    @Get('/report')
    getReport(){

    }
}
