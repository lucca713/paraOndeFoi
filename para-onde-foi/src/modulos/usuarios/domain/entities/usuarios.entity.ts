import { error } from "console";
import { randomUUID } from "crypto";
import { promises } from "dns";
import { emit } from "process";

export class Usuarios{
    
    private readonly uuid: string
    private nome:string;
    private email:string;
    private renda_total:number;
    private senha: string;
    private readonly criado_em: Date;

    constructor(nome:string, email:string, renda_total:number,senha:string ,criado_em?:Date, uuid?:string){
        this.validaNome(nome)
        this.validaEmail(email)
        this.validaRenda(renda_total)
        this.validaSenha(senha)
    
        this.uuid = uuid || randomUUID()
        this.nome = nome
        this.email = email
        this.senha = senha
        this.renda_total = renda_total
        this. criado_em = criado_em || new Date()

    }


    private validaNome(name:string){
        if(!name || name.trim().length < 2){
            throw new Error ('Nome invalido, por favor verifique se voce digitou o nome corretamente')
        }
    };

    private validaEmail(email:string){
        const estruturaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        if(!email || !estruturaEmail.test(email)){
            throw new Error('Email esta incorreto, tente novamente')
        }
    };

    private validaRenda(renda:number){
        if(!renda){
            throw new Error('Por favor adicione um valor para a renda')
        }
    };

    private validaSenha(senha:string){
        if(!senha || senha.trim().length < 8){
            throw new Error('Senha Incorreta');
        }
    };

    public getUUID():string{  return this.uuid}
    public getNome():string {return this.nome}
    public getEmail():string {return this.email}
    public getRenda():number {return this.renda_total}
    public getDataCriacao():Date {return this.criado_em}
    


}