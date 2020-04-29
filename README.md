### Playwright
[![CircleCI](https://circleci.com/gh/Leitirion/Playwright.svg?style=svg)](https://circleci.com/gh/Leitirion/Playwright)

# Table of contents
- Maintainers:

  [github.com/mikementor](https://github.com/mikementor)

  	
		
  [github.com/leitirion](https://github.com/leitirion)
  
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

# Requirements

[TBD]

# Coverage

[TBD]

# Environment variables

1.```URL```

# How to install

1. To install playwright use command ```npm i playwright```
2. Then go to package.json and add in scripts: ```"test": "cross-env BROWSER=all node --unhandled-rejections=strict test/*"```
3. Create folder ```screenshots``` in your projects root folder.
4. (Optional) Install cross-env with command ```npm install cross-env```

# How to run

[TBD]

# How to write a check

[TBD]

# CI

[TBD]

# Reporting

[TBD]

# Notifications

[TBD]

# Maintainers

[TBD]

# Known Issues

[TBD]

# Examples

In this repository in folder ```<project_name>/test/``` can find example test - ```test.js.``` This test visit ```https://ya.ru``` and find on page button ```Search```. To start test use command ```npm test```. If test succeed you can find 3 screenshots in folder ```<project_name>/screenshots/```.
