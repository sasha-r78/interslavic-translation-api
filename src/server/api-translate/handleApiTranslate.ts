import { Dictionary, ITranslateParams, WordList, loadTablesData } from 'services';
import { responseError } from '../responseError';

interface ICloudflareWorkerEnv {
    CLOUDFLARE_CAPTCHA_SECRET_KEY: string;
    GOOGLE_PRIVATE_KEY: string;
    GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
    GOOGLE_WORD_ERRORS_TABLE_ID: string;
}

let isInitialized = false;

async function initDictionary() {
    if (!isInitialized) {
        const { data } = await loadTablesData();
        Dictionary.init(data);
        isInitialized = true;
    }
}

export async function handleApiTranslate(request: Request, env: ICloudflareWorkerEnv) {
    await initDictionary();
    const { pathname } = new URL(request.url);
    const [, from, word, to] = pathname.split('/');

    if (!from || !word) {
        return responseError('invalidRequest');
    }

    const targetLang = to || 'isv';

    const translateParams: ITranslateParams = {
        from: from,
        to: targetLang,
        searchType: 'full',
        inputText: decodeURIComponent(word),
        posFilter: '',
    };

    const [results] = Dictionary.translate(translateParams, false);
    const formattedResults = Dictionary.formatTranslate(results, from, targetLang, '');

    return new Response(JSON.stringify(formattedResults), {
        headers: { 'Content-Type': 'application/json' },
    });
} 