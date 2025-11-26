import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

async function debugToken() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.USERNAME || 'devitor0'; // Fallback para seu user

  if (!token) {
    console.error('❌ ERRO: GITHUB_TOKEN não encontrado no .env');
    return;
  }

  console.log(`🔍 Iniciando diagnóstico para usuário: ${username}`);
  console.log(`🔑 Token detectado: ${token.substring(0, 4)}...${token.substring(token.length - 4)}`);

  const headers = { 
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json'
  };

  try {
    // 1. Verificar Limites e Escopos
    console.log('\n1️⃣  Verificando Rate Limit e Escopos...');
    const rateLimit = await axios.get('https://api.github.com/rate_limit', { headers });
    console.log(`   ✅ Rate Limit: ${rateLimit.data.rate.remaining}/${rateLimit.data.rate.limit}`);
    console.log(`   ✅ Escopos do Token: ${rateLimit.headers['x-oauth-scopes'] || 'Nenhum (Token limitado)'}`);

    // 2. Verificar Identidade do Token
    console.log('\n2️⃣  Verificando Identidade...');
    const user = await axios.get('https://api.github.com/user', { headers });
    console.log(`   ✅ Logado como: ${user.data.login}`);
    console.log(`   ✅ Total Repos (Privados + Públicos): ${user.data.total_private_repos + user.data.public_repos}`);
    console.log(`   ✅ Repos Privados que o token vê: ${user.data.total_private_repos}`);

    // 3. Listar Repositórios Acessíveis
    console.log('\n3️⃣  Listando Repositórios Acessíveis (Primeira página)...');
    const repos = await axios.get('https://api.github.com/user/repos?per_page=100&type=all', { headers });
    console.log(`   ✅ Repositórios retornados na lista: ${repos.data.length}`);
    
    const privados = repos.data.filter((r: any) => r.private).length;
    console.log(`   ✅ Desses, quantos são privados? ${privados}`);

    if (privados === 0 && user.data.total_private_repos > 0) {
      console.warn('   ⚠️  ALERTA: O token sabe que existem repos privados, mas a lista retornou 0. Verifique se o token tem acesso aos repositórios da organização (se houver).');
    }

  } catch (error: any) {
    console.error('\n❌ FALHA NO DIAGNÓSTICO:');
    if (error.response) {
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Mensagem: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error(`   Erro: ${error.message}`);
    }
  }
}

debugToken();
