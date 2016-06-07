// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by katana.js.
import { name as packageName } from "meteor/katana";

// Write your tests here!
// Here is an example.
Tinytest.add('katana - example', function (test) {
  test.equal(packageName, "katana");
});
