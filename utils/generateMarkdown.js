// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = "";
  let link = "";

  switch (license) {
    case "N/A":
      badge = ""
      link = ""
      break;
    case "Apache License 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      link = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      link = '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case "MIT License":
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      link = '(https://opensource.org/licenses/MIT)'
      break;
    case 'BSD 2-Clause "Simplified"':
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]'
      link = '(https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
      link = '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case "Boost Software License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
      link = '(https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]'
      link = '(http://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case "":
      badge = ''
      link = ''
      break;
  }
  return { badge , link};
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { badge, link } = renderLicenseBadge(data.license);

  return `# ${data.repoName} ${badge}${link}

  ## Description 
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)  
  [Usage](#Usage)  
  [License](#License)  
  [Contributing](#Contributing)  
  [Test](#Test)  
  [Questions](#Questions)  

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This Project is licensed under the ${data.license} - see ${link} for details

  ## Contributing
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you have questions, you may reach out to me via email [${data.email}](${data.email})\n Please feel free to checkout other projects on my GitHub : [https://github.com/${data.gitUserName}](https://github.com/${data.gitUserName})
  `;
}

export default generateMarkdown;

