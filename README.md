# FlowBiz ERP

O **FlowBiz ERP Frontend** é a interface de usuário do sistema de gestão integrada para Micro e Pequenas Empresas (MPEs). Desenvolvido com **Angular 18**, **PrimeNG** e **PrimeFlex**, ele oferece uma experiência moderna, responsiva e altamente personalizável para os usuários.

---

## Funcionalidades Principais

- **Gestão de Produtos:** Cadastro, edição e exclusão de produtos.
- **Gestão de Clientes:** Cadastro e histórico de compras.
- **Gestão de Estoque:** Controle de entradas, saídas e alertas de estoque.
- **Gestão Financeira:** Visualização de contas a pagar/receber e relatórios.
- **Integração com API:** Comunicação com o backend para sincronização de dados.
- **Interface Responsiva:** Design adaptável para diferentes dispositivos (desktop, tablet, mobile).

---

## Tecnologias Utilizadas

### Frontend
- **Framework:** [Angular 18](https://angular.io/)
- **UI Components:** [PrimeNG](https://www.primefaces.org/primeng/)
- **CSS Utility:** [PrimeFlex](https://www.primefaces.org/primeflex/)
- **Gerenciamento de Estado:** [RxJS](https://rxjs.dev/) / [NgRx](https://ngrx.io/) (opcional)
- **Testes:** [Jasmine](https://jasmine.github.io/) + [Karma](https://karma-runner.github.io/)

### Ferramentas
- **Versionamento:** [Git](https://git-scm.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) ou [CircleCI](https://circleci.com/)
- **Gerenciamento de Projeto:** [Github](https://github.com)

---

## Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Angular CLI](https://angular.io/cli) (versão 18 ou superior)
- [Git](https://git-scm.com/)

### Passos para Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/flowbiz-frontend.git
cd flowbiz-frontend
```

1. Instale as dependências:

    npm install

1. Configure o ambiente:

- Crie um arquivo .env na raiz do projeto (veja o exemplo em .env.example).

- Configure as variáveis de ambiente, como a URL da API.

1. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

1. Acesse a aplicação:

- Abra o navegador e acesse http://localhost:4200.

## Estrutura do Projeto

```bash
flowbiz-frontend/
├── src/                   # Código fonte da aplicação
│   ├── app/               # Módulos e componentes da aplicação
│   │   ├── core/          # Serviços globais e interceptors
│   │   ├── shared/        # Componentes e diretivas compartilhados
│   │   ├── features/      # Funcionalidades do ERP (ex: produtos, clientes)
│   │   └── app.component.ts # Componente raiz da aplicação
│   ├── assets/            # Arquivos estáticos (imagens, fonts, etc.)
│   ├── environments/      # Configurações de ambiente (dev, prod)
│   └── styles.scss        # Estilos globais
├── angular.json           # Configurações do Angular CLI
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configurações do TypeScript
└── README.md              # Este arquivo
```

## Desenvolvimento

### Comandos Úteis

**Executar o servidor de desenvolvimento:**

```bash
ng serve
```

**Executar testes unitários:**

```bash
ng test
```

**Gerar build de produção:**

```bash
ng build --configuration production
```

**Lint (análise estática do código):**

```bash
ng lint
```

## Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.

1. Crie uma branch para sua feature (git checkout -b feature/nova-feature).

1. Commit suas mudanças (git commit -m 'Adiciona nova feature').

1. Push para a branch (git push origin feature/nova-feature).

1. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

Equipe FlowBiz

Email: contato@flowbiz.com

Site: https://flowbiz.com