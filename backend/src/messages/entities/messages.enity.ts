import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

//   @Column() //Relation to user, many-to-one relation
//   createdBy: string; 


//   @Column() //lista de usuarios dentro del chat M:M
//   members: string;

  @Column()
  createdAt:Date

  @Column()
  title:string

  @Column()
  secret:string //llave secreta que se debe ibtroducir para que un usario se pueda 
  //unir a la sala

  


}