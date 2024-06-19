export type Chat ={
    id: number;
    createdBy: User; 
    members: User[];
  
    createdAt:Date
  
    title:string
  
    secret:string 
}

export type User={
    Pk_User:number;

    Email:string
}

export type Message={
    id: number;
  
    sentBy: Users; 
  
    roomId:Chat
  
     
    content:string;
  
    createdAt:Date
  
  
    
}