# Spaced Repetition API

## Live Link: https://spaced-repetition-bice.vercel.app/

## Back End Repo: https://github.com/joewickes/spaced-repetition-api/tree/main

## Table of Contents
- [Summary](##-summary)
- [How To Use It](##-how-to-use-it)
- [Technologies Used](##-technologies-used)

## Summary
Spaced repetition is an app that helps users learn new words in a foreign language with the spaced repetition technique.

As a user I can
- While Logged Out
  - Get automatically redirected to the Sign Up page
  - Click on either Sign Up or Log In and get redirected to either page
- While Logged In
  - I can see a list of my words
  - I can start learning
  - I can guess the answer for each word
  - I can see a response for my guess
  - I can try the next word
  - I can log out

## How To Use It
Below is a sample use case for Spaced Repetition

Sign Up or Log In (With appropriate error messages for each)
Signing Up automatically takes you to the Login Page
![Home Page](./src/images/SS1.png?raw=true "Sign Up")
![Home Page](./src/images/SS2.png?raw=true "Log In")

Home Page (Start Practicing)
![Home Page](./src/images/SS3.png?raw=true "Home Page (Start Practicing)")

Guess Word meaning
![Home Page](./src/images/SS4.png?raw=true "Guess Word meaning")

Correct Response
![Home Page](./src/images/SS5.png?raw=true "Correct Response")

Guess Another word Meaning
![Home Page](./src/images/SS6.png?raw=true "Guess Another word Meaning")

Incorrect Response (LogOut)
![Home Page](./src/images/SS7.png?raw=true "Incorrect Response (LogOut)")

Redirected to Log In Page
![Home Page](./src/images/SS8.png?raw=true "Redirected to Log In Page")


## Technologies Used
- React
- React Router
- React Context
- JWT Decode
- Cypress (Development)
- JWT (Development)
- Unfetch (Development)