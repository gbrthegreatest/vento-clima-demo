/* CONFIGURAÇÕES PARA PERSONALIZAR A LANDING PAGE
 * Não inclua sinais ou espaços no telefone: DDI + DDD + número.
 * Exemplo de formato brasileiro: 55 + DDD + número.
 * Deixe vazio durante a demonstração para evitar enviar mensagens a terceiros.
 */
const CONFIG = {
  whatsappNumber: '5541984454299',
  whatsappMessage: 'Olá! Gostaria de saber mais sobre instalação, limpeza ou manutenção de ar-condicionado.',
  googleBusinessUrl: '' // URL real do perfil da empresa no Google, se houver.
};

const setupDialog = document.getElementById('setup-dialog');
function showSetup() {
  if (setupDialog && typeof setupDialog.showModal === 'function') setupDialog.showModal();
  else window.alert('Página demonstrativa. Configure os links no arquivo script.js.');
}

for (const anchor of document.querySelectorAll('.whatsapp-link')) {
  if (/^\d{12,13}$/.test(CONFIG.whatsappNumber)) {
    anchor.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
  } else {
    anchor.addEventListener('click', event => {event.preventDefault(); showSetup();});
  }
}

const googleLink = document.getElementById('google-link');
if (googleLink) {
  if (/^https:\/\//i.test(CONFIG.googleBusinessUrl)) {
    googleLink.href = CONFIG.googleBusinessUrl;
    googleLink.target = '_blank';
    googleLink.rel = 'noopener noreferrer';
  } else {
    googleLink.addEventListener('click', event => {event.preventDefault(); showSetup();});
  }
}
