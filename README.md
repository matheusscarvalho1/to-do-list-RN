# 📱 Lista de Tarefas - React Native App

Um aplicativo móvel moderno e intuitivo para gerenciamento de tarefas desenvolvido com React Native e Expo. O app permite aos usuários criar, visualizar e marcar tarefas como concluídas de forma simples e eficiente.

## 🚀 Tecnologias Utilizadas

### **Framework Principal**

- **React Native 0.79.4** - Framework para desenvolvimento de aplicações móveis multiplataforma
- **React 19.0.0** - Biblioteca JavaScript para construção de interfaces de usuário

### **Plataforma de Desenvolvimento**

- **Expo SDK ~53.0.12** - Plataforma que simplifica o desenvolvimento React Native
- **Expo Router ~5.1.0** - Sistema de roteamento baseado em arquivos para navegação

### **Linguagem e Tipagem**

- **TypeScript ~5.8.3** - Superset do JavaScript com tipagem estática
- **@types/react ~19.0.10** - Definições de tipos para React

### **Navegação e UI**

- **@react-navigation/native ^7.1.6** - Biblioteca de navegação para React Native
- **@react-navigation/bottom-tabs ^7.3.10** - Componente de navegação por abas
- **@expo/vector-icons ^14.1.0** - Biblioteca de ícones (Ionicons)
- **react-native-gesture-handler ~2.24.0** - Manipulação de gestos
- **react-native-reanimated ~3.17.4** - Animações nativas

### **Componentes e Funcionalidades**

- **expo-haptics ~14.1.4** - Feedback tátil
- **expo-blur ~14.1.5** - Efeitos de blur
- **expo-image ~2.3.0** - Componente de imagem otimizado
- **react-native-safe-area-context 5.4.0** - Gerenciamento de áreas seguras

### **Ferramentas de Desenvolvimento**

- **ESLint ^9.25.0** - Linter para análise estática de código
- **eslint-config-expo ~9.2.0** - Configuração ESLint específica para Expo
- **@babel/core ^7.25.2** - Transpilador JavaScript

## 📁 Estrutura do Projeto

```
to-do-list-RN/
├── app/
│   └── _layout.tsx          # Layout principal da aplicação
├── components/
│   └── Task.tsx             # Componente de tarefa individual
├── constants/
│   └── color.ts             # Paleta de cores do projeto
├── styles/
│   └── stylesheet.ts        # Estilos centralizados
├── assets/
│   └── images/
│       └── check.png        # Ícone do aplicativo
├── package.json             # Dependências e scripts
├── app.json                 # Configuração do Expo
├── tsconfig.json            # Configuração TypeScript
└── eslint.config.js         # Configuração ESLint
```

## 🎯 Funcionalidades

### **Principais Recursos**

- ✅ **Criar Tarefas**: Adicionar novas tarefas através de input de texto
- ✅ **Visualizar Tarefas**: Lista organizada de todas as tarefas
- ✅ **Marcar como Concluída**: Toggle para marcar/desmarcar tarefas
- ✅ **Interface Intuitiva**: Design limpo e responsivo
- ✅ **Feedback Visual**: Ícones e cores que indicam o status das tarefas

### **Características Técnicas**

- **Estado Local**: Gerenciamento de estado com React Hooks (useState)
- **Componentização**: Arquitetura modular com componentes reutilizáveis
- **Tipagem Forte**: TypeScript para maior segurança e produtividade
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela

## 🎨 Design System

### **Paleta de Cores**

```typescript
{
  primary: "#187dfe",     // Azul vibrante (botões e elementos principais)
  secondary: "#e0e0e0",   // Cinza claro (elementos secundários)
  background: "#f4f6f8",  // Fundo principal
  surface: "#ffffff",     // Superfícies e cards
  error: "#d32f2f",       // Mensagens de erro
  text: "#212121"         // Texto principal
}
```

### **Princípios de Design**

- **Simplicidade**: Interface limpa e focada na funcionalidade
- **Consistência**: Padrões visuais uniformes em todo o app
- **Acessibilidade**: Contraste adequado e elementos interativos claros
- **Feedback Visual**: Estados visuais para ações do usuário

## 🛠️ Metodologias de Desenvolvimento

### **Arquitetura**

- **Component-Based Architecture**: Componentes modulares e reutilizáveis
- **Separation of Concerns**: Separação clara entre lógica, estilo e apresentação
- **File-Based Routing**: Roteamento baseado em estrutura de arquivos (Expo Router)

### **Padrões de Código**

- **TypeScript First**: Desenvolvimento com tipagem estática desde o início
- **Functional Components**: Uso de componentes funcionais e hooks
- **Props Interface**: Definição clara de interfaces para props dos componentes
- **Centralized Styling**: Estilos organizados em arquivos dedicados

### **Organização de Código**

- **Constants**: Cores e valores constantes centralizados
- **Components**: Componentes reutilizáveis em pasta dedicada
- **Styles**: Estilos organizados por funcionalidade
- **Assets**: Recursos visuais organizados por tipo

### **Qualidade de Código**

- **ESLint**: Análise estática de código com regras específicas para Expo
- **TypeScript Strict Mode**: Configuração rigorosa para maior segurança
- **Path Aliases**: Importações organizadas com aliases (@/\*)

## 🚀 Como Executar o Projeto

### **Pré-requisitos**

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)

### **Instalação**

```bash
# Clone o repositório
git clone [url-do-repositorio]
cd to-do-list-RN

# Instale as dependências
npm install
```

### **Execução**

```bash
# Inicie o servidor de desenvolvimento
npm start
# ou
npx expo start

# Para Android
npm run android

# Para iOS
npm run ios

# Para Web
npm run web
```

### **Scripts Disponíveis**

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no emulador Android
- `npm run ios` - Executa no simulador iOS
- `npm run web` - Executa na versão web
- `npm run lint` - Executa análise estática de código

## 📱 Compatibilidade

- **iOS**: 13.0+
- **Android**: 5.0+ (API level 21+)
- **Web**: Navegadores modernos

## 🔧 Configurações

### **Expo Configuration (app.json)**

- **Orientation**: Portrait (modo retrato)
- **User Interface**: Automatic (suporte a tema claro/escuro)
- **New Architecture**: Habilitada para melhor performance
- **Edge-to-Edge**: Habilitado para Android

### **TypeScript Configuration**

- **Strict Mode**: Habilitado
- **Path Mapping**: Configurado para imports com @/\*
- **Expo Base Config**: Estendido da configuração base do Expo

## 🎯 Estratégias de Desenvolvimento

### **Desenvolvimento Iterativo**

1. **Prototipagem Rápida**: Uso do Expo para desenvolvimento rápido
2. **Testes Contínuos**: Testes em diferentes plataformas durante o desenvolvimento
3. **Refatoração**: Melhoria contínua do código base

### **Gestão de Estado**

- **Local State**: useState para estado local dos componentes
- **Props Drilling**: Comunicação entre componentes via props
- **Event Handling**: Manipulação de eventos com callbacks

### **Performance**

- **FlatList**: Renderização eficiente de listas grandes
- **Key Extraction**: Chaves únicas para otimização de re-renderização
- **Component Optimization**: Componentes otimizados para evitar re-renders desnecessários

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Desenvolvido por Matheus Carvalho**

Desenvolvido com ❤️ usando React Native e Expo.

**LinkedIn**: [@matheusscarvalho](https://www.linkedin.com/in/matheusscarvalho/)

---
