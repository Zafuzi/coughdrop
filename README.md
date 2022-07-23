# Coughdrop
A light set of front end tools

-----

## goals
- stay light
- only add what I need, when I need it
- keep it extensible

## usage
You can import all of the variables and such in your less files using this statement
```less
@import "{zfoutz:coughdrop}/stylesheets/coughdrop";
```

once coughdrop is loaded, you can use any variable I have defined 

otherwise you can just use any of the classes that are defined in the stylesheets

since this uses less, at any point you can redefine any of the variables you don't like or want to tweak

### buttons
Buttons are probably the single most important style I use in any app. So I have standardized the classes and colors that I commonly use to make things simple.

All classes follow the same pattern and their respective color variable definitions can be found in `coughdrop-variables.less`.

Example:
```spacebars
    <button class="button button-positive">This is a primary button</button>
    <button class="button button-positive-ghost">This is a secondary button</button>
    <button class="button button-positive-ghost-transparent">This is a secondary button with a transparent background</button>
```


#### version notes
v1.0.1
- patch to updated documentation on atmospherejs

v1.0.0
- updated readme to include how to import less variables
- first release

v0.0.5
- second attempt to auto import stylesheets
- minor restyle to readme version notes

v0.0.4
- attempt to auto import stylesheets

v0.0.3
- added version control
- attempt to allow importing variables into other projects

v0.0.2
- minor bug fix with publishing

v0.0.1
- first publish
