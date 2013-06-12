/*
 * A aplicação por abas, que consiste em várias pilhas de janelas associados em tabs em um tab group.
 * Um ponto de partida para a aplicação baseada em guia com várias janelas de nível superior.
 * Requer Titanium Mobile SDK 1.8.0+.
 * 
 * Em app.js, geralmente cuidamos de algumas coisas:
 * - Bootstrap da aplicação com todos os dados que precisamos
 * - Verifique se há dependências, como tipo de dispositivo, versão de plataforma ou de conexão de rede
 * - Require e open dos top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 2.0 ) {
    alert('Sorry - this application template requires Titanium Mobile SDK 2.0 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {

    var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
    var theTabGroup = ApplicationTabGroup();
    
    theTabGroup.open();
})();
