Git management

1 - When we started, we had to download the latest code of master, because the GitHub code contains the code of all the members, and we can only ensure that the code of each member is the same after we continue.

2 - If you are going to do a new feature that day, you must first open a new branch and then pull down the GitHub code.

3 - If you want to continue with this branch, you don't have to update the code first.

4 - Before the end of the day, you have to upload your code, but sometimes you don't have to upload all the code, so we'll add the file to the staging area, give it a commit, and then push it up.

5 - When pushed up, remember to go to GitHub and send the code request to the version control leader.

<<<<<<< HEAD
=======

>>>>>>> 890e0700149c9f400cf11119e474a227df5069a2
Pull

1 - git status
2 - git fetch & checkout branchname
3 - git pull

push

4 - git add
5 - git commit -m ‘msg’
6 - git push

<<<<<<< HEAD
=======

>>>>>>> 890e0700149c9f400cf11119e474a227df5069a2
Some questions I encountered before

1 - Commit behind the master
https://stackoverflow.com/questions/34118404/what-i-can-do-to-resolve-1-commit-behind-master

2 - Resolve merge conflicts
https://confluence.atlassian.com/bitbucket/resolve-merge-conflicts-704414003.html

3 - Separate commits into branches
git fetch && git checkout -b bug_17 f5d7940d

<<<<<<< HEAD
=======


>>>>>>> 890e0700149c9f400cf11119e474a227df5069a2
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
