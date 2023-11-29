# Getting Started

## Index
<!--ts-->
   * [Installation](#install)
      * [Development Mode](#dev)
      * [Production Mode](#prod)
      * [Firsts Steps](#firststep)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->

<h2><a href="#dev" styles="center">To run in developer mode</a></h2>

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
```

<h2><a href="#dev" styles="center">To run in production mode</a></h2>

##### First you need build the application

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


<h2><a href="#firststep" styles="center">First Steps</a></h2>

<h3>Setting the variables</h3>

To access the application, you need to create your environment variables in the `.env` file, according to the `.exemple.env` template file.

```shell
####################
BACKEND_URL=

--> this variable informs the address of the restful api, necessary to run the application (is the sum of the following 3 variables)

####################
BACKEND_PROTOCOL=

####################
BACKEND_HOSTNAME=

####################
PORT=

####################
NEXT_PUBLIC_GOOGLE_ANALYTICS=

####################

```

After this step, we proceed to access the application through the page (http: //localhost/(--port0)), where (--port) is the port variable in the `.env` file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
