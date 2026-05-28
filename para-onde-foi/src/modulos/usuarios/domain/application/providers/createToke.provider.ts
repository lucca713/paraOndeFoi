import { Usuarios } from '../../entities/usuarios.entity';

export abstract class GerarTokenProvider {
  abstract gerarToken(usuario: Usuarios): Promise<string>;
}
