/*

nessa camada fica abstrato de metodos que sao expecificamente para o ususario:
 o crud por exemplo , metodos como login, resear senha, adicionar algo ficam no aplication

*/

import { Usuarios } from "../entities/usuarios.entity";

export abstract class UsuariosRepository{
    
    abstract create(user: Usuarios):Promise<Usuarios>;
    abstract findByemail(email:string):Promise<Usuarios>;
    abstract findOneByUUID(uuid:string):Promise<Usuarios>;
    abstract findAll():Promise<Usuarios[]>
    abstract delete(uuid:string):Promise<void>;    

}