import {combineReducers} from 'redux';
import QuranData from './reducer-quran';
import ASurahData from './reducer-a-surah';
import ASurahEnData from './reducer-a-surah-en';

export default combineReducers({
    quranData: QuranData,
    aSurahData: ASurahData,
    aSurahEnData: ASurahEnData
});