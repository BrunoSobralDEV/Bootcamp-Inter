# Anotações da aula
- Assíncrono - "que não ocorre ou não se efetiva ao mesmo tempo"
- Javascript roda de forma síncrona

## Promises
- Objeto JavaScript que possui 3 estados: `Pending/Pendente, Fulfilled/Resolvido, Rejected/Rejeitado`;
```javascript
const myPromise = new Promise((resilve, reject) => {
    window.setTimeout(() =>{
        resolve(console.log('Resolvida!'));
    }, 2000);
})
```

## Async/await
- await: Necessário para obter o resultado da promise;

## API
- Application Programming Interface, possibilita comunicação entre plataformas;
- JSON (JavaScript Object Notation), formato de troca de informações, muito utilizado na comunicação de front-ends com APIs

## Fetch
`fetch(url, options)`
- retorna uma promise (precisa utilizar o `await`);

# Demo - Atividade prática
<img src="https://github.com/BrunoSobralDEV/Bootcamp-Inter/blob/main/javascript/async/cat-api.gif" alt="demo atividade prática">
