This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Objective of Project

### HTML and Visuals

·         The grid should display data in the order that it is received

·         Each person should be displayed in a rectangle with a black border of 2px

·         There should be 3 person items per row (no need to be responsive)

·         Each grid item should contain the name, age, and category of the person.

·         Each grid item should have a corresponding background color based on the priority of the person featured: 1 - Orange 2 - Green 3 - Blue 4 - Purple

### Header Functionality

Please implement a header that allows the user to sort and filter the data.

#### Implement Sorting

Provide the user a way to sort the data. The user should be allowed to choose from 3 methods:

1.       Default: no sort performed (rely on order of the data)

2.       A-Z: Alphabetically ascending by name

3.       Priority: Numerically ascending by priority

#### Implement Filtering

Provide the user with radio buttons that allow them to filter the data. Each radio button should be dynamically generated based on the category field in the dummy data - do not hard-code this. When a filter is selected, only people matching the filter should be displayed.
