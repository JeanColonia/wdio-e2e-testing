## Install wdio (if you choose a specific directory, just put it after the before described code)
- 'npm init wdio . or npm init wdio'


## package.json
- Check module type: "type":"module" ---> if this code is missed (need to add lines above).


## tsconfig.json
- check "module": "ESNext"
- check "resolveJsonModule": true
- add "esModuleInterop": true,
- change "strict":false


## wdio.conf.ts
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
 


