import { Controller, Get, Post, UploadedFile, UseInterceptors, UnsupportedMediaTypeException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor (private salesService: SalesService){}
    @Post('/record')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File){
        if(file.mimetype!='text/csv'){
            throw new UnsupportedMediaTypeException('File Should be in CSV');
        }       
        const csvdata = file.buffer.toString('utf-8');        
        console.log(csvdata);
    }
    @Get('/report')
    getReport(){

    }
}
