# ☁️ Tempo Agora

Aplicativo mobile feito com **React Native + Expo** que simula dados climáticos para cidades brasileiras.

## 📱 Sobre o App

O **Tempo Agora** apresenta informações de clima de forma visual e intuitiva por meio de cards com:

- Temperatura atual 🌡️  
- Condição geral do tempo ☀️☁️🌧️  
- Umidade relativa 💧  
- Velocidade do vento 💨  
- Botão com link para o site do ClimaTempo

A interface é responsiva, moderna e construída com foco em boa usabilidade visual — incluindo **cards com sombra**.

Todos os dados são **simulados localmente**, sem uso de APIs externas.

---

## ▶️ Demonstração Online

Você pode visualizar e testar diretamente no seu navegador ou celular via Expo Snack:

🔗 [Abrir no Expo Snack](https://snack.expo.dev/@fp_bueno/p3dm?platform=ios)

---

## 🚀 Como Executar Localmente

> Requisitos:
> - Node.js instalado
> - Expo CLI (`npm install -g expo-cli`)

### Passos:

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o projeto
npm start
```

Depois, use o QR Code para abrir o app no **Expo Go** no seu celular (disponível na Play Store/App Store).

---

## 📁 Estrutura do Projeto

```
tempo-agora/
├── App.js
├── components/
│   └── WeatherCard.js
├── screens/
│   └── HomeScreen.js
```

---

## 🧰 Tecnologias Utilizadas

- React Native
- Expo
- React Hooks (`useState`, `useEffect`)
- Linking API (`Linking.openURL`)
- Estilização via `StyleSheet`

---

## ✍️ Autor

**Fillipe Pereira Bueno de Almeida**
