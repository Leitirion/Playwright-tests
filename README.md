# [Playwright automation on Typescript](https://playwright.dev/)

## Table of contents

- [Requirements](#requirements)
- [Coverage](#coverage)
- [Environment variables](#environment-variables)
- [How to install](#how-to-install)
- [How to run](#how-to-run)
- [CI](#ci)
- [Reporting](#reporting)
- [Notifications](#notifications)
- [Examples](#examples)
- [Maintainer](#Maintainer)

----
## Requirements

|                                  Typescript                                   | Node.js | Playwright | CircleCI | Github Actions | Allure Report | Telegram |
|:-----------------------------------------------------------------------------:|---------|:----------:|:--------:|:--------------:|:-------------:|:--------:|
| <a href="url"><img src="data:image/png;base64,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" height="40" width="40" ></a> |         |            |          |                |               |          |

----
## Coverage

[TBD]

----
## Environment variables

|  URL  | Env2  |
|:-----:|:-----:|
| [TBD] | [TBD] |

----
## How to install

1. To install all packages from package.json use command ```npm i```
2. (Optional) Create folder ```screenshots``` in your projects root folder.
3. (Optional) Install cross-env with command ```npm install cross-env```
----
## How to run

To run the tests, use the command:

```
npm test
```

To run tests with an open browser, use the command:

```
npm run test:headed
```

To check your code, run eslint with the command:

```
npm run lint
```
And other commands in scripts in ```package.json```

----
## CI

You can use two CI's in this project: 


|                                                                             CircleCI                                                                             |                                                                                          Github Actions                                                                                          |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   [![CircleCI](https://circleci.com/gh/Leitirion/Playwright-tests/tree/master.svg?style=svg)](https://circleci.com/gh/Leitirion/Playwright-tests/tree/master)    |     [![ui-checks](https://github.com/Leitirion/Playwright-tests/actions/workflows/ui-checks.yaml/badge.svg)](https://github.com/Leitirion/Playwright-tests/actions/workflows/ui-checks.yaml)     |

----
## Reporting

In this project, you can use Allure Report with commands: 
1) To run tests with Allure 

```
npm run test:allure
```
2) To open Allure Report page 
```
allure serve
```

![alt "AllureReport"](./resources/AllureReport.png)
----
## Notifications

In this project, you have telegram notifications after running tests in CI.

----
## Examples

In this project, in a folder ```<project_name>/tests/**``` you can find some test examples.

----
## Maintainer
[github.com/leitirion](https://github.com/leitirion)

:writing_hand: :iphone: Telegram - [**@Leitirion**](https://t.me/leitirion)