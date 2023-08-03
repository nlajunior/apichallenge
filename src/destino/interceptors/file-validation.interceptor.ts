import * as fsExtra from 'fs-extra';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Express } from 'express';

@Injectable()
export class FileValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const files: Express.Multer.File[] = req.files;

    return next.handle().pipe(
      catchError(async () => {
        if (files) {
          for (const file of files) {
            await this.deleteFile(file.path);
          }
        }
      }),
    );
  }
  private async deleteFile(filePath: string) {
    try {
      await fsExtra.unlink(filePath); // Remova o arquivo usando a biblioteca fs-extra
    } catch (error) {
      // Aqui você pode lidar com possíveis erros, caso ocorram ao excluir o arquivo
      console.error(`Erro ao excluir o arquivo ${filePath}: ${error.message}`);
    }
  }
}
