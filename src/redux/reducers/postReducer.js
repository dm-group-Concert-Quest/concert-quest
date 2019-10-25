import axios from "axios";

//initialState
const initialState = {
    artistInfo: [],
    tracked_artist: [],
    image_url: "",
    name: ""
};

//constants
const TRACK_ARTIST =  "TRACK_ARTIST";
const UNTRACK_ARTIST = "UNTRACK_ARTIST";
const GET_TRACKED_ARTIST = "GET _TRACKED_ARTIST";


//action creators
export function trackArtist(artistInfo) {
    console.log(artistInfo)
    return {
        type: TRACK_ARTIST,
        payload: axios.post("/api/tracked", artistInfo)
    };
};

export function untrackArtist(band_name) {
    return {
        type: UNTRACK_ARTIST,
        payload: axios.delete(`/api/tracked`, band_name)
    };
};

export function getTrackedArtist() {
    return {
        type: GET_TRACKED_ARTIST,
        payload: axios.get("/api/tracked")
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
            };
        case `${UNTRACK_ARTIST}_FULFILLED`:
            return {
                ...state,
                tracked_artist: payload.data
            };
        case `${GET_TRACKED_ARTIST}_FULFILLED`:
            return {
                ...state,
                tracked_artist: payload.data
            };
        default:
            return state;
    };
};