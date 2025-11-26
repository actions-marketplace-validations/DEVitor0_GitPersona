"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const commander_1 = require("commander");
const persona_analyzer_1 = require("./analyzer/persona.analyzer");
const card_generator_1 = require("./generator/card.generator");
const programa = new commander_1.Command();
programa
    .name('gitpersona')
    .description('analisa desenvolvedores do github e gera personas visuais')
    .version('1.0.0');
programa
    .command('analyze')
    .description('analisa um usuario do github e gera sua persona')
    .argument('<nomeUsuario>', 'nome de usuario do github')
    .option('-o, --output <caminho>', 'diretorio de saida para o svg', 'output')
    .action(async (nomeUsuario, opcoes) => {
    try {
        console.log(`analisando ${nomeUsuario}`);
        const analisador = new persona_analyzer_1.AnalisadorPersona();
        const resultado = await analisador.analisar(nomeUsuario);
        console.log(`\npersona identificada: ${resultado.persona.titulo}`);
        console.log(`confianca: ${resultado.pontuacao.toFixed(1)}%`);
        console.log(`\nperfil: ${resultado.persona.perfil}`);
        console.log(`\ncriterios atendidos:`);
        resultado.criteriosAtendidos.forEach(criterio => console.log(`   - ${criterio}`));
        console.log(`\nestatisticas:`);
        console.log(`   - repositorios: ${resultado.estatisticas.totalRepositorios}`);
        console.log(`   - linguagem principal: ${resultado.estatisticas.linguagemPrincipal}`);
        console.log(`   - stars totais: ${resultado.estatisticas.totalStars}`);
        console.log(`   - commits totais: ${resultado.estatisticas.totalCommits}`);
        console.log(`   - commits recentes: ${resultado.estatisticas.frequenciaCommits}`);
        console.log(`\ngerando card svg`);
        const geradorCard = new card_generator_1.GeradorCard();
        const svg = geradorCard.gerarSVG(resultado);
        const caminhoSaida = geradorCard.salvarSVG(svg, nomeUsuario);
        console.log(`card salvo em ${caminhoSaida}`);
        console.log(`\nuse no seu readme:`);
        console.log(`   ![GitPersona](${caminhoSaida})`);
    }
    catch (erro) {
        console.error(`erro: ${erro.message}`);
        process.exit(1);
    }
});
programa
    .command('server')
    .description('inicia o servidor web para geracao dinamica de cards')
    .option('-p, --port <porta>', 'porta do servidor', '3000')
    .action((opcoes) => {
    process.env.PORT = opcoes.port;
    require('./server');
});
programa.parse();
//# sourceMappingURL=index.js.map