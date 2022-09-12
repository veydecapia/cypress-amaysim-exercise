<div id="top"></div>


<!-- ABOUT THE PROJECT -->
## About The Project

Project contains Automated Test written in [TypeScript](https://www.typescriptlang.org/)/JavaScript using [Cypress](https://www.cypress.io/) as an open source automation testing framework.
My task is to automate testing of [www.amaysim.com.au](https://www.amaysim.com.au/), covering some of the scenarios and basic functions of MyAmasim: Refer A Friend.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Cypress](https://www.cypress.io/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get automated test in your local copy up and running follow these simple example steps.


### Prerequisites
To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer.

Note: to download the latest version of npm, on the command line, run the following command:
   ```sh
   npm install -g npm
   ```
*Please refer to the following*
* [Download Node.js](https://nodejs.org/en/download/)
* [Downloading and installing node js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/veydecapia/cypress-amaysim-exercise.git
   ```
2. Install NPM packages. This downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.
   ```sh
   npm install
   ```
   
   It would install first the required npm packages.
   
<p align="right">(<a href="#top">back to top</a>)</p>


### Setup of Environment Variable

1. Export the environment variables by naming **CYPRESS_***
   
   Note: Any exported environment variables set on the command line or in your CI provider that start with either CYPRESS_ or cypress_ will automatically be parsed by Cypress.
   
2. *For MAC:* Open terminal (command line) and open bash_profile.
   ```sh
   nano .bash_profile
   ```
   
   Then, key in the username and password, then save.
   ```sh
   export CYPRESS_USERNAME=<insert username>
   export CYPRESS_PASSWORD=<insert password>
   ```
   
   *For Windows:* Click [here](https://www.computerhope.com/issues/ch000549.htm#windows11) for step by step instructions on how to setup environment variables on Windows 11 and [here](https://www.computerhope.com/issues/ch000549.htm#windows10) for Windows 10.
   
   Note that variable name should be set to the following with their corresponding values:
   ```sh
   CYPRESS_USERNAME
   CYPRESS_PASSWORD
   ```
   
   
   <p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

1. To run the created Automated test against prod environment. Open cypress and indicate the **ENVIRONMENT**
   ```sh
   ENVIRONMENT=prod npx cypress open
   ```
   OR you can just enter npm run prod and let the script handle it.
   ```sh
   npm run prod
   ```
   
     This will open the Cypress test runner and will be tested against the prod environment.
     For demonstration purposes, I've added dev, local and test options under _cypress.env.json file_
     
     Select E2E Testing.
     
     ![image](https://user-images.githubusercontent.com/6094567/188628240-2e4fb509-5343-4a2c-af49-3befe6d7ff79.png)

     
2. Then Choose a browser to run your test against. This will depend on the browsers installed on your local machine.

    Then click start testing to start testing on your chosen browser.
    
   ![image](https://user-images.githubusercontent.com/6094567/188629047-511f647d-b6ae-4ddb-8596-0dc67041e9fd.png)

3. You should be presented with 2 spec files.
    - login.spec.ts
    - refer-a-friend.spec.ts
        
    Click the refer-a-friend spec file to run Refer A Friend automation test.
    
    ![image](https://user-images.githubusercontent.com/6094567/188630018-d56b3720-83cb-4bdf-991c-fa9d6224dd65.png)


    ### Sample Test Result when running on Cypress - interactive mode
    
    > **Refer A Friend**
    
    ![image](https://user-images.githubusercontent.com/6094567/188632300-9bc24065-8c0c-4dd0-b9d5-f719ea8b99e0.png)

    You can also run the login spec file.
    
    > **Login**
    
    ![image](https://user-images.githubusercontent.com/6094567/188630420-525cb3e6-b6ad-4efa-8b1f-e40b964882a1.png)

    
3. You can view the environment configuration json file on the root folder. And this is being controlled by the cypress config file _cypress.config.ts_
   ```sh
   cypress.env.json
   ```


## Other Projects

Please also view and check my other repo showcasing end to end UI test built on other Automation tools.

  - Cypress/TypeScript - Selenium tutorial website https://github.com/veydecapia/cypress-exercise
  - WebdriverIO/TypeScript - Selenium tutorial website https://github.com/veydecapia/wdio-exercise
  - Protractor/TypeScript/Jasmine - TodoMVC https://github.com/veydecapia/todomvc-exercise
  - Protractor/TypeScript/Jasmine - SalesChamp https://github.com/veydecapia/saleschamp-exercise

<!-- CONTACT -->
## Contact

Your Name - harveydecapia@gmail.com

Project Link: [https://github.com/veydecapia/cypress-amaysim-exercise.git](https://github.com/veydecapia/cypress-amaysim-exercise.git)

<p align="right">(<a href="#top">back to top</a>)</p>
