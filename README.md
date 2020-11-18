# Reproducalbe example for Cypress inability to test elements made draggable by interact.js

As noted on cypress-io/cypress#6161 and taye/interact.js#856, Cypress is unable to automate drag and drop provided by
interact.js.

## How to run

1. Make sure node.js and npm are installed
2. Install cypress by running `npm install`
3. Start serving the test file by running `npm run server`
4. Start Cypress by running `npm run test`
5. A new window will open, start the test by clicking interact-js.spec.js
6. The test runner will pause right before the drag and drop events are triggered, I did this to allow debugging with
   something like Chrome devtools' [monitorEvents][1] or something similar
7. Resume the test by clicking the play button next to the red "paused" label
8. The test fails

[1]: https://developers.google.com/web/tools/chrome-devtools/console/utilities#monitorevents
