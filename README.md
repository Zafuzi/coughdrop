# ENSO

## about
Enso is a lightweight set of front end tools I use in my various projects.

## goals
- stay light (minimal bloat)
- keep the cruft down
- only add what I need, when I need it
- keep it extensible

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
v0.0.3
    - added version control
    - attempt to allow importing variables into other projects

v0.0.2 - minor bug fix with publishing

v0.0.1 - first publish
