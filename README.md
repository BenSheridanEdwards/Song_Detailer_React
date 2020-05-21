# Song Detailer

[![CircleCI](https://circleci.com/gh/BenSheridanEdwards/Song_Detailer_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/Song_Detailer_React)
[![Maintainability](https://api.codeclimate.com/v1/badges/927be19b769a8cc8fa03/maintainability)](https://codeclimate.com/github/BenSheridanEdwards/Song_Detailer_React/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/927be19b769a8cc8fa03/test_coverage)](https://codeclimate.com/github/BenSheridanEdwards/Song_Detailer_React/test_coverage)

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [App Showcase](#app-showcase) | [Features](#features) | [Improvements](#improvements) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

A simple app that displays a list of hard coded songs a user can choose from. Selecting a song reveals details like the song's title, artist, and duration. 

**Tech Stack:** *JavaScript, React, Redux, Node, CSS, HTML, Jest, Enzyme, Webpack, Babel, CircleCI, Code Climate, Firebase*

You'll find the app [here](https://song-detailer-react.web.app/), use cmd/window + click to open in a new tab.

## <a name="user-stories">User Stories</a>

```
As a user, when I use Song Detailer.
I expect to see a list of songs to choose from. 
```

```
As a user, when I use Song Detailer.
I expect to be able to select a song using a select button, 
and it's details to appear next to it. 
```

```
As a user, when I use Song Detailer. 
I expect to be able to change my selected song using a different select button, 
and see the details display change to show me my new selected song's details.
```

## <a name="mockups">Mockups</a>

![App Mockup](https://github.com/BenSheridanEdwards/Song_Detailer_React/blob/master/media/Mockups/SongDetailer-MockupApp.png)

![Component Mockup](https://github.com/BenSheridanEdwards/Song_Detailer_React/blob/master/media/Mockups/SongDetailer-MockupComponents.png)

![Redux Mockup](https://github.com/BenSheridanEdwards/Song_Detailer_React/blob/master/media/Mockups/SongDetailer-MockupReduxStructure.png)

## <a name="app-showcase">App Showcase</a>

![App Screenrecording](https://github.com/BenSheridanEdwards/Song_Detailer_React/blob/master/media/Showcase/SongDetailer-AppShowcase.gif)

### <a name="features">Features</a>

- Set list of songs to choose from
- Select a song and see details like the title, artist and duration

### <a name="improvements">Improvements</a>

- Add styling
- Rebuild the app from scratch using TDD

## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.
```
$ git clone git@github.com:BenSheridanEdwards/Song_Detailer_React.git
$ cd Song_Detailer_React
```

### Launching the App from the Command Line

From inside the React project, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the React project, you can run `npm start` in the terminal to run the test suite. 

```
$ npm test
```

### Seeing Test Coverage

From inside the React project, you can run 'npm test -- --coverage' in the terminal to see the code coverage for this project.

```
$ npm test -- --coverage
```

## <a name="credits">Credits</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/). 

This project uses continuous integration and deployment with [CircleCI](https://circleci.com/) & [Firebase](https://firebase.google.com/).

This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality.
