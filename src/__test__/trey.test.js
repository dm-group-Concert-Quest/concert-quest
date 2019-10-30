import { updateFirstName, updateCity, updateState, deleteUser } from '../redux/reducers/userReducer';

//unit tests
test('Test to see type of updateFirstName == "UPDATE_FIRST_NAME" ', () => {
    expect(updateFirstName(123).type).toBe("UPDATE_FIRST_NAME")
})

test('Test to see type of updateCity == "UPDATE_CITY" ', () => {
    expect(updateCity(123).type).toBe("UPDATE_CITY")
})

test('Test to see type of updateState == "UPDATE_STATE" ', () => {
    expect(updateState(123).type).toBe("UPDATE_STATE")
})

test('Test to see type of deleteUser == "DELETE_USER" ', () => {
    expect(deleteUser(123).type).toBe("DELETE_USER")
})

test('Test to see type of updateCity == {} ', () => {
    expect(updateCity().payload).resolves.toEqual({})
});