Warning: This readme was generated by Claude with minimal proofreading. The plugin has had little testing so it may be buggy.

# Amazon Price to Bednets Converter Chrome Extension

This is a Chrome extension that converts Amazon prices to the equivalent number of bednets that can be purchased with that amount. It replaces the prices displayed on Amazon product pages with the corresponding number of bednets.

## Features

- Converts prices to the number of bednets that can be purchased from the Against Malaria Foundation
- Observes changes in the DOM and updates prices

## Installation

To install this Chrome extension, follow these steps:

1. Download or clone this repository to your local machine.
2. Open the Chrome browser and navigate to `chrome://extensions`.
3. Enable the "Developer mode" toggle switch located in the top right corner of the page.
4. Click on the "Load unpacked" button that appears after enabling Developer mode.
5. Browse to the directory where you downloaded or cloned this repository and select the root folder.
6. The extension should now be installed and active in your Chrome browser.

## Usage

Once the extension is installed, it will automatically convert prices to bednets on Amazon product pages. Simply navigate to any Amazon product page, and the prices will be replaced with the equivalent number of bednets that can be purchased with that amount.

## How It Works

The extension uses JavaScript to locate and replace price elements on Amazon product pages. It extracts the price value, calculates the number of bednets that can be purchased with that amount (assuming a cost of $3 per bednet), and updates the price element to display the number of bednets instead.

The extension also observes changes in the DOM using the `MutationObserver` API to handle dynamically loaded content and ensure that prices are converted on the fly.

## Disclaimer

This extension is provided as-is and is not affiliated with or endorsed by Amazon. It is intended for educational and demonstration purposes only. Use it at your own risk.

## Contributing

If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
