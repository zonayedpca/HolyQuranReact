export default function ASurahEnData(state='null', action) {
    switch(action.type) {
        case 'GET_A_SURAH_EN':
            return action.payload
        default:
            return state
    }
}