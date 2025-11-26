"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERSONAS = void 0;
const types_1 = require("../types");
exports.PERSONAS = {
    [types_1.TipoPersona.EXPLORADOR]: {
        tipo: types_1.TipoPersona.EXPLORADOR,
        titulo: 'O Explorador',
        perfil: 'Curioso, versátil e adaptável',
        caminhoImagem: 'assets/personas/explorador.png'
    },
    [types_1.TipoPersona.PROGRAMADOR_VIGOROSO]: {
        tipo: types_1.TipoPersona.PROGRAMADOR_VIGOROSO,
        titulo: 'O Programador Rigoroso',
        perfil: 'Disciplinado, consistente e resiliente',
        caminhoImagem: 'assets/personas/codificador.png'
    },
    [types_1.TipoPersona.BUG_HUNTER]: {
        tipo: types_1.TipoPersona.BUG_HUNTER,
        titulo: 'O Caçador de Bugs',
        perfil: 'Analítico, atento e meticuloso',
        caminhoImagem: 'assets/personas/cacador.png'
    },
    [types_1.TipoPersona.DEVOPS]: {
        tipo: types_1.TipoPersona.DEVOPS,
        titulo: 'O Automatizador',
        perfil: 'Organizado, engenhoso e eficaz',
        caminhoImagem: 'assets/personas/devops.png'
    },
    [types_1.TipoPersona.ESTUDANTE]: {
        tipo: types_1.TipoPersona.ESTUDANTE,
        titulo: 'O Estudante',
        perfil: 'Mente curiosa buscando seu rumo',
        caminhoImagem: 'assets/personas/estudante.png'
    }
};
//# sourceMappingURL=personas.js.map