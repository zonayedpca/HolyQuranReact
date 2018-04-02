import axios from 'axios';

export function getQuran() {
    const URL = `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json`;

    const request = axios.get(URL);

    return {
        type: 'GET_QURAN',
        payload: request
    }
}

export function getASurah(num) {
    const URL = `https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah/surah_${num}.json`;

    const request = axios.get(URL);

    return {
        type: 'GET_A_SURAH',
        payload: request
    }
}


export function getASurahEn(num) {
    const URL = `https://raw.githubusercontent.com/semarketir/quranjson/master/source/translation/en/en_translation_${num}.json`;

    const request = axios.get(URL);

    return {
        type: 'GET_A_SURAH_EN',
        payload: request
    }
}