# InfluxQueryAdmin

## Decisions

- connect multiple components approach advised by https://redux.js.org/faq/react-redux#react-multiple-components

## TODO

- encrypt cookies and create some kind of security for cookie saved content
- clean results cache on each app reload, or implement own persistence solution e.g. cookies
- Cookies seems to be not working in Electron App
- Support Electron autoUpdater: https://github.com/electron-userland/electron-builder/issues/3053#issuecomment-401001573
- add `APP_ELECTRON=true` to preelectron:stag and prod, it doesn't work now because of misconfigured updates
- secure localStorage e.g. with password encryption of stored data (?) see: https://stackoverflow.com/questions/3220660/local-storage-vs-cookies

## Electron

Distribution configuration based on https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c and https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3.

Check `electron:prod` command it has to be updated to work properly.

## Development

Use `yarn start` to run development server.
Use `yarn build` to compile release.

Use `yarn start:electron` and `yarn electron:dev` to develop Electron with live updates (but probably without using any Electron related features only UI).
Use `yarn build:electron` and `yarn electron` to test Electron releases.

IMPORTANT! Add Git tags on each release. Tags will be automatically turned into App versions displayed inside UI.

## Deployment

Electron: `yarn build:electron && yarn electron:prod`

Web Server: `yarn build`

---
author: Jan Grzegorowski
