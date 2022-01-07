### Playwright
[![CircleCI](https://circleci.com/gh/Leitirion/Playwright-tests/tree/master.svg?style=svg)](https://circleci.com/gh/Leitirion/Playwright-tests/tree/master)

## Table of contents

- [Requirements](#requirements)
- [Coverage](#coverage)
- [Environment variables](#environment-variables)
- [How to install](#how-to-install)
- [How to run](#how-to-run)
- [How to write a check](#how-to-write-a-check)
- [CI](#ci)
- [Reporting](#reporting)
- [Notifications](#notifications)
- [Maintainers](#maintainers)
- [Known Issues](#known-issues)
- [Examples](#examples)
- [Maintainer](#Maintainer)

----
## Requirements

To start use with repo project you need:
1) To install all files from package.json use command:

```npm i```

3) To install playwright for tests use commands:

```
npm i -D @playwright/test
# install supported browsers
npx playwright install
```
----
## Coverage

[TBD]

----
## Environment variables

1.```URL```

----
## How to install

1. To install playwright use command ```npm i playwright```
2. Then go to package.json and add in scripts: ```"test": "cross-env BROWSER=all node --unhandled-rejections=strict test/*"```
3. Create folder ```screenshots``` in your projects root folder.
4. (Optional) Install cross-env with command ```npm install cross-env```
----
## How to run

To run tests use command:

```npm test```

To run tests headed use command:

```npm run test:headed```

TO check you code run eslint with command:

```npm run lint```

----
## CI

At this repo you can use two CI: 
1) CircleCi 
2) Github Actions
----
## Reporting

[TBD]

----
## Notifications

In this repo project you have telegram's notifications after running tests in CI.

----
## Examples

In this repository in folder ```<project_name>/test/``` can find example test - ```test.js.``` This test visit ```https://ya.ru``` and find on page button ```Search```. To start test use command ```npm test```. If test succeed you can find 3 screenshots in folder ```<project_name>/screenshots/```.

Also have some ui-checks tests in ```.ts```

----
## Maintainer
[github.com/leitirion](https://github.com/leitirion)

:writing_hand: :iphone: Telegram - [**@Leitirion**](https://t.me/leitirion)