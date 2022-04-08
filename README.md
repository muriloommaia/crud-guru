<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://www.meuguru.net/_next/static/media/logo.1a16ba5a.svg" alt="Logo" width="180" height="180">
  </a>

  <h3 align="center">Teste Prático - Desenvolvedor Full Stack Pleno</h3>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#feito-com">Feito Com</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o Projeto</a>
      <ul>
        <li><a href="#pre-requisitos">Pre-Requisitos</a></li>
        <li><a href="#install-com-docker">Instalação via Docker</a></li>
        <li><a href="#install-com-npm">Instalação via NPM</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

<img src="https://github.com/muriloommaia/crud-guru/blob/main/images/login.gif?raw=true" alt="home.gif" width="800"/>

Para o teste foi pedido o desenvolvimento de uma aplicação em formato de plataforma. Tal aplicação deveria ser capaz de criar (create), ler (read), alterar (update) e deletar (delete) usuários, este é o conhecido CRUD.

Além disso, foi exigido que o projeto fosse realizado em algumas linguagens específica e com alguns frameworks pré estabelecidos, além das tecnologias e bibliotecas sugeridas, tudo isso será visto na parte de "Construído com:", logo abaixo. 

Na seção de [Uso do aplicativo](#uso) será demonstrado como o aplicativo funciona em diferentes telas.

Para a instalação do aplicativo na sua máquina, vá em [Instalação](#iniciando-o-projeto);

<p align="right">(<a href="#top">back to top</a>)</p>



### Construído com:

Para a construção do aplicativo, foi usado:

**Base de dados**

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

**Backend**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
 
**Frontend**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Testes**

![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

**Container**

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Iniciando o Projeto

Neste momento vamos entender como rodar o projeto localmente, para isso necessitamos falar de alguns pré requisitos.

### Pre-Requisitos

Indispensável: `NPM`
Facilitará: `docker`

### Install via docker

_Estando na raiz do projeto, você usará os seguintes comandos_:

```shell
npm run compose:up
```

Este comando executará o `docker-compose` que está na aplicação, após a finalização do docker-compose, o aplicativo estará rodando na porta `8080` do seu computador, podendo ser acessado através de: 
* http://localhost:8080/

Para parar os containers, na pasta raiz do projeto, execute:

```shell
npm run compose:down
```

### Install via npm

> É fundamental que ao usar localmente a aplicação, você tenha o `postgreSQL` instalado e sendo executado

**Crie um arquivo `.env` no diretório `./app/backend/` com o seguinte formato:**
```
DATABASE_URL="postgresql://{YOUR_PG_USER}:{YOUR_PG_PASS}@localhost:5432/{YOUR_PG_DB}?schema=public"

SECRET_JWT=secret
```

_Estando na raiz do projeto, você usará os seguintes comandos_:

```shell
npm run install:app
```

Após isso, rode o comando:

```shell
npm run start:app
```

Após a finalização o aplicativo estará rodando na porta `3000` do seu computador, podendo ser acessado através de: 
* http://localhost:3000/

> O back e o front estarão rodando nas portas `3001` e `3000` respectivamente, então é importante que estas portas estejam liberadas no seu servidor.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

### Tela de Login
<img src="https://github.com/muriloommaia/crud-guru/blob/main/images/login.gif?raw=true" alt="home.gif" width="800"/>

### Tela de Registro
<img src="https://github.com/muriloommaia/crud-guru/blob/main/images/Registro.gif?raw=true" alt="home.gif" width="800"/>

### Tela de Altera Usuário
<img src="https://github.com/muriloommaia/crud-guru/blob/main/images/Altera.gif?raw=true" alt="home.gif" width="800"/>

### Tela de Remove Usuário
<img src="https://github.com/muriloommaia/crud-guru/blob/main/images/remove.gif?raw=true" alt="home.gif" width="800"/>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Murilo Moura Maia - [LinkedIn](https://www.linkedin.com/in/murilommaia)

Project Link: [https://github.com/your_username/repo_name](https://github.com/muriloommaia/crud-guru)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/muriloommaia/crud-guru/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/murilommaia
[product-screenshot]: images/screenshot.png