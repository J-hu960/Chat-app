import { Users } from 'src/users/enities/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>Users,(user)=>user.Pk_User) //Relation to user, many-to-one relation
  createdBy: Users; 


  @ManyToMany(()=>Users) //lista de usuarios dentro del chat M:M
   members: Users[];

  @Column()
  createdAt:Date

  @Column()
  title:string

  @Column()
  secret:string //llave secreta que se debe ibtroducir para que un usario se pueda 
  //unir a la sala
  
  



  


}