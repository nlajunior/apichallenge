import { Module } from '@nestjs/common';
import { DestinoService } from './destino.service';
import { DestinoController } from './destino.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinoEntity } from './destino.entity';
import { FileValidationInterceptor } from './interceptors/file-validation.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([DestinoEntity])],
  controllers: [DestinoController],
  providers: [DestinoService, FileValidationInterceptor],
})
export class DestinoModule {}
