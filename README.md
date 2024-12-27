# Practical II - Web Application by Aleksandr Zapparov

## Getting Started
- Clone the repo and CD into it
- Run `npm install` (Uses Node v20.0.0 or newer)
- To startup the localhost server, run `npm run start`

This will initiate a localhost server on port 8080 and will also watch for new tailwindcss classes, new css or removal of css classes /css.

## Structure
- **/css**: Folder containing all the files related to css
  - **output.css**: Where the output from the watch:css command is stored. Contains all the css used by all the pages.
  - **styles.css**: Where the tailwindcss packages are imported along with any custom css you may want to add.
  - **/images**: Contains all the images from the pages
- **/public**: Contains all the pages except index.html
- **.nojekyll**: File used to prevent the issue with Github Pages thinking the project is made with Jekyll. See more details on this issue in Description.
- **CNAME**: File used to configure custom domain for the Github Page.
- **index.html**: Main page of the web application.
- **package.json**: Contains the scripts used to run the web application locally along with the packages used in this project as dev dependencies.
- **server.js**: Contains the code for the localhost server.
- **tailwind.config.js**: Contains the configuration for the tailwindcss framework.

## Description
I wanted to use the TailwindCSS framework for the site to make the process of adding styling to the pages much easier.

Once I've setup TailwindCSS, I proceeded to create all the pages required by the assignment:
- index.html
- /public/about.html
- /public/contact.html
- /public/degree.html
- /public/fce.html
- /public/net.html
- /public/topic.html

While in the process of making these pages, I realised my preview (localhost) of the web application was not working properly, so I made my own using express.js in a javascript file.

Once that was all resolved and the styling for the pages was finished, I activated github pages for the repository, and I've realised I had a couple of issues.

First of all, Github assumed I was using Jekyll because I have a package.json file in the repository, so it tried to initiate the page using the package.json commands. 
The fix was to add the .nojekyll file.

Second issue was all the relative links on the page I had were incorrect because a Github Page url ends with `/{repo_name}/`, which broke all of my relative paths.
Therefore, as a fix, I simply modified the page in accordance to the paths required by the Github Page and changed my server.js configuration so there would be no issue running the project locally.

I've also configured the page as a subdomain to my actual domain zapparov.dev using Cloudflare.

Lastly, I realised the styling for the pages I've made was very inconsistent and the styles made it harder to read the content, so I've made improvements to the main content design.

## Problems during the development
- Setup of TailwindCSS: I was too accustomed to setting it up with Eleventy and Nunjucks, so I didn't have as much experience with setting it up by itself.
- Issues running the Web Application Locally: The pages simply did not load with css and did not have access to the other pages, so as a fix, I used express.js to create a localhost server.
- Github Pages: Issue where Github considered that if I have package.json in the repository, I must be using Jekyll. Fix was to just add .nojekyll, so it would not try to execute it as a Jekyll project.
- Tables: My content had very large tables, so as a fix, I found the module made by the creator of Eleventy called [table-saw](https://github.com/zachleat/table-saw/), which made the tables much more dynamic and readable.

For anyone with curiosity, here is more information on Eleventy (11ty), Nunjucks and TailwindCSS:
- [Eleventy](https://www.11ty.dev/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [TailwindCSS](https://tailwindcss.com/)

## Conclusions
I've realised I lack in the fundamentals. Even though this project is still quite elementary, I've definitely found areas to work on, such as the design aspect of the page, along with structuring and proper usage of styles without adding junk css.

I've also found this experience really good as practice for structuring my own projects and understanding how to use TailwindCSS without any other frameworks.

Additionally, it also helped me in learning how to problem solve for the problems mentioned above. 

Lastly, I definitely need to be more careful with the commit messages, as I have had a couple of chaotic commits with no proper message structure to each.