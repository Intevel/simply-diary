![image](https://github.com/cnrycodes/simply-diary/blob/master/header.png?raw=true)


<p style="margin: 20px 0 10px">
  <a href="https://simply-diary.xyz/" target="_blank" style='margin-right:0px; margin-top:15px'>
    <img align="center" src="https://github.com/cnrycodes/simply-diary/blob/master/visit-website.png?raw=true" alt="visit" height="35px" />
  </a>
</p>

<br />

⚠️ This project is archived and not longer maintained ⚠️

## ✨ About

- **Open-Source**. the project is fully open source, both backend and frontend.
- **Free**. you can create a diary for free and without registration.
- **Anonymous**. it is completely anonymous, you just have to remember your diary code.

Simply Diary is an open source platform to write online diary. Each diary has its own short code making it easily idenfiable for collaborators and diary contributors. Simply Diary is completely free and works without registration, just remember your diary identification codes.

<br />

## 🚀 Self-Hosted
If you want to host a Simply Diary yourself then you have to clone the two repositories first, the backend and the frontend. 

```sh
Frontend: git clone https://github.com/cnrycodes/simply-diary.git
Backend: git clone https://github.com/cnrycodes/simply-diary-server.git
```

First we start the backend, navigate to your folder:

```sh
$ npm install
$ npm start
```

The backend should now start on port 8080 if the port has not been changed.

Now we start the frontend, navigate to your folder:

```sh
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

```

⚠️ Don't forget to change the API Urls in the Frontend Source Code ⚠️

<br />

## 📈 Contribute

### Introduction

- This site is built with Nuxt.js and TailwindCSS

### Feature request or see a bug?

Create a new issue to allow us and other users to discuss the proposed change and work on implementing it.

### How to contribute?

1. Comment on the issue you are planning to resolve
2. Fork the repository
3. Fix the problems the issue creator was facing. Open a pull request and tag the issue in your pull request/commits in the pull request
4. Your PR will be reviewed, and once it's approved it will be merged into `main`
