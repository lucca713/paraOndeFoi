export abstract class hashProvider{
    abstract comparar(valor_recebido:string, hashNoBanco:string):Promise<boolean>

    abstract criarUmHash(senha:string):Promise<string>
}