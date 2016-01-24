# AngularJS Eventbrite API App
This project is a AngularJS application that visualizes data from the Eventbrite API on popular events. This application displays a calendar of the most popular Eventbrite events as well as a searchable list of those same events with links to their respective Eventbrite pages. 

A skeleton app from `https://github.com/oklaiss/angular-seed` was used to start this project.

## Run Locally

To get started simply clone the EventbriteAPIApp repository and install the dependencies:

### Prerequisites

A number of node.js tools are used to initialize this application. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).


### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  The tools help manage and test the application.

* Tools are loaded via `npm`, the [node package manager][npm].
* Angular code is loaded via `bower`, a [client-side code package manager][bower].

`npm` has been preconfigured to automatically run `bower` so you can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

This project has been preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

#### NOTE *** UI-Calendar Plug-in Bug Fix

Before using the application, a change needs to be made to the source code for the UI-Calendar plug-in for it to work correctly. While building this application, I stumbled upon a known bug in the UI-Calendar plug-in that causes events to disappear when switching to any month other than the current month. 

To fix this bug, go to line 278 in bower_components/angular-ui-calendar/src/calendar.js, and change the code to match this:

```
eventsWatcher.onAdded = function(event) {
          calendar.fullCalendar('renderEvent', event,true);
        };
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  about/                --> the about view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  calendar/                --> the calendar view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  events/                --> the events view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view1/                --> the home page view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

### Running Unit Tests

This app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


## Loading Angular Asynchronously

The angular-seed project supports loading the framework and application scripts asynchronously.  The
special `index-async.html` is designed to support this style of loading.  For it to work you must
inject a piece of Angular JavaScript into the HTML page.  The project has a predefined script to help
do this.

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.
