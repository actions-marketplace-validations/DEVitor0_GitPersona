import { DadosGitHub } from '../types';
export declare class ServicoGitHub {
    private urlBase;
    private headers;
    constructor();
    obterDadosUsuario(nomeUsuario: string): Promise<DadosGitHub>;
    contarIssuesCriadas(nomeUsuario: string): Promise<number>;
    obterTotalCommits(nomeUsuario: string): Promise<number>;
    private extrairCommitsDosEventos;
    temGitHubActions(nomeUsuario: string, nomeRepo: string): Promise<boolean>;
    temDockerfile(nomeUsuario: string, nomeRepo: string): Promise<boolean>;
    temTerraform(nomeUsuario: string, nomeRepo: string): Promise<boolean>;
    temAnsible(nomeUsuario: string, nomeRepo: string): Promise<boolean>;
    temScriptsAutomacao(nomeUsuario: string, nomeRepo: string): Promise<boolean>;
    obterIssuesRepositorio(nomeUsuario: string, nomeRepo: string): Promise<any[]>;
    obterDiasComContribuicoes(nomeUsuario: string): Promise<string[]>;
    obterContribuicoesDetalhadas(nomeUsuario: string): Promise<{
        dias: string[];
        sequenciaAtual: number;
        maiorSequencia: number;
    }>;
    private executarGraphQL;
}
//# sourceMappingURL=github.service.d.ts.map