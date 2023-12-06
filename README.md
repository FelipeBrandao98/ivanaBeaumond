# Getting Started

## Index
   * [Installation](#installation)
      * [Development Mode](#development)
      * [Production Mode](#production)
      * [First Steps](#first-steps)
   * [Techs](#techs)
   * [Application](#application)
   * [Project](#project)
      * [Layout.jsx](#layoutjsx)
      * [Page.jsx](#pagejsx)

# Installation

Installing the application is simple, separated into two ways of running:
  * Development Mode;
  * Production Mode.

# Development

##### In this mode, compilation is not necessary, the application works in such a way that the pages are compiled at run time (Recommended only for developer mode as it is a hot-reload scheme)

### To run in developer mode

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
```

## Production

##### In this mode, compilation is required, the application works in such a way that the pages are pre-compiled and served only by changing the data that is dynamic in the application, to run this mode two commands are necessary: first compile, then host (Recommended for Applications already in production, production mode is more performative)

### To run in production mode

```bash
npm run build
# or
yarn build
# or
pnpm build
```

##### Now you can start the already built application

```bash
npm run start:prod
# or
yarn start:prod
# or
pnpm start:prod
```


# First-Steps

<h3>Setting the variables</h3>

To access the application, you need to create your environment variables in the `.env` file, according to the `.exemple.env` template file.

```python
BACKEND_URL=
  |
  |-> this variable informs the address of the restful api, necessary to run the application (is the sum of the following 2 variables)

------------------------
BACKEND_PROTOCOL=
  |
  |-> variable responsible for the protocol used: 'http' or 'https'

------------------------
BACKEND_HOSTNAME=
  |
  |-> dns address that designates the url base of the RESTFUL API application

------------------------
PORT=
  |
  |-> port used by the application, usually 8080

------------------------
BACKEND_PORT=
  |
  |-> port used by the API RESTFUL

------------------------
NEXT_PUBLIC_GOOGLE_ANALYTICS=
  |
  |->  tag ID is an identifier that you put on your page to load a given Google tag. Examples of tag IDs include GT-XXXXXXXXX, G-XXXXXXXXX, and AW-XXXXXXXXX. A single Google tag can have multiple tag IDs.

```

After this step, we proceed to access the application through the page ``http://localhost:--port``, where `--port` is the port variable in the `.env` file.

# Techs

##### We used [Next.js](https://nextjs.org) on [Node](https://nodejs.org/en) to build this application, although it is available with [TypeScript](https://www.typescriptlang.org), we prefer to use only [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript), as it is a little less verbose, and perhaps a little faster to program, which does not negate the fact of the importance of using it. of [TypeScript](https://www.typescriptlang.org) for code maintenance, therefore becoming a future task in the next updates, transforming the code to [TypeScript](https://www.typescriptlang.org).

![image](https://img.shields.io/badge/JavaScript-F7DF3F?style=for-the-badge&logo=javascript&logoColor=black) ![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

# Application

``````javascript
Route (app)                                              Size     First Load JS
┌ ○ /_not-found                                          875 B          85.3 kB
├ λ /[lang]                                              3.84 kB         111 kB
├ λ /[lang]/buscar                                       155 B          84.6 kB
├ λ /[lang]/colecoes                                     6.85 kB         104 kB
├ λ /[lang]/colecoes/[title]/[id]                        1.77 kB        92.7 kB
├ λ /[lang]/comentarios                                  155 B          84.6 kB
├ λ /[lang]/eventos                                      2.03 kB        92.9 kB
├ λ /[lang]/eventos/[title]                              155 B          84.6 kB
├ λ /[lang]/noticias                                     1.98 kB         112 kB
├ λ /[lang]/noticias/[title]/[id]                        1.39 kB        91.1 kB
├ ○ /ib-login                                            2.28 kB         116 kB
├ ○ /ib-login/dashboard                                  155 B          84.6 kB
├ ○ /ib-login/dashboard/categorias                       2.82 kB         103 kB
├ ○ /ib-login/dashboard/categorias/novacategoriacolecao  2.61 kB         126 kB
├ ○ /ib-login/dashboard/categorias/novacategorianoticia  4.1 kB          118 kB
├ ○ /ib-login/dashboard/colecoes                         2.91 kB         104 kB
├ ○ /ib-login/dashboard/colecoes/addcat                  1.95 kB         102 kB
├ ○ /ib-login/dashboard/colecoes/addimagens              2.86 kB         116 kB
├ ○ /ib-login/dashboard/colecoes/novacolecao             2.68 kB         127 kB
├ ○ /ib-login/dashboard/mailer                           1.62 kB        86.7 kB
├ ○ /ib-login/dashboard/noticias                         2.83 kB         109 kB
├ ○ /ib-login/dashboard/noticias/novanoticia             3.45 kB         134 kB
├ ○ /manifest.webmanifest                                0 B                0 B
├ ○ /robots.txt                                          0 B                0 B
└ ○ /sitemap.xml                                         0 B                0 B
+ First Load JS shared by all                            84.4 kB
  ├ chunks/569-fc56d28ab128155a.js                       28.8 kB
  ├ chunks/c141e8ea-2de03a69996cc6ed.js                  53.3 kB
  ├ chunks/main-app-ef1c6209649800a1.js                  220 B
  └ chunks/webpack-ed332d3fc488b2f9.js                   2.18 kB


ƒ Middleware                                             33.3 kB

○  (Static)   prerendered as static content
λ  (Dynamic)  server-rendered on demand using Node.js

``````
##### Below is the application's route table, where there are two route forks, the first is the route that differentiates the part displayed to the end user, these are the routes starting with [lang], where 'lang' means which translation is used on the page: 
  * 🇧🇷 Portuguese Brazil [pt-BR];
  * 🇩🇪 German [de];
  * 🇫🇷 French [fr];
  * 🇬🇧 / 🇺🇸 English [en].

##### The routes preceded by ib-login, are the website's data manipulation routes, for administrator users, in them you can add, change and delete News, Events, Categories and Collections.

# Project

##### The project follows the following doctrine, starting at `./app/`, we have:

  > When checked, it means that the component met the 3 testing requirements `Mobile and Desktop optimization`, `Translation` and `Atomization`


## Layout.jsx

##### A root layout is the top-most layout in the root app directory. It is used to define the `<html>` and `<body>` tags and other globally shared UI.

- [x] Providers

> This component is a hook used to create schedules on any EndUser page of the Application.

- [x] - Menu
- [ ] - AdressItem
- [ ] - SubscribeItem
- [ ] - Footer

> components rendered on all EndUser pages of the application.

- [x] - GuideToBottomScroll
- [x] - ScrollToTop
- [ ] - CookieNotice
- [ ] - GoogleAnalytics

> Utility components rendered on all EndUser pages of the application.

## Page.jsx

##### A page is UI that is unique to a route. The scheme used in this application is:

  * The `Page.jsx` file reads the cookie provided by the `middleware.js` file, and distributes it to the components used on the page.
  
  * The `Page.jsx` file is also responsible for generating the application's metadata.

  * The `Page.jsx` file is also ultimately and preferably responsible for API calls, where in this scheme you must make a request, store your response in a variable and transfer this same variable to the component through a property to be rendered by the component

  > When checked, it means that the component met the 3 testing requirements `Mobile and Desktop optimization`, `Translation` and `Atomization`

  - [x] - BannerHomePage
  - [x] - CollectionsItemsCardHomePage (Needs Atomization)
  - [ ] - EventsItemsHomePage
  - [ ] - DepositionsAreaHomePage
  - [ ] - HighLightsHomePage
