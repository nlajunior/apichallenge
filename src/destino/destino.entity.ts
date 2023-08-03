import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'destinos' })
export class DestinoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 150, nullable: false })
  nome: string;

  @Column({ name: 'meta', nullable: false, length: 160 })
  meta: string;

  @Column({ name: 'texto', nullable: true })
  texto: string;

  @Column({ name: 'preco', nullable: false })
  preco: number;

  @Column({ name: 'url1', nullable: true, length: 150 })
  url1: string;

  @Column({ name: 'url2', nullable: true, length: 150 })
  url2: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
