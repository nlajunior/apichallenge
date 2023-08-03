import {
  IsCurrency,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateDestinoDto {
  id: string;

  @IsNotEmpty({ message: 'Campo preço é obrigatório' })
  @IsCurrency()
  preco: number;

  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  @IsString()
  @MaxLength(150, { message: 'Campo máximo de 150' })
  nome: string;

  @IsNotEmpty({ message: 'Campo meta obrigatório' })
  @MaxLength(160, { message: 'Digite no máximo 160 caracteres' })
  meta: string;

  @IsOptional()
  texto: string;

  @IsOptional()
  @IsString()
  @MaxLength(150, { message: 'Campo máximo de 150' })
  url1: string;

  @IsOptional()
  @IsString()
  @MaxLength(150, { message: 'Campo máximo de 150' })
  url2: string;
}
