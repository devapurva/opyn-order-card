# OPYN ORDER CARD UI

[DEMO](https://opyn-frontend-assignment.vercel.app/) | [FIGMA DESIGNS](https://www.figma.com/file/CrTP57Fct6z3mp7pFu6mlO/Opyn-Frontend-UI-Task?node-id=0%3A1)

NOTE: Order card will connect to MetaMask wallet, please use test account.

1. [Component](https://github.com/devapurva/opyn-frontend-assignment/blob/main/src/components/OrderCard/index.tsx)
2. [Hook](https://github.com/devapurva/opyn-frontend-assignment/blob/main/src/hooks/connectMetamask.tsx)
3. [CSS](https://github.com/devapurva/opyn-frontend-assignment/blob/main/src/style/_order-card.scss)

**Goal:** Implement an order card to allow users to trade oTokens (options) 

- [Implement this flow](https://www.figma.com/file/CrTP57Fct6z3mp7pFu6mlO/Opyn-Frontend-UI-Task?node-id=1%3A7) using React, Typescript, and CSS
    - Implement the flow for a market sell
- The first button in the flow should actually connect to Metamask
- Every subsequent button should have loading + switching animations for button transitions, but does not need to connect to any logic
- CSS should be implemented using CSS best practices and without using existing libraries (eg. Material, Ant etc.)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
