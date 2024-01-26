## Create package.json file
- npm init 

## Install wdio (if you choose a specific directory, just put it after the before desscribed code)
- 'npm init wdio . or npm init wdio'


## package.json
- Check module type: "type":"module" ---> if this code is missed (need to add lines above).


## tsconfig.json
- check "module": "ESNext"s
- check "resolveJsonModule": true
- add "esModuleInterop": true,
- change "strict":falses

- Aditional values in this file(tsconfig.json) would not generate type errors:

        "types": [
        "node",
        "webdriverio/async",
        "@wdio/cucumber-framework",
        "expect-webdriverio",
        "@wdio/globals/types"

        ]

## wdio.conf.tss
- check "project: "./tsconfig.json"

    ### code
         e.g.
             tsNodeOpts: {
            ---> project: './tsconfig.json',
            transpileOnly: true
        }
- add "${process.cwd()}/test/features/**/*.feature"

    ### code
          e.g.
           specs: [
             `${process.cwd()}/test/features/**/*.feature`
         ],

- add "./test/features/step-definitions/*.ts"
    ### code
        e.g. 
         cucumberOpts: {
            // <string[]> (file/dir) require files before executing features
            require: ['./test/features/step-definitions/*.ts'],

         }



# Logger:
 ### Install winston  as a dev dependency like code below:

## code
    npm install --save-dev winston
    
#### Then add a file named "logger.ts" and invoke the respective function and additional configurations.

#### Import and call "logger" into the code 

### code
    import logger from '../../helpers/logger.ts';

    -- calling logger:
     
     logger.info() --> insert ur respective method of logger.



## Allure Report:
#### Previusly configs:
     ---> Requirement for this type of report is Java 8.

### code
    1 * Installing allure commandline:
        npm install -g allure-commandline

    2 * Command to view allure path:
        Windows --> "where allure"
        Mac ------> "which allure"
    
    3 * Set flags into wdio.conf.ts file:
        disableWebdriverStepsReporting:true,
        useCucumberStepReporter: true

    4 * command to open allure report
        allure serve

### For additional configurations use code below into wdio.conf.ts (reporter):
### code
    reportedEnvironmentVars: {
     
     Environment: process.env.ENVIRONMENT_TEST
    
    }

### Env configuration and delete historic report files

### code
     if (process.env.RUNNER === "LOCAL" && fs.existsSync("./allure-results")) {
            fs.rmdirSync("./allure-results", {
                recursive: true
            })
        }
 
 ### add code below into wdio.conf.ts (report section):
        reporters: [
        // Like this with the default options, see the options below
        'cucumberjs-json',

        // OR like this if you want to set the folder and the language
        [ 'cucumberjs-json', {
                jsonFolder: '.tmp/new/',
                language: 'en',
            },
        ],
    ],


### Then import this couple of packages/dependecies:

    import fs from 'node:fs/promises'
    // Import the module
    import { generate } from 'multiple-cucumber-html-reporter'


### Add remove function and generate:

     onPrepare: () => {
    // Remove the `.tmp/` folder that holds the json and report files
    return fs.rm('.tmp/', { recursive: true });
    },



     generate({
      // Required
      // This part needs to be the same path where you store the JSON files
      // default = '.tmp/json/'
      jsonDir: '.tmp/json/',
      reportPath: '.tmp/report/',
      // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
    });



### Additional dependencies:

### multiple-cucumber-html-reporter:

    npm install multiple-cucumber-html-reporter --save-dev


### fs-extra:
    npm i fs-extra





## Cucumber json Reporter
### Previusly configs:

### code:
    npm install wdio-cucumberjs-json-reporter --save-dev


# Api Testing Integration with WebdriverIO


### We need to install "supertest" as a dev depedency 

### code
    npm install --save-dev supertest

### for more information access to his main page, link below:
    https://ladjs.github.io/superagent/

### example of request code: (GET Method):

### code: 
    async function GET(testid: string, baseUrl: string, endpoint: string, authToken: string, queryParam: Object) {
    if (!(baseUrl || endpoint)) throw Error(`One of the given values BaseUrl: ${baseUrl}, endpoint: ${endpoint} is not valid`);
    baseUrl = baseUrl.trim()
    endpoint = endpoint.trim()

    reporter.addStep(testid, "info", `Making a GET request to ${baseUrl}${endpoint}`)
    try {

    return await request(baseUrl).get(endpoint).query(queryParam).auth(authToken, { type: 'bearer' }).set("Content-Type", "application/json").set("Accept", "application/json")


    } catch (error) {
    throw error;
    }

    }



## Cross Browser Testing
### To Run test in other browsers, check example below:

#### code
     Refer to this npm page --instructions are provided
     Link:
     https://www.npmjs.com/package/wdio-geckodriver-service

#### Install two npm packages:
    npm install wdio-geckodriver-service --save-dev
 
      npm i --save-dev geckodriver

### Add configs in wdio.conf.ts
    > Add another capability object in capabilities array with browserName as firefox.

    >Add a new service  as "geckodriver"



## Database Interactions (Using MSSQL SERVER CONN)

### To work with databases you need to install the respect dependecies

### e.g. we'll install MS SQL SERVER 

### code
    1.   npm i --save-dev mssql


    2.   npm i --save-dev @types/mssql

    3.   npm i --save-dev msnodesqlv8



#### Notes:
     to run a simple ts file use "npx tsx file.(type of file 'ts')"
