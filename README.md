# 📧 Smart Email Assistant

The **Smart Email Assistant** is an AI-powered tool that helps users generate professional email responses effortlessly. It uses **Spring Boot** with **Gemini AI**, and provides both a **React web interface** and a **Chrome Extension** that integrates directly into Gmail.

---

## ✨ Features

- 🎙️ Accepts original email content and desired tone (e.g., formal, friendly)
- 🤖 Uses **Gemini API** to generate context-aware email replies
- 🧩 Chrome Extension adds an **"AI Reply"** button directly in Gmail
- 🧠 Smart response generation with minimal user input
- 💬 Works in both standalone web app and Gmail environments

---

## 🌐 Live Demo

👉 [Click here to view the live app](https://smart-email-assistant-sb.netlify.app/)

---

## ⚙️ Tech Stack

- **Backend:** Spring Boot + REST API + Gemini AI integration
- **Frontend:** React (UI for inputting email and tone)
- **Browser Extension:** Chrome Extension (DOM injection + API calls)

---

## 🧪 How It Works

### 🔧 Backend (Spring Boot)
- Exposes a REST API endpoint: `POST: api/email/generate`
- Accepts JSON:
  ```json
  {
    "emailContent": "Original email message here...",
    "tone": "Formal"
  }
- Returns:
  ```json
  {
  "reply": "AI-generated email reply..."
  }
## 🚀 Getting Started

### Backend
- Spring Boot:
    ```
    cd email-writer-sb
    ./mvnw spring-boot:run
    ```

### Frontend
- React:
    ```
    cd email-writer-react
    npm install
    npm start
    ```
### Chrome Extension

1. Open chrome://extensions/
2. Enable Developer Mode
3. Click "Load Unpacked"
4. Select the email-writer-ext folder
5. Make sure the backend API URL is configured correctly in both the frontend and Chrome extension.
