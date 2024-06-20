import { Users } from 'src/users/enities/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinTable } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>Users,(user)=>user.Pk_User,{cascade:true,eager:true}) //Relation to user, many-to-one relation
  createdBy: Users; 


  @ManyToMany(()=>Users,{cascade:true,eager:true}) //lista de usuarios dentro del chat M:M
  @JoinTable()
   members: Users[];

  @Column()
  createdAt:Date

  @Column()
  title:string

  @Column()
  secret:string //llave secreta que se debe ibtroducir para que un usario se pueda 
  //unir a la sala
  
  



  


}