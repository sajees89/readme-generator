const fs = require('fs');

function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-9cf.svg)
  ## Table of Contents
  * [Project Description](#description)
  * [Project Links](#link)
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Tests](#tests)
  * [Credits](#credits)
  * [How to Contribute to this Project](#contribute)
  * [Contact the Developer](#contact)
  * [License](#license) 
  ## Description
  ${data.description}
  ## Project Links
  ${data.link}
  ## Installation Instructions
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Features
  ${data.features}
  ## Tests
  ${data.tests}
  ## Credits
  ${data.credits}
  ## Contribute to this Project
  ${data.contribute}
  ## Questions?
  Contact the developer if you have questions or comments about this project
  * Email: <${data.email}>
  * GitHub: <https://github.com/${data.username}>
  ## License
  This project is licensed under the terms of the ${data.license} license.  
 
`;
}

module.exports = generateMarkdown;