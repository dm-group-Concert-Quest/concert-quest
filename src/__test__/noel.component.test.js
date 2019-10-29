import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TrackedBands from "../components/TrackedBands";
import TrackedEvents from "../components/TrackedEvents";
import UserLanding from "../components/UserLanding";
import Search from "../components/Search";
import Register from "../components/Register";
configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({ userReducer: {} });

describe("TrackedBands Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
            <Provider store={store}>
                <TrackedBands />
            </Provider>).exists()).toBe(true);
    })
})

describe("TrackedEvents Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
            <Provider store={store}>
                <TrackedEvents />
            </Provider>).exists()).toBe(true);
    })
})

describe("UserLanding Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
            <Provider store={store}>
                <UserLanding />
            </Provider>).exists()).toBe(true);
    })
})

describe("Search Component", () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Search />).find("form.search-form").exists()).toBe(true)
    })
})

describe("Register Component", () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(
            <Provider store={store}>
                <Register />
            </Provider>).find("form.register-form").exists()).toBe(false)
    })
})