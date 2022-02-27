import { Test, TestingModule } from '@nestjs/testing';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

it('it can create an instance of sales service', async () => {
  //Create a fake copy of sales service
  const fakeSalesService: Partial<SalesService> = {
    create: (userName: string, age: number, height: number, gender: string, sales: number, lastPurchaseDate: string) =>
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

  const service = module.get(SalesService);

  expect(service).toBeDefined();
});
