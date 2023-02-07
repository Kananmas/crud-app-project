//Constants
import * as types from "./users.constants";

class Actions {
  setUsers(users) {
    return {
      type: types.SET_USERS,
      payload: users,
    };
  }
}


const UsersActions=new Actions()

export default UsersActions