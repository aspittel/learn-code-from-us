# Learn Code from Us

## Project Introduction

The following text was taken from the about page on [https://learncodefrom.us](https://learncodefrom.us):

> Learn Code from Us is a site that lists people who are members of underrepresented groups in tech who create resources geared towards programmers of all levels. These resources include (but are not limited to) podcasts, blog posts, newsletters, or YouTube videos. For now, this site is geared towards free resources in order to be as accessible as possible

[Here](https://dev.to/aspittel/introducing-learn-code-from-us-oe1) is a blog post with more about the project.

## Contributing

If you would like to contribute, please add an issue or comment on one of the ones that are open that you are working on it. Then submit a pull request!

If you would like to discuss the project in more detail [here](https://dev.to/learncodefromus/learn-code-from-us-developer-thread-3a5a) is an open thread where you can ask code questions or discuss the future of the project!

## Adding New People

On the user side, please add a new person through [this form](https://airtable.com/shrYbUMMlR1iVpA1l). 

> This site is specifically for highlighting people who are members of underrepresented groups in tech who create content for programmers.

> Please only submit if you have over five posts, and you are planning on making more content in the future! 

> Also, please only submit your own content at this point!

On the code side, the logic is in `data-formatting/script.js`. It creates the `data.json` file. You need an API key for the base in order to run this script. At this point, Ali will handle this process since it requires a couple manual checks.

## The Detailed Readme

If you are new to coding and would like to know what each part of the setup does or requires, please see the [Detailed Readme](DetailedReadme.md)

## Software Requirements

You will need the following software to be installed in order to build the code within this repository:

- A git Client
- A Text Editor
- [Node](https://nodejs.org/en/)

## Set up instructions

- Clone the repo
- run `npm install` within the `learn-from-us` directory
- run `npm start` within the same directory

## Docker

Alternatively, you can build the app with Docker. Make sure you have Docker installed and then run `docker-compose up` in the `learn-from-us` directory. On first run, this will build the image using the official Node image for Alpine Linux. Once the image is built it will launch the development server watching for code changes reloading the app when necessary.

By default, the app will start in development mode you can tweak the `args` and `command` values in _docker-compose.yml_ to achieve the result you like.

## React Tutorials For Beginners

[**Checkout Awesome Tutorials From Beginners to Advanced**](Tutorials.md)

- [A Complete Beginner's Guide to React](https://dev.to/aspittel/a-complete-beginners-guide-to-react-2cl6)
- Build a custom toggle switch - [Toggle Switch](https://scotch.io/tutorials/build-a-custom-toggle-switch-with-react)
- Build A simple login profile - [User login](https://scotch.io/tutorials/build-your-first-app-with-reacts-context-api)
- Introduction to `context-api` - [React Context](https://hackernoon.com/how-to-get-started-with-the-react-context-api-ccc41728fa59)
- What's new in CRA v2 - [Create React App v2](https://scotch.io/tutorials/whats-new-in-create-react-app-2)
- Difference between React Elements and React Components - [Tyler McGinnis](https://tylermcginnis.com/react-elements-vs-react-components/)
- [Net Ninja Videos](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG): This tutorial explains the basics of React.js and Redux. Perfect for beginners.
- [edx course](https://www.edx.org/course/programming-web-javascript-pennx-sd4x) for learning react
- Codeacdemy free react course to learn concepts of react
  - [Part I](https://www.codecademy.com/learn/react-101)
  - [Part II](https://www.codecademy.com/learn/react-102)
- React sample projects to learn
  - [6 Fun React Projects You Can Build Today](https://daveceddia.com/react-practice-projects/)
  - [25 React Projects](http://sean-smith.me/assets/portfolio/25-react-projects/index.html)
- [React Starter Kit](https://glitch.com/featured/react-starter-kit/) by [Glitch](https://glitch.com/)
- [LearnCode.academy Videos](https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b)
- [Traversy Media - React Crash Course](https://www.youtube.com/watch?v=A71aqufiNtQ)
- How to Learn React — A roadmap from beginner to advanced - [Srebalaji Thirumalai](https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6).
- Create a Simple To-Do App With React - [Chris Nwamba](https://scotch.io/tutorials/create-a-simple-to-do-app-with-react).
