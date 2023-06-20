# Garden Engine Editor

Visual editor for [Garden Engine](https://github.com/JonnyOrman/garden-engine).

Can be run as a web or desktop app.

## Web app

Run as web app only with `npm run dev`, then navigate to `localhost:1420`

## Desktop app

To also run the desktop app, run `npm run tauri dev`.

## Running tests

Run unit tests with `npm run test`.

Run feature tests by running the web app with `npm run dev`, then run the tests
with `npx playwright test`. View the report with `npx playwright show-report`.
