# Server directory

## Proposed Architecture

### / 
#### (top-level)

- Express server routes (Please see the diagram at: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes for clarification) 

### /model

- All files for data-providing/changing SDKs (i.e. MongoUtil.js for our CRUD functions; see: https://www.codecademy.com/articles/what-is-crud if you're unsure as to what CRUD means)

### /modules

- All files for utilizing external, logic/authentication providing SDKs (i.e. GCPUtil.js for nlp module, CognitoUtil.js 
for AWS authentication module, etc.)
