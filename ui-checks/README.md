### How to run checks

1. Run `kafka-ui`
```
cd docker
docker-compose -f kafka-ui.yaml up -d
```
2. Run `selenoid-ui`
```
cd kafka-ui-e2e-checks/docker
docker-compose -f selenoid.yaml up -d
```

3. To open allure use command: 
```
allure serve
```
4. To create allure report with running tests:
```
npm run test:allure
```

5. Installation allure report:
```
npm i -D @playwright/test allure-playwright
```

### Usage:

Either add allure-playwright into playwright.config.ts:
```
{
reporter: 'allure-playwright'
}
```
Or pass the same value via command line:
```
npx playwright test --reporter=line,allure-playwright
```