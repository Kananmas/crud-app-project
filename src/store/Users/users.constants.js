//utilities
import { createReduxPrefix } from "../../utils/action.util";

const prefix = createReduxPrefix("USERS");

export const SET_USERS = prefix("SET_USERS");
