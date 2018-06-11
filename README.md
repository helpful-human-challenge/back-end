# Back-End for Color Swatch App
## Helpful Human Interview Challenge

This is a REST-ful API that stores color swatches in a database (using MongoDB).

[Deployed Heroku Backend](https://color-swatch-backend.herokuapp.com/)

## CRUD Operations

`POST /api/v1/color`
* This route will post a single color to the database with `hex` and `colorRange` properties.

Example:

```
HTTP POST http://https://color-swatch-backend.herokuapp.com/api/v1/color hex=#ff3333 colorRange='red'
```

`GET /api/v1/color`
* This route will retrieve all color object in the database

`GET /api/v1/color/<id>`
* This route returns a single color object with matching id

`GET /api/vi/range/<color>`
* This route will return all color objects with the `colorRange` value matching the requested parameters.


## Tests

Tests cover all routes and `Color` model:

-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |    95.83 |    81.82 |    86.36 |    95.83 |                   |
 lib                   |      100 |       50 |      100 |      100 |                   |
  server.js            |      100 |      100 |      100 |      100 |                   |
  utils.js             |      100 |       50 |      100 |      100 |                 6 |
 middleware            |      100 |      100 |      100 |      100 |                   |
  error-handler.js     |      100 |      100 |      100 |      100 |                   |
 model                 |      100 |      100 |      100 |      100 |                   |
  color.js             |      100 |      100 |      100 |      100 |                   |
 route                 |       90 |       75 |    76.92 |       90 |                   |
  route-color-range.js |    91.67 |       50 |       75 |    91.67 |                19 |
  route-color.js       |    88.89 |      100 |    77.78 |    88.89 |             15,29 |
-----------------------|----------|----------|----------|----------|-------------------|
Test Suites: 5 passed, 5 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        6.021s, estimated 27s
