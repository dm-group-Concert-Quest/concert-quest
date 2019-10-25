import axios from "axios";

//initialState
const initialState = {
    artistInfo: [],
    image_url: "",
    name: ""
};

//constants
const TRACK_ARTIST =  "TRACK_ARTIST";


//action creators
export function trackArtist(artistInfo) {
    console.log(artistInfo)
    return {
        type: TRACK_ARTIST,
        payload: axios.post("/api/tracked", artistInfo)
    };
};


//reducer
export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case `${TRACK_ARTIST}_FULFILLED`:
            return {
                ...state,
                artistInfo: payload.data
            }
        default:
            return state;
    };
};