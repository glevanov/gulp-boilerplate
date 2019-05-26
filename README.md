# Gulp boilerplate

A boilerplate for building web projects with Gulp.

# Description
Folder structure is designed around grouping assets by technology rather then by component.

### Main stack
* Pug for HTML
* SASS for styles
* Rollup and Babel for JS

### Other choices
* Husky for git hooks
* Normalize for style harmonization
* Stylelint for linting and sorting styles
* Browserlist for providing correct target for Babel and Autoprefixer 
* Imagemin and WebP for images optimization
* gh-pages for automated deploy to GitHub Pages

# Main scripts
| Script | Description 
| --- | ---
| ```start``` | run dev server
| ```build``` | build bundle for production
| ```gh-pages``` | build & deploy to GitHub Pages
| ```test``` | run tests

# Todo
* add ESlint
* add JS tests
