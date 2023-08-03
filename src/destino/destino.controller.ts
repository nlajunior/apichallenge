import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  UploadedFiles,
} from '@nestjs/common';
import { DestinoService } from './destino.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { ListDestinoDto } from './dto/list-destino.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import multerConfig from 'src/files/multer-config';
import { FileValidationInterceptor } from './interceptors/file-validation.interceptor';

@Controller('destino')
export class DestinoController {
  constructor(private readonly destinoService: DestinoService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('imagem', 2),
    FileFieldsInterceptor(
      [
        { name: 'imagem1', maxCount: 1 },
        { name: 'imagem2', maxCount: 1 },
      ],
      multerConfig,
    ),
  )
  async create(
    @UploadedFiles()
    files: { imagem1: Express.Multer.File[]; imagem2: Express.Multer.File[] },
    @Body() createDestinoDto: CreateDestinoDto,
  ) {
    const imagem1Path = files.imagem1[0].path;
    const imagem2Path = files.imagem2[0].path;

    createDestinoDto.url1 = imagem1Path;
    createDestinoDto.url2 = imagem2Path;

    const destinoCriado = await this.destinoService.create(createDestinoDto);
    return {
      destino: new ListDestinoDto(destinoCriado.id, destinoCriado.nome),
      messagem: 'destino cadastrado com sucesso',
    };
  }

  @Get(':nome')
  async findAll(@Param('nome') nome: string) {
    return await this.destinoService.findAll(nome);
  }

  @Get('detalhes/:id')
  findOne(@Param('id') id: string) {
    return this.destinoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDestinoDto: UpdateDestinoDto) {
    return this.destinoService.update(+id, updateDestinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinoService.remove(+id);
  }
}
