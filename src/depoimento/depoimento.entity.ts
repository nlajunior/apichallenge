import { UsuarioEntity } from '../usuario/usuario.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'depoimentos' })
export class DepoimentoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'texto', nullable: false, length: 250 })
  texto: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.depoimentos)
  usuario: UsuarioEntity;
}
