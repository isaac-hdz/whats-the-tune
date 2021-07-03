import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  userpass: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
