- Assíncrono - "que não ocorre ou não se efetiva ao mesmo tempo"
- Javascript roda de forma síncrona

## Promises(Pending, Fulfilled, Rejected)
```javascript
const myPromise = new Promise((resilve, reject) => {
    window.setTimeout(() =>{
        resolve(console.log('Resolvida!'));
    }, 2000);
})
```

## Async/await
- await: resultado da promise;

# API
Application Programming Interface
- JSON (JavaScript Object Notation)

## fetch
`fetch(url, options)`
- retorna uma promise (precisa utilizar o `await`);

# Demo - Atividade prática
<img src="https://github.com/BrunoSobralDEV/Bootcamp-Inter/blob/main/javascript/async/cat-api.gif" alt="demo atividade prática">
