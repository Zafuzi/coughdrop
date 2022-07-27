Package.describe({
  name: "zfoutz:coughdrop",
  version: "2.0.0",
  summary: "A light set of front-end tools",
  git: "https://github.com/Zafuzi/coughdrop.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
	api.versionsFrom("2.7.3");
	
	Npm.depends({
		"postcss": "8.4.6",
		"postcss-load-config": "3.1.1"
	});
	
	api.use([ "ecmascript" ]);
	
	api.mainModule("coughdrop.js");
	
	/*
	api.addFiles([
		"variables.import.pcss",
		"fonts.import.pcss",
		"general.import.pcss",
		"buttons.import.pcss",
		"coughdrop.pcss",
	], "server", {lazy: true});
	 */
});

/*
Package.onTest(function(api) {
	api.use("ecmascript");
	api.use("tinytest");
	api.use("zafuzi:coughdrop");
	api.mainModule("coughdrop-tests.js");
});
 */
