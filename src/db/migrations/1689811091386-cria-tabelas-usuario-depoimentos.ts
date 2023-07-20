import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelasUsuarioDepoimentos1689811091386 implements MigrationInterface {
    name = 'CriaTabelasUsuarioDepoimentos1689811091386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, "senha" character varying(255) NOT NULL, "url" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "depoimentos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "texto" character varying(250) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "usuarioId" uuid, CONSTRAINT "PK_08e657419a25376f0c54a5a506a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "depoimentos" ADD CONSTRAINT "FK_2a563d55ac4b80d14be388c16c5" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "depoimentos" DROP CONSTRAINT "FK_2a563d55ac4b80d14be388c16c5"`);
        await queryRunner.query(`DROP TABLE "depoimentos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
