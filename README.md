## Ema John

## How I worked on this project
My goal was to create a clone of Amazon.
- I built this app based on a simplified design for a e-commerce website.
- I wanted to built a user-friendly interface with info-rich products.
- Payment option with Stripe for a full e-commerce flow

## How to navigate this project
- Somewhat complex stateful logic: [https://github.com/samihaTasnim/ema-john/blob/master/src/components/Login.js]
- Server side code [https://github.com/samihaTasnim/ema-john-server] using Express.js and MongoDb

## Why I built the project this way
- I didn't use a state management library like Redux on purpose. For this app simple `context API` is
sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or
react-query are often used for data management.
- My plan is to become a full-stack developer. For the beginning I am using Firebase to manage authentication. That's why I decided to use an existing API rather to create a custom authentication system. I have basic backend knowledge.

## If I had more time I would change this
- Set up continuous integration to run the tests and ESLint on every Pull Request
- Make the website more responsive and add review feature for users
- Refactor some of the code. Especially this part [link to code on GitHub]
- Add end-to-end tests with Cypress.

## See it live

Link: https://ema-john--clone-7a3bf.web.app/

