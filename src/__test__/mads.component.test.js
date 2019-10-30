import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Search from "../components/Search";
import Settings from "../components/Settings";
const mockStore = configureMockStore();
const store = mockStore({ userReducer: {} })

describe("Nav Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Nav />
                </Provider>).exists()).toBe(true);
    })
})
it("should render without crashing", () => {
    shallow(<Profile />)
})
describe("Register Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Register />
                </Provider>).exists()).toBe(true);
    })
})
it("should render without crashing", () => {
    shallow(<Search />)
})
describe("Settings Component", () => {
    it("should render without crashing", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Settings />
                </Provider>).exists()).toBe(true);
    })
})