const licenses = ["MIT", "Apache 2.0", "BSD-2", "BSD-3"];

// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case 'Apache 2.0':
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case 'BSD-2':
      return "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg";
    case 'BSD-3':
      return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
    default:
      return ''
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD-2":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "BSD-3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case "MIT":
      return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    
    case "Apache 2.0":
      return `   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`;

    case "BSD-2":
      return `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.`;

    case "BSD-3":
      return `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let title = 'Title';
  if (data.title) {
    title = data.title;
  }

  let description = '';
  if (data.description) {
    description = data.description;
  }

  let installation = '';
  if (data.installation) {
    installation = data.installation;
  }

  let usage = '';
  if (data.usage) {
    usage = data.usage;
  }

  let contribution = '';
  if (data.contribution) {
    contribution = data.contribution;
  }

  let testing = '';
  if (data.testing) {
    testing = data.testing;
  }
  
  let licenseBadge = '';
  let licenseSection = '';
  if (data.license && licenses.indexOf(data.license)) {
    licenseBadge = `[![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})`;
    licenseSection = renderLicenseSection(data.license);
  }

  let github = '';
  if (data.github) {
    github = data.github;
  }

  let email = '';
  if (data.email) {
    email = data.email;
  }
  

  return `
# ${title}
${licenseBadge}
## Description
${description}
## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## Contributing
${contribution}
## Tests
${testing}
## License
${licenseSection}
## Questions
Questions?

Contact me on GitHub: [${github}](https://github.com/${github})

Email: [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
