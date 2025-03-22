# Kenopsia App

Uma recriação e homenagem ao Omlet Arcade, desenvolvida com React e Vite.

## 📁 Estrutura do Projeto

```
src/
├── assets/         # Arquivos estáticos (imagens, fontes, etc)
├── components/     # Componentes reutilizáveis
├── config/        # Configurações do projeto
├── hooks/         # Custom hooks React
├── layouts/       # Layouts reutilizáveis
├── pages/         # Páginas da aplicação
├── services/      # Serviços e integrações
├── styles/        # Estilos globais e utilitários
└── utils/         # Funções utilitárias
```

## 🚀 Comandos Disponíveis

- `npm install`: Instala as dependências do projeto
- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build localmente
- `npm run lint`: Executa o linter no código
- `npm run clean`: Limpa a pasta de build

## 📚 Documentação das Pastas

### assets/
Contém arquivos estáticos como imagens, ícones e fontes utilizados no projeto.

### components/
Componentes React reutilizáveis em toda a aplicação. Cada componente possui seu próprio arquivo de estilo e testes.

### config/
Arquivos de configuração do projeto, incluindo constantes, variáveis de ambiente e configurações de terceiros.

### hooks/
Custom hooks React para lógica reutilizável entre componentes.

### layouts/
Layouts compartilhados entre diferentes páginas, como cabeçalhos, rodapés e estruturas de navegação.

### pages/
Páginas principais da aplicação:
- `Login.jsx`: Página inicial com autenticação
- `Register.jsx`: Cadastro de novos usuários
- `Home.jsx`: Dashboard principal com feed de conteúdo

### services/
Serviços para integração com APIs e lógica de negócios.

### styles/
Estilos globais, temas e utilitários CSS/Tailwind.

### utils/
Funções utilitárias e helpers reutilizáveis.

## 🔧 Tecnologias Utilizadas

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React
- React Icons

## 📦 Deploy

O projeto está configurado para deploy na Vercel. O processo de deploy é automático a partir do repositório Git.

Para fazer deploy manual:

1. Instale a CLI da Vercel: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções do CLI

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request