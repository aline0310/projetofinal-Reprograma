<p align="center">
  <a>
    <a href="https://on12-api-final-meu-pet-pe.herokuapp.com/"><img src="https://img.shields.io/badge/deploy-heroku.com-blue">
    <a href="https://www.mongodb.com/cloud/atlas"><img src="https://img.shields.io/badge/database-mongodb.com-blue">
    <a href="https://nodejs.org/pt-br/"><img src="https://img.shields.io/badge/node-v12.18.3-blue">
  </a>
</p>

![ROSEIRAS-SHOPPING](https://github.com/aline0310/projetofinal-Reprograma/blob/master/img/In%20no%20time-pana.png)

> API Rest para app de vendas de produtos e serviços para o condomínio Jardins da Roseira

## **Sumário**

- [Apresentação](#apresentação)
- [Funcionalidades](#funcionalidades)
- [Dependências, tecnologias e bibliotecas](#dependências-tecnologias-e-bibliotecas)
- [Instruções para instalação](#instruções-para-instalação)
- [Rotas](#rotas)

## **Apresentação**

A proposta foi desenvolver uma API para melhorar a performace de vendas atual do condomínio Jardins da Roseira. Atualmente com 800 apartamentos, durante a pandemia houve aumento do comércio interno dentro do próprio residencial.

E essa foi a forma de sustento de algumas famílias devido ao desemprego e redução de salários para que continuem em dia com as contas pessoais e com o próprio condomínio, que não cobra taxa extra para os vendedores.

 Com o aumento exponencial de comerciantes a única ferramenta atual disponível é o whatsapp, através de uma pesquisa rápida através do Google Forms foi possível identificar alguns pontos de melhoria que validaram o projeto como: organização e automatização, informações do produto, vendedor e formas de negociação e segurança. Este último ponto ficou como uma melhoria de implementação.



## **Funcionalidades**

- [x] Cadastro de Animais, de Tutores e Abrigos na aplicação
- [X] Lista de todos os Animais, Tutores e Abrigos cadastrados
- [X] Busca de Animais que estão acolhidos, por abirgo
- [X] Busca de Animais, Abrigos e tutores por ID
- [X] Busca de Animais e Abrigos por bairro
- [X] Atualização de cadastro de Animais, Abrigos e Tutores
- [X] Remoção dos cadastros dos Animais, Abrigos e Tutores

## **Dependências, tecnologias e bibliotecas**

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img src="https://img.shields.io/badge/Git/GitHub-blue">
    <a href="https://nodejs.org/pt-br/"><img src="https://img.shields.io/badge/NodeJS-blue">
    <a href="https://www.mongodb.com/cloud/atlas"><img src="https://img.shields.io/badge/MongoDB%20Atlas-blue">
    <a href="https://herokuapp.com/"><img src="https://img.shields.io/badge/Heroku-blue">
    <br/>
    <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-6.14.6-lightblue">
    <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.17.1-lightblue">
    <a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/mongoose-5.10.17-lightblue">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img src="https://img.shields.io/badge/dotenv-8.2.0-lightblue">
    <a href="https://www.npmjs.com/package/nodemon"><img src="https://img.shields.io/badge/nodemon-2.0.6-lightblue">
  </a> 
</p>

## **Instruções para instalação**

- Instale as dependências necessárias para a execução da API através do `npm install`

- Para executar a API, utilize o comando `npm start`


## **Rotas e descrições**

Esta API é escutada na `porta 3000` e para todas as rotas serem acessadas localmente é necessário usar `http://localhost:3000/` antes dos endpoints de requisição.

### _Clientes_

| Descrição                                                    | Método | Rota                     |
| ------------------------------------------------------------ | ------ | ------------------------ |
| Cadastro de novos clientes                                   | POST   | `/costumers/newcostumer` |
| Lista todos os clientes cadastrados                          | GET    | `/costumers/all`         |
| Lista cliente cadastrado pelo ID                             | GET    | `/costumers/:id`         |
| Atualiza a informação desejada no cadastro do cliente por id selecionado | PATCH  | `/costumers/:id`         |
| Apaga o cadastro do cliente por id                           | DELETE | `/costumers/:id`         |


### _Produtos_

| Descrição                                                    | Método | Rota                   |
| ------------------------------------------------------------ | ------ | ---------------------- |
| Cadastro de novos produtos                                   | POST   | `/products/newproduct` |
| Lista todos os produtos cadastrados                          | GET    | `/products/all`        |
| Lista produto cadastrado pelo ID selecionado                 | GET    | `/products/:id`        |
| Atualiza a informação desejada no cadastro do produto por id selecionado | PATCH  | `/products/:id`        |
| Apaga o cadastro de produto selecionado por Id               | DELETE | `/products/:id`        |

### _Vendedores_

| Descrição                                                    | Método | Rota                 |
| ------------------------------------------------------------ | ------ | -------------------- |
| Cadastro de novos vendedores                                 | POST   | `/sellers/newseller` |
| Lista todos os vendedores cadastrados                        | GET    | `/sellers/all`       |
| Lista vendedor cadastrado pelo ID selecionado                | GET    | `/sellers/:id`       |
| Atualiza a informação desejada no cadastro do vendedor por id selecionado | PATCH  | `/sellers/:id`       |
| Apaga o cadastro de produto selecionado por Id               | DELETE | `/sellers/:id`       |

### _Pedidos_

| Descrição                                         | Método | Rota                    |
| ------------------------------------------------- | ------ | ----------------------- |
| Cadastro de um novo pedido                        | POST   | `/purchase/newpurchase` |
| Lista todos os pedidos cadastrados                | GET    | `/purchase/all`         |
| Lista pedido selecionado pelo ID                  | GET    | `/purchase/:id`         |
| Atualiza algum item do pedido pelo ID selecionado | PATCH  | `/purchase/:id`         |
| Deleta um pedido pelo ID selecionado              | DELETE | `/purchase/:id`         |

[![Linkedin Badge](https://img.shields.io/badge/-Aline%20Rodrigues-lightblue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/alinerodriguess/)

