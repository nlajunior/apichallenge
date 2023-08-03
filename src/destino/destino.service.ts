import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DestinoEntity } from './destino.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class DestinoService {
  constructor(
    @InjectRepository(DestinoEntity)
    private readonly destinoRepository: Repository<DestinoEntity>,
  ) {}

  async create(
    // file: Express.Multer.File[],
    createDestinoDto: CreateDestinoDto,
  ) {
    const destinoEntity = new DestinoEntity();

    Object.assign(destinoEntity, createDestinoDto);

    const destinoCadastrado = await this.destinoRepository.save(destinoEntity);
    return destinoCadastrado;
  }

  async findAll(nome: string) {
    const destinos = await this.destinoRepository.findBy({
      nome: ILike(`%${nome}%`),
    });
    if (destinos.length == 0) {
      throw new NotFoundException('Destinos não encontrados.');
    }
    return destinos;
  }

  async findOne(id: string) {
    const destino = await this.destinoRepository.findOneBy({ id });
    if (destino == undefined) {
      throw new NotFoundException('Destino não encontrado.');
    }
    return destino;
  }

  update(id: number, updateDestinoDto: UpdateDestinoDto) {
    return `This action updates a #${id} destino`;
  }

  remove(id: number) {
    return `This action removes a #${id} destino`;
  }
}
