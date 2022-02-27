import { Test, TestingModule } from '@nestjs/testing';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

it('it can create an instance of sales service a csv', async () => {
  const module = await Test.createTestingModule({
    providers: [SalesService]
  }).compile()

  const service = module.get(SalesService);

  expect(service).toBeDefined();
});
