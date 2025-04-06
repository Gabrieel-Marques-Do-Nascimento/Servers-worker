
# Service Worker

## O que é um Service Worker?

Um Service Worker é um script que roda em background, separado da página web, e provê funcionalidades que não precisam de interação com a página ou com o usuário.

## Principais características

- Funciona offline
- Intercepta requisições de rede
- Gerencia cache de recursos
- Permite push notifications
- Roda em thread separada

## Como implementar

```javascript
// Registrando o Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('Service Worker registrado com sucesso');
    })
    .catch(function(error) {
      console.log('Falha ao registrar o Service Worker:', error);
    });
}
```

## Ciclo de vida

1. Registration
2. Installation
3. Activation
4. Idle
5. Fetch/Message

## Casos de uso comuns

- Aplicações offline-first
- Caching estratégico
- Push notifications
- Background sync
- Interceptação de requisições

## Suporte dos navegadores

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Limitações

- Requer HTTPS
- Não funciona em navegadores mais antigos
- Precisa ser atualizado manualmente

## OBS
- Em caso de testes, funciona somente utilizando 'localhost'