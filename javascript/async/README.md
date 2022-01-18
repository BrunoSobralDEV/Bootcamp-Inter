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