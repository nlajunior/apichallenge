import { Module } from '@nestjs/common';
import { DepoimentoService } from './depoimento.service';
import { DepoimentoController } from './depoimento.controller';

@Module({
  controllers: [DepoimentoController],
  providers: [DepoimentoService]
})
export class DepoimentoModule {}
