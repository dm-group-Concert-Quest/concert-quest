import { getSession, registerUser, loginUser, updateFirstName, updatePassword } from "../redux/reducers/userReducer";

test('Test to see type of getSession == "GET_SESSION"', () => {
    expect(getSession().type).toBe("GET_SESSION")
})

test('Test to see type of registerUser == "REGISTER_USER" ', () => {
    expect(registerUser().type).toBe("REGISTER_USER")
})

test('Test to see type of loginUser == "LOGIN_USER" ', () => {
    expect(loginUser().type).toBe("LOGIN_USER")
})

test('Test to see type of updateFirstName == {} ', () => {
    expect(updateFirstName().payload).resolves.toEqual({})
})

test('Test to see type of updatePassword == {} ', () => {
    expect(updatePassword().payload).resolves.toEqual({})
})
