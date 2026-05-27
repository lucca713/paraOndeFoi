import { error } from "console";
import { emit } from "process";

export class Usuarios{
    private readonly id: number;
    private readonly uuid:string
    private nome:string;
    private email:string;
    private renda_total:number
    private readonly criado_em: Date

    constructor(id:number, uuid:string,nome:string, email:string, renda_total:number, criado_em?:Date){
        this.validaNome(nome)
        this.validaEmail(email)
        this.validaRenda(renda_total)

        this.id = id
        this.uuid = uuid
        this.nome = nome
        this.email = email
        this.renda_total = renda_total
        this. criado_em = criado_em || new Date()

    }


    private validaNome(name:string){
        if(!name || name.trim().length < 2){
            throw new Error ('Nome invalido, por favor verifique se voce digitou o nome corretamente')
        }
    }

    private validaEmail(email:string){
        const estruturaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        if(!email || !estruturaEmail.test(email)){
            throw new Error('Email esta incorreto, tente novamente')
        }
    }

    private validaRenda(renda:number){
        if(!renda){
            throw new Error('Por favor adicione um valor para a renda')
        }
    }


    public getId():number{ return this.id}
    public get
    


}