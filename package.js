Package.describe({
  name: "zfoutz:coughdrop",
  version: "1.0.2",
  summary: "A light set of front-end tools",
  git: "https://github.com/Zafuzi/coughdrop.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
	api.versionsFrom("2.7.3");
	api.use([
		"ecmascript",
		"less@3.0.0",
	]);
	api.mainModule("coughdrop.js");
	api.addFiles([
		"stylesheets/variables.import.less",
		"stylesheets/fonts.import.less",
		"stylesheets/general.import.less",
		"stylesheets/buttons.import.less",
		"stylesheets/coughdrop.less",
	], "client", {lazy: true});
});

/*
Package.onTest(function(api) {
	api.use("ecmascript");
	api.use("tinytest");
	api.use("zafuzi:coughdrop");
	api.mainModule("coughdrop-tests.js");
});
 */
