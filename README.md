# Currency Converter

A simple browser based currency converter built with HTML, CSS, and JavaScript. Choose the currencies to convert between, enter an amount, and click **Get Exchange Rate** to see the converted value.

## Features

- Converts between currencies listed in the dropdown menus
- Updates the country flags when a currency is selected
- Fetches exchange rates from the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api)
- Uses [FlagsAPI](https://flagsapi.com/) to display currency flags
- Runs in the browser; no build step or package installation is needed

## Run locally

1. Download or clone this repository.
2. Open `currency.html` in a browser, or open the project folder in Visual Studio Code and run the page with the Live Server extension.
3. Enter an amount, select the **From** and **To** currencies, and click **Get Exchange Rate**.

An internet connection is required to retrieve exchange rates and flag images.

## Project files

- `currency.html` — page structure and currency converter controls
- `currency.css` — page styling
- `currency.js` — populates the currency menus, updates flags, requests rates, and calculates conversions
- `second.js` — currency codes and their corresponding country codes

## Exchange rate API

The app requests rates using this URL pattern:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base}.json
```

Replace `{base}` with the lowercase code of the selected **From** currency, such as `usd`. The returned JSON contains rates for that base currency; the app looks up the selected **To** currency and multiplies the rate by the entered amount. Rates are updated daily by the API, so they are reference rates and may differ from a bank's or exchange provider's rate.

## Built with

- HTML
- CSS
- JavaScript
- [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api)
- [FlagsAPI](https://flagsapi.com/)
