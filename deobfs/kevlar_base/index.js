var ta = require("./xregexp");
require("./addons/build")(ta);
require("./addons/matchrecursive")(ta);
require("./addons/unicode-base")(ta);
require("./addons/unicode-blocks")(ta);
require("./addons/unicode-categories")(ta);
require("./addons/unicode-properties")(ta);
require("./addons/unicode-scripts")(ta);
module.exports = ta;