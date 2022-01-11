# [Playwright](https://playwright.dev/) automation on Typescript

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

|                    Typescript                     | Node.js                                                   |                          Playwright                           |                                     CircleCI                                      |                          Github Actions                          |                       Allure Report                       |                            Telegram                             |
|:-------------------------------------------------:|-----------------------------------------------------------|:-------------------------------------------------------------:|:---------------------------------------------------------------------------------:|:----------------------------------------------------------------:|:---------------------------------------------------------:|:---------------------------------------------------------------:|
| <img src="./.docs/TS.png" width="40" height="40"> | <img src="./.docs/NodeJS.png" width="40" height="40"> | <img src="./.docs/Playwright.png" width="40" height="40"> |                <img src="./.docs/LogoCCI.png" width="40" height="40">                | <img src="./.docs/GithubActions.png" width="40" height="40"> | <img src="./.docs/Allure.png" width="40" height="40"> | <img src="./.docs/TelegramLogo.png" width="40" height="40"> |

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

To install all packages from package.json use command 
```
npm i
```

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

1) To run tests with Allure 

```
npm run test:allure
```
2) To open Allure Report page 
```
allure serve
```

![alt "AllureReport"](./.docs/AllureNotifications.png)
----
## Notifications

You have telegram notifications after running tests in CI.

----
## Examples

In a folder ```<project_name>/tests/**``` you can find some test examples.

----
## Maintainer
[github.com/leitirion](https://github.com/leitirion)

:writing_hand: :iphone: Telegram - [**@Leitirion**](https://t.me/leitirion)