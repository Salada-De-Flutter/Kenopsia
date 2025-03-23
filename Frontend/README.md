# Kenopsia - WebView App

Uma recriação e homenagem ao Omlet Arcade, otimizada para WebView Android.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

## 📱 Otimizações para WebView

- Viewport configurado para dispositivos móveis modernos
- Suporte a safe-area para notch e bordas arredondadas
- Gestos otimizados para touch
- Prevenção de zoom indesejado
- Animações suaves e otimizadas
- Feedback tátil responsivo

## 📂 Estrutura do Projeto

```
src/
├── pages/          # Páginas da aplicação
│   ├── Login.tsx   # Página inicial de login
│   ├── Register.tsx # Página de registro
│   └── Home.tsx    # Página principal
├── styles/         # Estilos globais
│   ├── global.css  # Configurações CSS globais
│   └── animations.css # Animações personalizadas
└── utils/          # Utilitários
    └── registerUser.ts # Lógica de registro
```

## 🔐 Páginas

### Login (`/login`)
- Tela inicial com opções de login e registro
- Animações suaves de entrada
- Design responsivo e adaptativo

### Registro (`/register`)
- Formulário de cadastro com upload de foto
- Validação de campos
- Feedback visual para interações
- Termos de uso e política de privacidade

### Home (`/home`)
- Menu lateral deslizante com gestos
- Barra de navegação inferior
- Barra de pesquisa superior
- Notificações e toasts
- Área de conteúdo principal

## 🛠 Configurações WebView Recomendadas

```kotlin
webView.settings.apply {
    javaScriptEnabled = true
    domStorageEnabled = true
    useWideViewPort = true
    loadWithOverviewMode = true
    setGeolocationEnabled(false)
    mediaPlaybackRequiresUserGesture = false
}

webView.setLayerType(View.LAYER_TYPE_HARDWARE, null)
```

## 🔧 Instalação e Uso

1. Clone o repositório
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm run dev
```

4. Build para produção
```bash
npm run build
```

## 📱 Características Responsivas

- Layout adaptativo para diferentes tamanhos de tela
- Suporte a gestos de deslize
- Feedback visual para interações
- Animações otimizadas para performance
- Prevenção de comportamentos indesejados (zoom, seleção de texto)

## ⚡ Performance

- Lazy loading de componentes
- Otimização de imagens
- Animações via GPU
- Gestão eficiente de estado
- Prevenção de re-renders desnecessários

## 🔒 Segurança

- Validação de inputs
- Sanitização de dados
- Proteção contra ataques XSS
- Gestão segura de tokens

## 🎨 Temas e Cores

- Esquema de cores escuro para melhor visibilidade
- Cores primárias:
  - Background: #1C1E26
  - Accent: #FF6347
  - Text: #FFFFFF
  - Secondary: #FF8367

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-router-dom": "^6.22.3"
  }
}
```

## 🔍 Próximos Passos

- [ ] Implementar autenticação completa
- [ ] Adicionar testes automatizados
- [ ] Implementar cache offline
- [ ] Adicionar suporte a notificações push
- [ ] Implementar modo offline