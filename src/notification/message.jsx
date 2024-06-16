import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const messaging = getMessaging();

getToken(messaging, { vapidKey: 'BOxgFO81_Vvq16GMVJ8B3szyaZw_XwLXewITBVXhXekthKe29P_twtRXKjz6ARmKemgYuw0WG4kapMT64YzRri8' }).then((currentToken) => {
  if (currentToken) {
    console.log('Token recebido: ', currentToken);
    
  } else {
    console.log('O token não é válido, precisa de permissão.');
  }
}).catch((err) => {
  console.log('Erro ao buscar o token. ', err);
});

onMessage(messaging, (payload) => {
  console.log('Mensagem recebida. ', payload);
  
})