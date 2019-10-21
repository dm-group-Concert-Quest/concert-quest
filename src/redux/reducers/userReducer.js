import axios from "axios";

//initialState
const initialState = {
    userId: null,
    name: "",
    username: "",
    firstName: "",
    city: "",
    state: "",
    loading: false
};

//constants
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

//action creators
export function getSession() {
    return {
        type: GET_SESSION,
        payload: axios.get("/auth/user")
    };
};

export function registerUser(newUser) {
    return {
        type: REGISTER_USER,
        payload: axios.post("/auth/register", newUser)
    };
};

export function loginUser(user) {
    // console.log(user)
    return {
        type: LOGIN_USER,
        payload: axios.post("/auth/login", user)
    };
};

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: axios.post("/auth/logout")
    };
};

//reducer

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(type);
    switch (type) {
        case `${GET_SESSION}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${GET_SESSION}_FULFILLED`:

            return {
                ...state,
                userId: payload.data.userid,
                name: payload.data.name,
                username: payload.data.username,
                firstName: payload.data.firstname,
                city: payload.data.city,
                state: payload.data.state,
                loading: false
            };
        case `${REGISTER_USER}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                name: payload.data.name,
                username: payload.data.username,
                firstName: payload.data.firstName,
                city: payload.data.city,
                state: payload.data.state,
                loading: false
            };
        case `${LOGIN_USER}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userid,
                name: payload.data.name,
                username: payload.data.username,
                firstName: payload.data.firstname,
                city: payload.data.city,
                state: payload.data.state,
                loading: false
            };
        case `${LOGOUT_USER}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                userId: null,
                name: "",
                username: "",
                firstName: "",
                city: "",
                state: "",
                loading: false
            };
            default: 
                return state;
    };
};