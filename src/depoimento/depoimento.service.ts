import { Injectable } from '@nestjs/common';
import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';

@Injectable()
export class DepoimentoService {
  create(createDepoimentoDto: CreateDepoimentoDto) {
    return 'This action adds a new depoimento';
  }

  findAll() {
    return `This action returns all depoimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depoimento`;
  }

  update(id: number, updateDepoimentoDto: UpdateDepoimentoDto) {
    return `This action updates a #${id} depoimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} depoimento`;
  }
}
