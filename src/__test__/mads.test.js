import {logoutUser, updateUsername, updatePassword, updateEmail} from "../redux/reducers/userReducer";

// unit tests :)
test('Test to see type of logoutUser == "LOGOUT_USER" ', () => {
   expect(logoutUser().type).toBe("LOGOUT_USER")
})

test('Test to see type of updateUsername == "UPDATE_USERNAME" ', () => {
   expect(updateUsername().type).toBe("UPDATE_USERNAME")
})

test('Test to see type of updatePassword == "UPDATE_PASSWORD" ', () => {
   expect(updatePassword().type).toBe("UPDATE_PASSWORD")
})

test('Test to see type of updateEmail == "UPDATE_EMAIL" ', () => {
   expect(updateEmail().type).toBe("UPDATE_EMAIL")
})

test('Test to see type of updateUsername == {} ', () => {
   expect(updateUsername().payload).resolves.toEqual({})
})