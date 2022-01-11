# [Playwright automation on Typescript](https://playwright.dev/)
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

| TS  | Playwright | CircleCI | Github Actions | Allure Report | Telegram |                              Node.js                              |
|:---:|:----------:|:--------:|:--------------:|:-------------:|:--------:|:-----------------------------------------------------------------:|
| <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Feveryday.codes%2Fwp-content%2Fuploads%2F2020%2F02%2Fts.png&imgrefurl=https%3A%2F%2Feveryday.codes%2Fjavascript%2F7-really-good-reasons-not-to-use-typescript%2F&tbnid=QVpUlhe4W5BY5M&vet=12ahUKEwiGroTcp6r1AhVKgosKHWJdB0AQMyhcegUIARCWAQ..i&docid=8mcHyWZw-bBrbM&w=1920&h=1200&itg=1&q=typescript&client=safari&ved=2ahUKEwiGroTcp6r1AhVKgosKHWJdB0AQMyhcegUIARCWAQ" width="40" height="40"> | <img src="data:image/png;base64,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" width="40" height="40"> | <img src="data:image/png;base64,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" width="40" height="40"> | <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAACgCAMAAACrFlD/AAAAsVBMVEX///8eiP8Agf95uP8AgP8Ag/+qzv8Xhv9ETlmXwv91tv9IUVz6/f/o6eqUmZ5JUlxwtP9OV2G7v8Itj//09PW00//g7v/t9f+ytbl6gIdjanPZ291aYmvm8f9urP/FyMrB2//X6P89SFOrr7Nipv/0+f9udHxUn//L4f/DxciYnaKFipA4lP+92f+hzP/f4OKLvP9Fmf9Xof92sP+TwP+Xx//t7e4zP0zQ0tR+hIuLkJbbUj2+AAANH0lEQVR4nO1dCXeiyhIGBEFBEcEtYiLua1yijuP//2GvqrpRNpOZe899mtDfORMEGmg/q2vrakaSBAQEBAQEBAQEBAQEBH42rEd34DvCCo6j3cpd7UalmSDwL9A7uIqm67oM/zRF3vYe3aHvAmurajJBZ381dSsk708QrDTiS9E0XYO/yJ/mBo/u1jdAQwGudGV3DMawNw6OU3ag8eiOPT2KQJSujqJCFryqwJ36/rA+fQ+sVbQNSQnruyB46vohPfouCNCqZui1HnCna0LffQJkyG1lnBjjmdX/vT/fByUNRmuTPjYbjRiFPfBUtNJDevUd0AJ6lCJ93CqKoh+j3lxDBVqzBFIAcAShm7JPKrl2btQy7IXY3QfoM5WZgh3aWWBP3TevZwNFlt1Hde3JAdxwS2C5YC1GCkleYRyeBz6V2cN699R418IRCdSBgK1dDMI0OfTyYDxrx8d175nxCsqMSRWjTrIOGoazyo6N4hlI5eiRHXxewIDUmAnl1IFLMqIAlgUSY1CAuwf274kBCk5m7siVOhA1zKPoLh2H88IrzoIFzHC+ItSBCkRLS4bWDTkUiOMedQ1B3ZdYZQ5YVxED9ktkmIlm1Ey0hJm4hw/w2/r0KXROtpRdV6YspEDn5PWB/XtiFIG6A31i1DVcjaYlQpe4BOdFqjgTsUBMdqcsELtNhmEgJrKd2VhB+M/CiZ3OZhKVkQj//wgwYrkdKKo6JZ36kbNTXYSwdzHGVCfTZiVdUeRYdq6owlmR6ryHo3KdvOmt1zGecMJHEUJ3HytUcFkVJph7F07dZwjAkdPltBkNcEJMb2ZcIRCij1PYWjFxtIiMKv1HdOgboYE5JmUfTaTP9lhMIYpOvsRMp+qcVWnWGlvj1qy0ojBW7z+6Y98AzR1xReVh4KKwIrGdCCP+CCXG1600UTk8ukvfBq3jirGnY3HiqiQ84b9Bs7HH0p3RR0O4JH8NjGg/sk7MDqPdavp6/Ez9zUrQBsvf/6POPTduyYD4YVfF4nYYyuruXrFicXVts8qjT1NEDy+p5YKdcjMgujrK0oLMRF/bTPO3dACpS8YVfY38Fk2TWWm7Jqc1ITmGMm9DDObOsUHqErnNGYUVq2PQslqzLebf9VSyADOisuaWsE1Qoja5C36JulhFXY/E6SqI1hYDXnccuwqrP/VbStQ6KPdqbH8wimzlSWS0TXG0Rm1mAwatVo5dtQfjwufVGNbYJmcTaURddERiSawW9zYaMDpjUz19VZYTbfrQRs2Xk0IWFmf+Q001TVTEIqevYAyizt8I2myjbSxJKmh5Ky5Dv26v31agNJVrYQVivFdXY6mJZvh2sAfXyDflZ41Ut0cZZi1X2g5ntI9rWvc07VuUyYsImLXTZKVExdmRKtm1EmsDig8zB1jzmKulPkWqj2WenOJ+FGEsUqK4iboNmaOlT1gScOg1GXofvE2P2Nxjm0a0rCAnYNRhbCCTiwsUKk00FuqHZE2BFQWV2hpHrBICl5IFuNJMBeU2wjYFiYpVEnb4h6MYVmW/y4rOMnfamC2f+CB5QlakGV91fIXaY8bj9RWZo9HbVOO25MfjSh1I2ohLXQ/X8ci0poKxAgMad0PwKkZcsYI7nLAgt1KHGAfrKa/WGZGcceZYfuU1xEpmRuOV2mjcJUHjsU0/4OciRp0UWVaBo/UaH7zGLOz1GuQ3ZE4qw9Fc5Z6S1AUqryGz9mQFCFimot58tua1zmykqnt+EEvOlFxlAJLUWSsQMOae9a9e2gH95kgjLKotJtrcyZn+YCSpQxdOTuRAArS0/ehFGHLEJawJBkPN1XhNU2dh4ckuWv3fwiP72FW0Wjuahxqv8lfok6JOmmFaZHWTqRnl5uIyNkPfZXVLpszy+NaANHXSFv017YOvtkMrqqeG4jHW5hXdwZwN10zqJMwLy5rqTvc7WY3njK8oKdc2LmuTu7L3LOooL8zDBxQuOSuF2aCloGF0oeWw0CeTOqm3h5AsrKl4HWdcB9ZjFGmTOd/4w5FNHTgbh6muqIq8P96fYA3bTEu5coVD3KMOYI1b46+WKFrj3pdtfio+oU7gcwjq/jEEdf8Yn1L3J1osr5qOZh0yJ2NaxdeVrLm7j8Z9bqzg/VAoFw7FIJf8zbSstPi4oPN3x2qJRWQ3WOtyrVwuFArlcq3Q/297+ZTAtOU+ebAvh+EEFaSssuL6ZqFWQJTpby2Hr+Yd48xMIlzgbxjT3JWrsVK79NT0rAacgdgVDvQX/uQsbyJRjUlicVMRmVNHayS01dhhjVjqBVkBilyNv192dqS93HFXvL7OjoMqEyNv8lzTEvf4eGyhnBVubQJUeuW8xbEtLSF2mO91o0xh7asWL2I6lIG5KFM92C/nbiEtVndFijbflVT9K879x2rncLiW422acKiWtyxAC4XqNmRvs103bBO1c8dyoZa0HI08il0DJyNG3KsN1Iw3TtCbUW+COUaHJOkFW+ioZGf2fjA+cBJ/xwYgBmbp8odRbPZ/ViuU0yn393IOjSwVQOgyvSYGaGQkzYgGa0b6q8jfQmm1EI1MkpDQXJUmMtCr6zX5Y93E+k2Uv2Ot1sBRWKshkX0mi71yDQHjtZYOHsBQlPM2KYY4qnxhMa+vk0DpH4ArPjRnrEz2nUVd6P+mfThsm7tZMUTAl3zxskPpvVbrw+ZQo6HJpW4N8T5CSF0c/RFfx850XUBKzgqIo3f+erH1O+IgdF0SrcbHfiV/bWEDYWGz0FQzXtXZwtLYL/y6Mfp1uUx5XoHRRFLbl7X4mxQhmkiNzVxGE3EUlVTN0jq5/oti2HjAGuQxhk0CMydyKnMSX3VYwsxJtE0Ph2vOhS58WdZtPL6T1xL341o0JRELzYDL3EWwKRQpLzyl/zqmV6T/qi21XJNliQ8zliU+0F7ehyuiyCYkFN1la//1jCoxlhfGoIz+gAzm2jG5YubyGTGKLpRdljz1trXCDbVt3rLr92BtZXpPFsqem/Z+GfoFjMtA3sq1Qr7WX3+OcaM8deXVdLv+xM1tNo7bwvYo3mqURr6DAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYFnRmXerm+ue+2Xc7qJt6nQ9sS3EUxePrv1ZvPJ2RuGL3/W7rngXUwD0PH4/vDXPDy1qYYf64MLbdt8G8GL/cnNfdvxMk90q7EfqPqr+xddfhZMzM7b5rwYhD/7eXH9FufBgn+qm5w6u5q8/sW5f++u7dsZMgyYD9qx3UVKmp8fC3tJ225G37vGv6RuYWZcQJgb7czj3wgnxzlFditdABtilXO37Vy65zOKTZy6LpOkzRlbAnWb4fAt8+4vvuX7t5vXoZ3Hbj20F3DrbvKhePP2sM1HAJw/tYd173ZmOI/29rGY253o7uLXwDSYghvCR98ZADykjglPnah7MejbTAyU1Be/PgBd+ZKh0yog0VUjHP9Vc2AbA/yl8Cm+DXc26cQSdgdhq4th2AZ7muX4Z7iz7XvhGdMcDJ7GnizsRXQXLOjCZBLkVSpzs3qqVJCfur0EY7mpDIm6CdP9HYdR59S90yL+EzC0jbr0Fg76pdnpet55UsFbn9r2kN8azXDlEhK8MDsbbzMxhrjj+/6bV+mwLtaN3xXP61afhrqLndQ5Q+M6+CK6znHQDBuOk6bOoUYTI20jO2YFNAJzXs7GhB1kZT0JXbfgV3sm3RrUCG58BwdAxaErLxkPeCh+23UJrepiEX6VCHXnCHWTIWKZQZ1NctA2h8l7n+g7d9j5iz2PnrtD3ZvNdOpvE9Wpz57j+0h3lXr6RFiS1A0HthMOuGzqYrouIXW0czZTHl/dxMuHJpE0sWMm/A514Q+wMJEnnwnsC1F3Np1l/WlGq4S6Dvvqnc72b37kDnVRC5ugjs50uZMTwdIZgn1usx/lJWbJ71HHeebbGHXS2wR8d/95fJo6/8abf0HdHanzQD+CFTUc26Nr/kTqbtSlpA5wOlcd42mG7cZh/fo76mzmnER1XT2l685m54xYkpZbxsOKO9TNuQe9ZLouQZ2EyvC39Cz4TSMWqMvQdRszHIRx6pYmftGKw6WObtAxkhFX1WQCwr7tmxHzXm6/CiGk7mSQB+0xSc2grmJkOEEPQsWxh57kDRl1ngdjZW55zAmFITc/0ec4dW2740mViR/6dWfU75PknX1uGDyHfNqJfQFtd7rwFIzpnz32GHxa1Tyzh17MC/RmyYQvRl0VowrvYqQM+ePQ9Q3bMQ0fheZtYJq2Y5sGd+7rtmEMMHSIZ04837b9wbBD0YTvDAe+b/jJGLg7CLNRkwHKsdcxTGg34NZiCDp/4LB74kNN0/h1olbOi2N0kCyIJqgp81E6EIG82MbzjFfEvLqsskCxUg/Bv6D3Bp9hu6nzsJVtveGyepbe6KJ5XTpflsNUHBZeAiTW2Q9xXiwvwyvDJ7j1nDUM4YW94SqDnccn4DPPi8tykZ2HERAQEBAQEBAQEBAQEBD4yfgfLhENtFM5ToYAAAAASUVORK5CYII=" width="40" height="40"> | <img src="data:image/png;base64,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" width="40" height="40"> | <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUspeD////l5ebk5OXm5uf4+Pj7+/vu7u/19fXx8fHq6usAnd7z8/Qko+AAnt8SoN/t6ef++vhIrOL59fPP3Oaw1u/s8vX2+vy73fNuu+d+v+fI4vOUyevQ5vXB3vFitOOLwOKl0u/a6/fZ4ujj8PiZze16v+iz0eXE2ehRsONjtOKbx+Q+qOC61uja4OSOw+TERTTNAAAO+0lEQVR4nOVd2XbquhLEtgAbo8EYkjAFSEiAQHb+/++uPOJBHtUC+9x6OKzTay/iQlJ3qaxhoGnaUEf6kH8aSB/zj7GOjERUrxk1C6OoLGqVRUdxFE1aRo3B/wdDQzd8hnr4JLrRMqrnogFv5EVdxhj/cPiHwz9ZELWCfzsK/y3S9QlM1Aijg+FwaI7H4yn/5B8W/7D4J1TUch3HsSbz8/vhsP9e+tj9LJerzeFwOn8OR45rWVb4Dabwe5tEE88wjaID/gP4P7uRaSLpKGKuph1/98vZgBDKgVPwIpQMZqvD+ogYGyd/9rDpdWOSj6ImUYNHB/lBIj8kvSg6X5czYnu8BiXwqBLMeX7wboyyQ7L14EP6NIrCt6HOmLndXGgVtzRPTOjuekZMQRuGXVZ+HPojw7Lc43XnsatLLtWc+OdwdN2GI65qHILmUnbe30gbdjFLSmfXI2wuBRt8jnb8GlAJdnFTktvhkzHYemgE7WKEA8owGkfZZDGz5emFJCm5nJD/fEYwJI1wmBlGZRRlogMZWlFUd48rAtB8KZJ49RnWkBa0DNBqwdgJrvmSJO2fX5hqIZterhCjT8yRzNaa2S7pTKPoQK5EuKMFpmroRRxPriVVONLVonGZP1CV/HyO9LZuXuZhqoWlvd9U8/M5ktkvg5o9NRLW8xlRNP5yHOlu7tZuw0w0Mw5rCzjnZakqvwg5ktXYajBlSo7DVrkUsYWK+lDKEZ9YfamWzKVt6iHvoI8YgBnQ3UurethC07j7R3bQOzBZtBBwzXUpm9+ews8DufzLEqjWpU2rBbs+KoOKgOl7WdeE8NqmlyeMwCTsVUMBN2gkiJztc0ZgEvR2tJoIuEY+De+hz+Y38OYc60qp1tZr++kCQQ57o8Zre509vYdGoEsL1RVwxV5bJup+yjhM0MC3Fwfaa3t/fo5JAuOjQKrJeG1vHRmCMTDdMkivbWE/m1Ee5JfV0jR1Mo2z71oL+uBVA6pabJ6sY4pgv2kFUq2h17bpZAt6sBesjdeWEUROdwlyiic3et6xsHCMa3htfx0m6I9FWa9t0WmCnOLWlfPa3jtYJtKgcybhtbnzjrfgwFc3KalmNvLajh0tEyngm4TX9jxHpgnwrrXXtusFQT4UN6zKaxNmGrbvQx/1wcVNcaYprBbOqftZJoZ9bOG1HXtEkCfU5l7bqDueRR3gpZOUajW8NrbqzSAMQA/NZk/ot0991Id9bOa19aqL+sCzJl6b+9M/hrwquhmvzSz02tipZ4MwAD27Wj2vDaFeEuQC1Smsh2mvjS172Ec9+Pm0htc2+uj8nLAI9BPlM02+Wjj9mFGIgH9YDa+NXfs5Cn3QX1TttU16TJAnG6vaa9v0to96oAtW5bX1akohAJ5UeW19rRQR6B8r9drMeW8rRQT6Uuq1OX2xZoqBN6VeW3+L/R3ktcxr6+OcIguu3Qq9NvTZ51oYg44LqwVb/QeaMDI0hNXiX89rYYwir826/ieakDfiu1Pgtf1HCA7whQm9NrT+T+QZD+QTibw21v9qHwHv2X0GbJqRLfXSkWrv74KWXESHA1Jm2ms7dKGTYmpfVofF4bCTyutkawrq4fPNC2wPNmsthFRWwN9u3ms7PrmTYvu2+dASWMhQJEmvLdwlsn9mE2IySNPjeJXpp3SRm1uwG9jjNgXPLKssPQ8yT4R/tPDMgqgNrfmT8gym5HsroMch9QaTvGa8NvfvGZ2UZ87dm5ieLEP65qS9NufyeIbYni1eC/lpmtyXf7NUtUAvj55WeLnlWEKPP5zkuGGp2RN67Ps0nltyqTOHD7kfnZ6TXpvpPHDuywffz7qKHseb3I+OD07Ka3tYrcD25a1s8N0h+aN7a8ES9fBBw5DLskP54EtA+o+lvDbJHlHvL1L8Vzn47pBWkeRjcvfa1FtQdQffHdJTHXzV7tWCKV4AxQffYtSIn6ZJF2i8TDD8p/Zsi8HXS0N6XHcDPJJ299rOyhhigoWquhIAmYG83r02qalYMbxJQ4GqrgRAZqC/KPbaVMwNOb1ls9ySAsAT4SuLvTZw2c3nRMu3prkliS1AgcYrFnhtpmnJf1vqmynZ1dQthYBYTYAvjhl6baCplPLK0Dx1ZgHzLHG1gEulniyTpyc9rwhhv4YMnRPMMKye8tUGzJIX+uEx5LnUgvCCuSxrXRnygJnq0BMLqoUr/4t5cyIwegCqO3yqAwu8NldyDQ2vfCCD744voGGzZ4HX5srpbgrafD6AJgJ46Y5HfqaRsl7JOzQ/sBcMfHYR5FIZUwvfJEu7CECdlJf8kOFr+59MCUGwt2B4Fnht1qR9ebVbzYwqAPgWzLJMnksl1gn57z/AAdVJOZBfD1H7zb7+OyxwgPEb0MBr0yUYwudR0NWDNPTa2s/F8JcChoDLsO1hkEslGM4UMAS03+UZeoc2QANyPYHPcDgcbWWmFjJWhRCQewVsczjxlPdZYrrJZQMw4PjxTKPLVouBNxRhVQ3M7D4EDXcFyR1+gTHcxFcD8Unv8NvQNIeym0jsb8BmhPU1w3VtUktzPGD6BcURwidNQH5uEYGSbxgPCrSTBnML/q0jiG/F9gViPIK+QAnmh54TBWMa+KfgSwJ2mTL+ibw2qNcWmA4kLZtv2CskVkBeWxIUy0yoZBcJZXD32kA3VVLSPrECL5igi3HotQGv2sP2qqV9Crz5ka6jNzPgS76w/d3GwJEuzBmQj4ihgjPLsL1rzhH6Zbvtv12zOKYqXuNzjk0LJPSr6JsVeG36GHTGcgfn2EjoQG/4wBcWr2tTtVsG202MHOgNH7wcxuva1O3Bpw2mj9ALs/CVRevamMLtMpjW7angGz54KtVGerDqS+VCfTyo2YrgHYmO7qug1a5rq2nlgK/puWnhuraROQGaXRSgnvcPPPf1Vus7w5Hvtak/7oPWYQi+xJW+scQe0nela4TxpgZD8Cewj5PEHlJoRZj9Y9XJRsEW3XgPqWlalqt2rX6NRgQ/UwXvXE5taoU7SlTvzSNVBEfgux/xNThQKdoV9Kt2sb5/zEEZ4DcL0LmuJfeQvijejoArGCo4ciTa94TCa8EV712rqIkKOikf+kEuja5rV3xiRMW7VPhOSra5PaSK9wWRUi8VfvrmqYxoD+nEGg1HllrhVtGIAO8Vsn/uWxuOxpNJ4LUFJw6oPnCAlHga8Lsh6C/KnTigej8+3j2yk2IL5U/gUb0TuHiFGPyJHHjjxqdGeF5bINxUd1N/p9WjOuk5UKOx1+af14ZUHxthF/kZCnrP/c7SxAk8yjchFjUi/FGN+I8Jz2tTfhxdQSMCrkUMQf5lzmuLLklXfX4LXgkZgs/cvM7Cc6mvvPUUQ+Vn8AhnwuAGTfp49vSZe8p3A4tmwuDD35dP9/PaRqOROZlMTP45UX9gmy1gCF8qTpyMxUkNR3evLTztGl4fZv/4IUdQwUZ5reRuBOW71vPGIrji51PRkrsRlJ+tQLMjUUExzJxYHqqb8MNV3ojZdArusdGDa/kmm2Ulvbb4bgTFxmluA4OCY/BQxd0I6kdialERvJfvb+AuuxsB4iyDcpDEUhTwSSmeZS+3iry2cSByhg84Vt9/6xUCfFZBT5p/UaB/9mXKa7vfjYCA/2YeeBYtfwe/kAhfmJa8G0Fws5yhM8X2t/ccg2C6v4T3EEOjGyXO8+bixgpFTijgHnFqub1bvH0N4N2ZlRtItUCGZry2+GY56xFnXmOq4hZs7819nXtI2V8XTjJtAX+jWa17SNHzjzJtA7xzIqmWbMPYa4uVG/8v6LaOh4G+xFLNsqYCry15K1kfD2cnb03uIe1hP/XNmQb3kPbvJg8vjxbeQ8q5erT0pIDrxMnQDWBvWUKqFXht6XtI+3V+OZ9Zx/eQ6oJqgQzBvdx9YujvjkHpe0iRwGtLCbhhn4YimaalWqHXli7+b72hSM6ZK5Cq7yENOmxfblslC1Zya3VJG6p/aQoDnmWyUk3gtU3vyi0p4PpQ+PHFtfIsphGL4jud/ehL9xniG8pc61h9D2lySD77PoFKYO8qOSMwZ0ru5U7fQ5oScB2/xQsPXk2BVCvx2kIBd4+ydacp0rn/xj4j1VCp15brsF2maJ+ZUKqVeW0CAdfdyk8+mFiqlXttOQGnvXeUIvl0CqRaudeWLf6G4Xayo2I+BoukWoNq4c0aebSDGRXjz/Q7mNJqUdqGfvRD8gImcODbKyuWasVe27RIwLnHbgk4fBmXSbVqry0ScInmHF06NNOgP+VSrdprEw7J785QtDduuVSr4bUJo3/dyDeYvgtdtWqvrUrAIW2r4nVKY4KDOUOhVBsHUg1lpVoiWlItDEH09fmDkSw5lwKp1tBrE0ad/XMpYntR6Ko19doS0XEiys7PrIz0dtRiUZZ+sqZem1EShX85XRPY3uREmViq1fXahAJO09zTcxIOvX3k6kKNalHqtRVE2eQJzYjJfigQZWKplvHapkLpUxp1zoMHcySzo5N4pKlQaYqiIq8t23CiKGKbR3ZV7B/OlGuirFRr47XFgy8XZZ8r+0EcMf1DVuXga+u1lUWPS/IAjphu/jGRKNOLpZrYa0MFUi2ImoLohH1cVLcjJj9zlniGtFQTR0u9NpFUi6O6ILq9qGxHbC+5CC0TZUXRRl5bRXS+U9WOvEC8VIkyEK+tSMBFUT/nwK9Ro3TzoqVE2bRQqpVEpTJNHHXQ9QZbPDC5vDfNKQWZpnW1SEcZ267AFuNhgvd+emlUFyS9tlrR9Q+RJ4kpXn24UXqpFGW1vLapOQ1E2XTqa53pNJA+jaOmY74vZW5+x95FdGvXNTN/LfzfVtFC5V1fwKWjGvrdz0gLlpinlpl3yWUzUQbqtdUckog5r+u/m9eWNWnyf0jo7OtsMBZ+r6DGNRp8bb22JlFm/F5XM/7kZc3JqXmLhWff13M+KYoTaOO0Kvbamgu4VDQUTw5j+sf6sLrcKCE+1RiUg0dmu7/raR4JrbqirDha6LUVSZZGAs4URv3mZGhy3K4X1+vf1+bvb7/ffy3etud5cKgKS31DXVGmzmsrj8avCOJogrfF/GHGW5Y5wZOMtRrySzba2GuTjhYLLbEoayXVElFlmSYdjca+EWSEcfuc0jjT/A/nu2Dt4d30mAAAAABJRU5ErkJggg==" width="40" height="40"> |<img src="data:image/png;base64,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" width="40" height="40"> | 
----
## Coverage

[TBD]

----
## Environment variables

1.```URL```

----
## How to install

1. To install all packages from package.json use command ```npm i```
2. Create folder ```screenshots``` in your projects root folder.
3. (Optional) Install cross-env with command ```npm install cross-env```
----
## How to run

To run tests use command:

```
npm test
```

To run tests headed use command:

```
npm run test:headed
```

TO check you code run eslint with command:

```
npm run lint
```

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

In this repository in folder ```<project_name>/tests/**``` you can find some test examples.

----
## Maintainer
[github.com/leitirion](https://github.com/leitirion)

:writing_hand: :iphone: Telegram - [**@Leitirion**](https://t.me/leitirion)