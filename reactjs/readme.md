# ReactJS
- Ciclo de vida de um componente: Inicialização; Montagem; Atualização; Desmontagem
## Webpack
- É um module bundler (empacotador de módulos para aplicações JS);
- Gerar bundler que será utilizado no HTML, em ES5;

### Configuração
- **Entry**: Ponto de entrada;
- **Output**: Onde irá exportar o arquivo final;
- **Loarders**: Gerir arquivos não JS;
- **Plugins**: Otimizar pacotes;
- **Mode**: production, development ou none;
`webpack.config.js`
`npm i -D webpack webpack-cli`
` "buidl": "webpack --mode production" `
`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev`

`npm i react react-dom`

`npm i webpack-dev-server`

## EsLint
`npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch`

## Renderização Condicional
- "Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação."

- `if inline` = `&&`
- `if else`   = Operador ternário `? :`
- Evitando que um componente seja renderizado

## Listas e Chaves
## Manipulando Eventos