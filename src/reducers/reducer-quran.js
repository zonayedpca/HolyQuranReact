export default function QuranData(state='null', action) {
    switch(action.type) {
        case 'GET_QURAN':
            return action.payload
        default:
            return state
    }
}