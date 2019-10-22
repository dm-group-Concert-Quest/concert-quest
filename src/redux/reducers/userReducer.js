import axios from "axios";

//initialState
const initialState = {
    user_id: null,
    username: "",
    password: "",
    first_name: "",
    city: "",
    state: "",
    email: "",
    loading: false
};

//constants
const GET_SESSION = "GET_SESSION";
const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const DELETE_USER = "DELETE_USER";

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

export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: axios.put("/auth/settings/username", username)
    };
};

export function updatePassword(password) {
    return {
        type: UPDATE_PASSWORD,
        payload: axios.put("/auth/settings/password", password)
    };
};

export function updateFirstName(first_name) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: axios.put("/auth/settings/first_name", first_name)
    };
};

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: axios.put("/auth/settings/city", city)
    };
};

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: axios.put("/auth/settings/state", state)
    };
};

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: axios.put("/auth/settings/email", email)
    };
};

export function deleteUser() {
    return {
        type: DELETE_USER,
        payload: axios.delete("/auth/settings/user")
    };
};

//reducer
export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${GET_SESSION}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${GET_SESSION}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                name: payload.data.name,
                username: payload.data.username,
                first_name: payload.data.first_name,
                city: payload.data.city,
                state: payload.data.state,
                email: payload.data.email,
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
                user_id: payload.data.user_id,
                username: payload.data.username,
                first_name: payload.data.first_name,
                city: payload.data.city,
                state: payload.data.state,
                email: payload.data.email,
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
                user_id: payload.data.user_id,
                name: payload.data.name,
                username: payload.data.username,
                first_name: payload.data.first_name,
                city: payload.data.city,
                state: payload.data.state,
                email: payload.data.email,
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
                user_id: null,
                username: "",
                first_name: "",
                password: "",
                city: "",
                state: "",
                email: "",
                loading: false
            };
        case `${UPDATE_USERNAME}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_USERNAME}_FULFILLED`:
            return {
                ...state,
                username: payload.data.username,
                loading: false
            };
        case `${UPDATE_PASSWORD}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${UPDATE_PASSWORD}_FULFILLED`:
            return {
                ...state,
                password: payload.data.password,
                loading: false
            };
        case `${UPDATE_FIRST_NAME}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_FIRST_NAME}_FULFILLED`:
            return {
                ...state,
                first_name: payload.data.first_name,
                loading: false
            };
        case `${UPDATE_CITY}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_CITY}_FULFILLED`:
            return {
                ...state,
                city: payload.data.city,
                loading: false
            };
        case `${UPDATE_STATE}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_STATE}_FULFILLED`:
            return {
                ...state,
                state: payload.data.state,
                loading: false
            };
        case `${UPDATE_EMAIL}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${UPDATE_EMAIL}_FULFILLED`:
            return {
                ...state,
                email: payload.data.email,
                loading: false
            };
        case `${DELETE_USER}_FULFILLED`:
            return {
                ...state,
                user_id: null,
                username: "",
                password: "",
                first_name: "",
                city: "",
                state: "",
                email: ""
            }
            default: 
                return state;
    };
};