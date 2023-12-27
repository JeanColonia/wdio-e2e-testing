# Install wdio (if you choose a specific directory, just put it after the before described code)
- 'npm init wdio . or npm init wdio'


# package.json
- Check module type: "type":"module" ---> if this code is missed (need to add lines above).


# tsconfig.json
- check "module": "ESNext"
- check "resolveJsonModule": true
- add "esModuleInterop": true,
- change "strict":false


# wdio.conf.ts
- check "project: "./tsconfig.json"

    ## code
         e.g.
             tsNodeOpts: {
            ---> project: './tsconfig.json',
            transpileOnly: true
        }
- add "${process.cwd()}/test/features/**/*.feature"

    ## code
          e.g.
           specs: [
             `${process.cwd()}/test/features/**/*.feature`
         ],

- add "./test/features/step-definitions/*.ts"
    ## code
        e.g. 
         cucumberOpts: {
            // <string[]> (file/dir) require files before executing features
            require: ['./test/features/step-definitions/*.ts'],

         }






