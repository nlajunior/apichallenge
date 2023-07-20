import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepoimentoModule } from './depoimento/depoimento.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [DepoimentoModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
