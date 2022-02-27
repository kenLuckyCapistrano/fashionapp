import { Test, TestingModule } from '@nestjs/testing';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

describe('SalesService', ()=>{
  let service: SalesService;

  beforeEach(async () => {
    //Create a fake copy of sales service
    const fakeSalesService: Partial<SalesService> = {
      upload: (userName: string, age: number, height: number, gender: string, sales: number, lastPurchaseDate: string) =>
       Promise.resolve({id:1,userName, age, height, gender,sales,lastPurchaseDate} as Sales),
    };
  
    const module = await Test.createTestingModule({
      providers: [
      {
        provide: SalesService,
        useValue: fakeSalesService,
      },
    ],
    }).compile()
  
    service = module.get(SalesService);
  })
  
  it('it can create an instance of sales service', async () => { 
    expect(service).toBeDefined();
  }); 
  it('it creates record to the database', async () => { 
    const data = await service.upload('Ken', 22, 160, 'M', 1760, '2020/01/22');
    expect(data.userName).toEqual('Ken');

  }); 
});
