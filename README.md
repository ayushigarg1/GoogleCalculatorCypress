
# 🔍 Cypress Test Automation Project

This project uses [Cypress](https://www.cypress.io/) to automate end-to-end testing of a web application.

---

## 📦 Project Setup

### 1. Initialize the Project
Create a new folder and initialize a Node.js project:

```bash
mkdir my-cypress-project
cd my-cypress-project
npm init -y
```

### 2. Install Cypress

```bash
npm install cypress --save-dev
```

### 3. Launch Cypress for the First Time

```bash
npx cypress open
```

This will auto-generate the default Cypress folder structure:

```
/cypress
  /e2e
  /fixtures
  /support
cypress.config.js
```

---

## 🚀 Running Tests

### Run Cypress in GUI Mode

```bash
npx cypress open
```

### Run Cypress in Headless Mode

```bash
npx cypress run
```



## 📌 Notes

- This test suite is designed to interact with the Google calculator widget.
- If a CAPTCHA appears, it must be solved manually.
- Ensure a stable internet connection when testing live sites.

---

## 📄 Author 

Ayushi Garg
https://www.linkedin.com/in/ayushi-gargg/