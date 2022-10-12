# frontend-and-backend

![CI](https://github.com/wlsf82/frontend-and-backend/actions/workflows/ci.yml/badge.svg)

Sample project with basic 'backend' and frontend, running Cypress tests on GitLab.
## Getting Started

## Pre-requirements

To run this project, you will need:

- [nodejs](https://nodejs.org/en/) (I've used version `v16.14.0` while writing this doc)
- NPM (I've used version `7.22.0` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.


## Install project dependencies

After cloning this project, to install the dev dependencies, access the project root and run `npm install` (or `npm i` for short.)

## Tests

Run `npm run cy:open` to open the cypress execution window, showing all Features, grouped by UI-API/Folder .
> **Note 1:** On first time execution, it could take some time to open, until cypress installation/setup.
> You can click on one of then to start a test execution.

Run `npm run test:api` to run the API tests.

Run `npm run test:ui` to run the UI tests.

Run `npm run test:all` to run the UI and API tests.

### Cucumber BDD style test scenarios

This project uses a `cypress-cucumber-preprocessor`, witch means that testing scenarios is wrote in cucumber style BDD using Gherkin language.

If you are not familiar with Cucumber, we recommend reading this [docs](https://cucumber.io/docs/guides/overview).

The “features” files are located on `cypress > integration > ** > features`, separated by services.
       
	├── cypress
    |   ├── integration
	│   |    ├── ** 
    |   |        └── **.feature
    |   └──...
	└──...

### Page Objects

Page objects is a common practice and widely used by automated testing projects.

The concept itself is came from front-end testing, but the pattern can be applied to backend testing as well.

It is located on `cypress > support > page_objects` directory, and we use “-page” suffix to files.
           
	├── cypress
	│   ├── support
	│   │   └── page_objects
	|   │       │   ├── api
    |   │       │       └── users-page.js
    |   │       └──...
    |   └──...
	└──...

The idea of use page-objects is to abstract common functions of a micro-service/pages to avoid duplicated code inside `step definitions`, also to improve code readability.

 ### DTO pattern
 
 DTO pattern is not a common practice in automated tests projects or even on JavaScript, but it can be a good practice when we are structuring a project that can be increase soon.
 
 The idea of DTO pattern is to have a `Bean objects` that uses JavaScript ES6 classes that have the `request body` contract of a microservice/resource, that can set default values or set fields content when instanced on `step definition`.
 
 Example of usage:
 
`api-users-steps.js`

 const CreateUserBean = require('../../dto/CreateUpdateUserBean');
    const { createUser } = require('../../page_objects/api/users-page');
    
    When('I create an user', async function (table) {
    (...)
    
    // this "newUser" below is the request body object that have methods to set values
    const newUser = new CreateUserBean()
        .setId(id || this.id);
        .setUsername(username || this.username);
    
    // This is a page-object function to create an user, passing the newUser object as request body.
     createUser.call(this, newUsers);
    }

> **Note:** This logical is applied for UI test

### Pipeline integration
// ToDo

___

Made with ❤️ by **Fernando Baldo** - *GitHub* - [Fernandobaldo](https://github.com/Fernandobaldo)