# Interslavic Translation API

An API for translating to and from interslavic.

## Features

-   Translate from dozens of languages to Interslavic.
-   Translate from Interslavic to other supported languages.
-   Fast and lightweight.
-   Ready to deploy on Cloudflare Workers.

## API Usage

The API is simple. You make a `GET` request, and it returns a JSON array of possible translations.

### Endpoints

-   **Translate to Interslavic (default):**
    ```
    GET /<lang>/<word>
    ```
-   **Translate to a specific language:**
    ```
    GET /<lang>/<word>/<target_lang>
    ```

### Parameters

-   `<lang>`: The source language code (e.g., `en`, `ru`, `pl`).
-   `<word>`: The word to translate.
-   `<target_lang>` (optional): The target language code. Defaults to `isv` (Interslavic).

### Examples

-   **Translate "hello" from English to Interslavic:**
    ```bash
    curl http://localhost:8787/en/hello
    ```

-   **Translate "hej" from Interslavic to Russian:**
    ```bash
    curl http://localhost:8787/isv/hej/ru
    ```

### Response Format

The API returns a JSON array of translation objects. Here is a simplified example of a single translation object:

```json
{
  "id": "8364",
  "isv": "privět",
  "translate": "hello",
  "original": "privět",
  "details": "interj.",
  "ipa": "prɪ'vʲet"
}
```

### Supported Languages

<details>
<summary>Click to view all supported languages</summary>

-   English (`en`)
-   Russian (`ru`)
-   Belarusian (`be`)
-   Ukrainian (`uk`)
-   Polish (`pl`)
-   Czech (`cs`)
-   Slovak (`sk`)
-   Slovenian (`sl`)
-   Croatian (`hr`)
-   Serbian (`sr`)
-   Macedonian (`mk`)
-   Bulgarian (`bg`)
-   German (`de`)
-   Dutch (`nl`)
-   Esperanto (`eo`)
-   Old Church Slavonic (`cu`)
-   Kashubian (`csb`)
-   Lower Sorbian (`dsb`)
-   Upper Sorbian (`hsb`)
-   Interlingua (`ia`)
-   Spanish (`es`)
-   Portuguese (`pt`)
-   French (`fr`)
-   Italian (`it`)
-   Hebrew (`he`)
-   Danish (`da`)

</details>

## Development

To run this project locally, you'll need Node.js and npm installed.

1.  **Install dependencies:**
    This will install `wrangler` and other necessary packages.
    ```bash
    npm install
    ```

2.  **Run the local development server:**
    This command uses `wrangler` to start a local server.
    ```bash
    npm start
    ```
    Your API will be running at `http://localhost:8787`.

## Deployment

This API is designed to be deployed on Cloudflare Workers.

1.  **Configure Wrangler:**
    Make sure you have `wrangler` installed and logged in to your Cloudflare account. See the [official Cloudflare documentation](https://developers.cloudflare.com/workers/wrangler/configuration/) for details.

2.  **Deploy:**
    Run the deploy script from your `package.json`:
    ```bash
    npm run deploy
    ```
    This will deploy the worker to your Cloudflare account.

## Acknowledgements

Using dictionary from: [http://steen.free.fr/interslavic/dynamic_dictionary.html](http://steen.free.fr/interslavic/dynamic_dictionary.html)

