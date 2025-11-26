import { ResultadoPersona } from '../types';
export declare class AnalisadorPersona {
    private servicoGitHub;
    constructor();
    analisar(nomeUsuario: string): Promise<ResultadoPersona>;
    private calcularEstatisticas;
    private agruparPorStack;
    private determinarPersona;
    private calcularConfianca;
}
//# sourceMappingURL=persona.analyzer.d.ts.map