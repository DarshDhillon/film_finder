![filmfinder App Banner](https://i.ibb.co/P9njNJB/github-ff-banner.png)

### [Link to live site](https://filmfinder.darshdhillon.co.uk/)

## App overview

FilmFinder is a film database searching app for obtaining details on thousands of films.

The search utilises a API provided by themoviedb. The default fetch renders films currently in cinemas, and the user can fetch data on other relevant terms (popular films, upcoming releases etc.).

Users can paginate through the list of films either page-by-page or by selecting a certain page. In addition to image galleries from each film, the app also displays selected film information (budget, release date etc.) as well as images of the film's most prominent actors.

## Features

- Redux state management including middleware thunk
- Sequential page pagination get requests
- CSS-in-JS with Styled-components library
- Custom markup and styling (no UI or styling libraries such as Material UI, Bootstrap etc.)
- PropTypes addition for all relevant components
- Fully responsive for desktop, tablet or mobile

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Install the necessary dependencies, and then start the application:

```sh
npm install
npm start
```

## Notes

A relevant and active key for themoviedb API will be required for the app to function.

![App snapshot](https://i.ibb.co/D8Dx6fJ/Github-ff-snapshot.png)
