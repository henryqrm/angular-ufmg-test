# Angular UFMG Test

[Acesse em produção](http://angular-test.henryqrm.com.br/)  :)

## Introdução

Olá, essa Single Page Application escrita em AngularJS v1.5.* segue os requisitos deste [documento](./../../../assets/teste.pdf), tomei a liberdade de utilizar algumas tecnologias, técnicas e ferramentas que me auxiliam no desenvolvimento da aplicação. Aqui procuro escrever HTML5 de forma semântica seguindo as recomendações da especificação [W3C](https://www.w3.org/). Para escrever CSS3 estou utilizando o preprocessador [SASS](http://sass-lang.com/), no qual sigo o style-guide [RSCSS](http://rscss.io/) que melhora a componentização e deixa o código mais legível e de fácil manutenção. Para escrever o JavaScript sigo o style-guide [ESLint](eslint.org), utilizando o transpiler [Babel](https://babeljs.io), ele permite escrever [ES2016](http://www.ecma-international.org/ecma-262/7.0/), que ao transpilar, gera o código em uma versão mais antiga da [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) , compatível com browsers mais antigos. E devemos estar atentos as [compatibilidades](caniuse.com) de CSS e JS, pois muitos ainda utilizam [IE](http://www.techtudo.com.br/listas/noticia/2016/01/os-navegadores-de-internet-mais-usados-no-brasil-e-no-mundo.html). Neste projeto há outros conceitos, mas não irei entrar em detalhes para não ser longo demais.

Nesta aplicação não utilizei nenhum framework CSS. Por questão de tempo, o layout pode conter falhas, além de não estar responsivo para os mobiles, pensei em Desktop-first.

O AngularJS procuro seguir as últimas especificações da versão 1.5.* que recomendam o uso de componentes para implementar o [web components](https://www.w3.org/wiki/WebComponents/), também especificado pelo W3C. Não utilizei nenhum framework ou lib, ressalvando o módulo de rotas, o [ui-router](https://github.com/angular-ui/ui-router).

Aqui não utilizo nenhum framework de testes, ou testes unitários. Estou a um tempo tentando mudar a minha cultura para [TDD](http://tableless.com.br/tdd-por-que-usar/). Mas não é algo trivial.

A estrutura de arquivos é pensada para ser escalável, através de componentes e modulos, o que mantém o código organizado e acoplado, facilitando a manutenabilidade. Torna cada parte da página um pequeno componente, que segue as tendências popularizadas pelo [React](https://facebook.github.io/react/). Cada componente possui sua UI/UX com os arquivos necessários para seu funcionamento, assumindo assim todas as responsabilidades. Este projeto não está totalmente componentizado, por questão de tempo, mas segue este conceito.

Assim sendo, as principais pastas são:

1.  **/src/app/auth** — contém toda a estrutura de Authentication;
2.  **/src/app/components** — Todos os componentes com suas responsabilidades e UI/UX;
3.  **/src/app/pages** — Todas as páginas da aplicação com suas responsabilidades e UI/UX, caso uma página tenha funcionalidades específicas, é criado subpáginas;
4.  **/src/app/template** — Estrutura da aplicação.


## Requisitos do projeto

É necessário ter o [NodeJS 4+](https://nodejs.org/en/), NPM 3+ (incluso no Node Js) e [git](https://git-scm.com/) instalado. Para verificar, use no terminal de sua preferência os comandos:

`node --version && npm --version && git --version`

## Instruções de instalação (no terminal)

1.  Baixe o código fonte:

    `git clone https://github.com/henryqrm/angular-ufmg-test`

2.  Instalando as dependências do projeto:

    `npm i`

    `npm i -g gulp-cli`

    Talvez você precise do comando `sudo` em sistemas baseado em unix

3.  Executando o projeto:

    `gulp serve`

4.  Por fim, acesse via navegador na url indicada no terminal

## AngularJS para mim,

### Vantagens:

1.  Um framework para tudo (Não preciso ficar instalando n módulos ou lib);
2.  Fácil modularização, componentização e manutenção;
3.  Aplicação robusta e rápida;
4.  Delega para o cliente executar parte do processamento (Isso vem do conceito de SPA);
5.  Comunidade ativa, e utilizado em grandes empresas;
6.  JavaScript ♥

### Desvantagens:

1.  Não é otimizado para Searching Engine Optimizations (SEO);
2.  Performance (Two-way-data-bind exagerado);
3.  Assim como todo framework ou lib JS, cliente faz download de muito JS, piorando o carregamento.

### Conclusão

Este projeto é simples e visa demonstrar um CRUD em AngularJS consumindo dados do serviço REST. Utilizo aqui muitas ferramentas, técnicas e conceitos que auxiliam na produtividade, legibilidade do projeto e principalmente construção de aplicação robusta, escalável e de fácil manutenção. AngularJS, um dos primeiros frameworks que contribuíram para a evolução das SPAs, resolve muitos problemas, claro que há pontos positivos e outros negativos, mas é fantástico devido a facilidade de criar aplicações.

Dúvidas, no email [henryqrm@gmail.com](mailto:henryqrm@gmail.com) (Henrique Rodrigues)