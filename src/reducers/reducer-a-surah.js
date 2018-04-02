export default function ASurahData(state='null', action) {
    switch(action.type) {
        case 'GET_A_SURAH':
            return action.payload
        default:
            return state
    }
}