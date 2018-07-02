# facebook-projects
List of projects owned by Facebook on Github

Please follow below steps to run this project on your machine
1. Download the repository by using link https://github.com/rushikeshbharad/facebook-projects/archive/master.zip
  OR enter command `git clone https://github.com/rushikeshbharad/facebook-projects.git` in terminal
2. Navigate to the repository `cd facebook-projects`
3. Make sure that your machine is up to date with latest npm; you can run `npm i npm@latest -g` to be at a safer side
4. Install node modules `npm i`
5. Run the project using command `npm start`
6. Browser will be automatically get opened with url `http://localhost:3000/`, otherwise you can enter this url in the browser


To run the unit tests
- Please follow above steps till step no. 5 (if not done before) and then execute `npm test`


To run this project remotely on other device in same network
- Run the project on the machine where you have setup the project using above steps
- Re-visit the terminal from which you have launched the project
- You will see one url against "On your network"
- Now connect the other device in same network where your primary machine is connected
- Enter the url against "On your network" into the browser of newly connected device


This project is live on gh-pages, link: https://rushikeshbharad.github.io/facebook-projects/

<img src="https://media.giphy.com/media/2xPGQoFEyIOuo8UZYe/giphy.gif"></img>


Features involved
- Displays list of projects owned by Facebook on Github on sidebar navigation
- Project list is sorted depending on the number of watchers for each project
- User can click on any of the projects listed to see the details of that project
- Project details are displayed on the main screen (to the right side of the navigation bar)
- Project details involve
  - Title, description and home page at header of project details section
  - Created and last update dates below header
  - Counts of watchers, forks and contributors, and programming language as project info
  - List of project contributors (profile avatar, login name and number of contributions)
- Clicking on title of the project navigates user to the Github repository of that project
- Clicking on Homepage of the project navigates user to the Homepage of that project
- Clicking on login name of any listed contributor navigates user to the Github profile of that contributor


All the features in this project are tested on
- Mac (OS Version 10.13.2)
  - Chrome (Version 67.0.3396.99)
  - Safari (Version 11.0.2)
- iPhone 7
  - Chrome (Version 67.0.3396.87) (both normal and landscape mode)
  - Safari (Version 5.0) (both normal and landscape mode)
- Windows 10 machine
  - Chrome (Version 67.0.3396.87)
  - Edge (Version 25.10586.672.0)


Dependencies:
- Development:
  - ReactJs: Reusable UI components
  - Redux: Run time data maintenance
  - RxJs and redux-observables: To overcome synchronous behavior of redux
  - ImmutableJs: Store immutable data into redux store
  - React-responsive: Render dynamic UI components depending on device size
  - classnames: Dynamic classNames creation
  - MomentJs: To format date in desired aspect
- Unit tests:
  - Mocha: Test framework
  - Chai: Assertion and evaluation of actual and expected output
  - Enzyme: Test React components
  - Nyc: Detailed report of test execution


Issues:
- Github API provides watchers_count different from actual
  - https://github.com/milo/github-api/issues/19 is closed as there is `subscribers_count` but this key is not present in response of Githbu api
  - eg: React project actual watchers_count: 6083 and provided by API is 105166
- Github API provides lesser number of contributors than actual
  - eg: React project actual number of contributors are 1195 where API provides 448


TODOs:
- Currently this web app displays projects owned by only Facebook; this can be made dynamic and owner of project can be accepted as a user input
- Need to work on Mobile specific design
- Project contributors are listed with their login names (not by their personal names or full names)
  - Need to fetch name of each contributor
  - Seems to be a heavy operations (To be kept in mind while addressing: Github APIs have limits on the number of api call)
- More project info can be added (number of commits, branches, releases, issues and etc)
