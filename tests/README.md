# Getting Started with Document intelligence UI

This is UI app for OCR technology by Provectus

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), v.17.01

---
## Technologies in use

- State management: `redux`
- UI components: `antd`
- CSS processing: `SASS` and `css-modules`
- Testing: `jest` and `enzyme`
- The `husky` is configured to run tests, typescript type checkings and lintings on git pre-commit hook
---
### Prerequisites

- npm
- node 14 (lts/fermium)
- Docker
---
## How to install

1. Install all dependencies from `package.json` by run:

### `npm install`

2. Create ```.env.local``` and fill environment variables:

|                  Name                  |       Default value       |                  Comment                   |
|:--------------------------------------:|:-------------------------:|:------------------------------------------:|
|           REACT_APP_API_URL            | http://localhost:8080/api |                                            |
|       REACT_APP_ROUTING_BASE_URL       |           /api            |                                            |
|      REACT_APP_AWS_PROJECT_REGION      |                           |                                            |
|      REACT_APP_AWS_USER_POOLS_ID       |                           |                                            |
| REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID |                           |                                            |
|    REACT_APP_MODEL_UPDATED_VERSION     |                           |                                            |
|        REACT_APP_WEBSOCKET_URL         |                           |                                            |
|            REACT_APP_S3_URL            |                           |                                            |

3. To start app in development mode, you can run:

### `npm start`

4. Clone proxy repository from:

### ```https://github.com/Anomeon/proxy.git```

5. Go to the root folder of the proxy repository, create ```.env``` file and fill environment variables:

|           Name            |     Default value     | Comment |
|:-------------------------:|:---------------------:|:-------:|
|           PORT            |         8080          |         |
|          ORIGIN           | http://localhost:3000 |         |
|         PROXY_URL         |                       |         |
|       COOKIE_DOMAIN       |                       |         |
| EXTRA_PROXY_MAPPING_RULES |                       |         |
|    PATH_REPLACE_RULES     |                       |         |
|           HTTPS           |                       |         |

6. Install dependencies with command:

### ```npm install```

7. Start proxy with command:

### `npm start`

8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.\
You will also see any lint errors in the console.
---
## How to run tests
To run the test runner in interactive view, use:

### `npm test`

Additionally, you can see coverage of project be tests by run `npm test:coverage`

---
## Docker

You can run application using the docker setup.\
For development purposes we use configurations in `Dockerfile` and `docker-compose.yaml`.\
Production configuration is located in the `Dockerfile.prod` and `docker-compose.prod.yaml`.\

Dev setup can be run using:

> docker-compose up -d --build

Open [http://localhost:3001](http://localhost:3001) in the browser in that case.

And for production we run

> docker-compose -f docker-compose.prod.yaml up -d --build

It will start image and container with `node` and `nginx`.\
Open [http://localhost:1337](http://localhost:1337) in the browser in that case.
---
## Build

You can build app for production by using this command:

> docker-compose -f docker-compose.prod.yaml build
---
## Environment variables

We put environment variables into the `.env` file.\
They can be overriden in several ways:
* in the `docker-compose` configuration files in the `environment` section.\
* by prepending the `npm` scripts

> API_URL=your_api_url npm start

* by the `-e` option in `docker run` command

> -e API_URL=your_api_url

### Runtime environment variables

Runtime environment variables support is based on [this approach](https://medium.com/free-code-camp/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70)

But we generate `index.html` instead of the script file. We follow this strategy:
* We have `.env` file with all the variables
* We have `index.template.html` that contains the `__ENV_CONFIG_SCRIPT__` placeholder
* We generate `index.html` with the env vars injected and serve it
* When we start the application, we call the `env.sh` shell script that takes env vars from the `.env` _(by default)_, generates a html script tag and replaces the placeholder in the `index.template.html` _(by default)_ with the script tag string. The output of the `env.sh` script goes to the `index.html` _(by default)_
* When we build prod version, we copy `index.template.html` to `index.html` to make CRA pass it through its own build process. Then we copy resulting `index.html` to `index.template.html` inside the `build` folder. It allows us to generate `index.html` on prod when the application starts.
* If you run `npm run build` locally, make sure that you restart `npm start` after that. Because of the previous point: we replace the generated `index.html` when build the prod version.
* Prod and dev environments have different file locations, so we have `env-dev.sh` that calls the `env.sh` with the locations specified (this behavior explained in the `env.sh` comments). `env.sh` has default argument values that match the production environment files locations

Our static files pathes are relative to the `<base href />`expression in the `index.html`. We use runtime env vars to define the base href URL. To achieve that we have a `<script />` tag placed after the env config script. It sets the `href` attribute of the `<base />` tag before all the other resources started loading.

\
\
The project is just beginning, so there are many changes ahead...
