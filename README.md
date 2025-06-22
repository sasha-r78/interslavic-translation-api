# Interslavic Translation API

An API for translating to and from interslavic.
## Deployment and Usage

1.  **Install dependencies:**
    This will install `wrangler` and other necessary packages.
    ```bash
    npm install
    ```

2.  **Run the dev server:**
    This command uses `wrangler` to start a local server.
    ```bash
    npm start
    ```
    If everything goes right, the API should be accessible via `http://localhost:8787`.

Make a `GET` request, and it returns a JSON array of possible translations.

### Endpoints

-   **Translate to Interslavic (default):**
    ```
    GET /<lang>/<word>
    ```
-   **Translate to a specific language (optional extra parameter):**
    ```
    GET /<lang>/<word>/<target_lang>
    ```

### Examples

-   **Translate "hello" from English to Interslavic:**
    ```bash
    curl http://localhost:8787/en/hello
    ```

-   **Translate "hej" from Interslavic to Russian:**
    ```bash
    curl http://localhost:8787/isv/hej/ru
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

