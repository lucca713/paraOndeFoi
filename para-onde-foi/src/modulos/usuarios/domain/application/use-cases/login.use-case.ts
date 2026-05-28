import { UsuariosRepository } from "../../repositories/usuarios.repository";
import { GerarTokenProvider } from "../providers/createToke.provider";
import { hashProvider } from "../providers/hash.provider";


export class Login{
    constructor(private readonly usuarioRepository: UsuariosRepository, private readonly gerarTokenProvider:GerarTokenProvider, private readonly:hashProvider){}
}