// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by coughdrop.js.
import { name as packageName } from "meteor/zafuzi:coughdrop";

// Write your tests here!
// Here is an example.
Tinytest.add('coughdrop - example', function (test) {
  test.equal(packageName, "coughdrop");
});
