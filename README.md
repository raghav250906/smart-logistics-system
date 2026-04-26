# 🚀 Smart Logistics – Route Risk Prediction System

## 📌 Overview

Smart Logistics is an AI-powered web application that predicts **route disruption risk** before a journey begins.
It helps logistics companies take **proactive decisions** by analyzing key factors like traffic and weather conditions.

---

## 🎯 Problem Statement

In logistics, delays are often **reactive** — companies respond *after* disruptions occur.

❌ No early risk prediction
❌ Inefficient routing decisions
❌ Increased cost and delivery delays

---

## 💡 Solution

Our system predicts **potential disruptions in advance** using input parameters such as:

* Source & Destination
* Traffic Conditions
* Weather Conditions

It generates:

* 📊 Risk Score (0–100%)
* ⚠ Risk Level (Low / Medium / High)
* 🛣 Suggested Route
* 📌 Reason for risk

---

## 🧠 How It Works

User → Input Route Details → Backend Processing → Risk Calculation → Result Display

### ⚙️ Flow:

1. User enters route details
2. Frontend sends request to backend
3. Backend calculates risk score
4. Result is displayed with insights

---

## 🖥 Tech Stack

### Frontend:

* React.js
* CSS (Dark UI + Glassmorphism)

### Backend:

* Node.js
* Express.js

### Tools:

* VS Code
* Git & GitHub

---

## 📂 Project Structure

```
route-optimization-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── RouteForm.jsx
│   │   │   ├── ResultCard.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   └── routeController.js
│   │
│   ├── routes/
│   │   └── routeRoutes.js
│   │
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚡ Features

* 🔮 Pre-disruption prediction
* 📊 Dynamic risk scoring system
* 🎨 Modern dark UI dashboard
* ⚡ Fast and responsive interface
* 📌 Clear reasoning for predictions

---

## 🧪 Sample Output

* Risk Level: **High**
* Score: **80%**
* Reason: Heavy traffic + bad weather

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/smart-logistics.git
```

### 2. Install frontend dependencies

```
cd frontend
npm install
npm start
```

### 3. Install backend dependencies

```
cd backend
npm install
node app.js
```

---

## 🔮 Future Enhancements

* Google Maps Integration
* Real-time Traffic API
* Machine Learning Model
* Route Optimization Algorithm (Genetic Algorithm)

---

## 👨‍💻 Author

**Raghav Rana**
B.Tech Data Science Student

---

## ⭐ Conclusion

This project demonstrates how **AI + simple logic** can help solve real-world logistics problems by enabling **proactive decision-making** instead of reactive responses.

---

💡 *"Predict before it disrupts."*
