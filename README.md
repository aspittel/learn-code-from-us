# Learn Code from Us

## Project Introduction

The following text was taken from the about page on [https://learncodefrom.us](https://learncodefrom.us):

> Learn Code from Us is a site that lists people who are members of underrepresented groups in tech who create resources geared towards programmers of all levels. These resources include (but are not limited to) podcasts, blog posts, newsletters, or YouTube videos. For now, this site is geared towards free resources in order to be as accessible as possible

## The Detailed Readme

If you are new to coding and would like to know what each part of the setup does or requires, please see the [Detailed Readme](DetailedReadme.md)

## Software Requirements

You will need the following software to be installed in order to build the code within this repository:

- A git Client
- A Text Editor
- [Node](https://nodejs.org/en/)

## Set up instructions

- Get an API Key for using AirTable
  - [using airtable](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)
  - or you can [contact Ali](https://twitter.com/aspittel) for a read-only one
- Add your API Key to an `.env` file
  - The format is:
  - `REACT_APP_AIRTABLE_API_KEY=YourAPIKey`
- Clone the repo
- run `npm install` within the `learn-from-us` directory
- run `npm start` within the same directory
