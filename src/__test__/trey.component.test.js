import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import App from "../App";
import About from "../components/About";
import EventList from "../components/EventList";
import GuestLanding from "../components/GuestLanding";
import Login from "../components/Login";
const mockStore = configureMockStore();
const store = mockStore({ userReducer: {} })

it("should render without crashing", () => {
    shallow(<App />)
})

it("should render without crashing", () => {
    shallow(<About />)
})

describe("EventList Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <EventList />
                </Provider>).exists()).toBe(true);
    })
})

describe("GuestLanding Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <GuestLanding />
                </Provider>).exists()).toBe(true);
    })
})

describe("Login Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Login />
                </Provider>).exists()).toBe(true);
    })
})