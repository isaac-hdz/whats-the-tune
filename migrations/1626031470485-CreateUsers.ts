import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1626031470485 implements MigrationInterface {
    name = 'CreateUsers1626031470485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "user" (
          "id" character varying NOT NULL,
          "username" character varying NOT NULL,
          "userpass" character varying NOT NULL,
          "firstName" character varying NOT NULL,
          "lastName" character varying NOT NULL,
          "email" character varying NOT NULL,
          CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
