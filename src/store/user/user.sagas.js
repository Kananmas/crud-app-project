import { call, delay, put } from "redux-saga/effects";
import { isUsernameUsed } from "../../utils/is-username-used.util";
import { signUpUser } from "../../utils/sign-up-user.util";
import { getUser } from "../../utils/get-user.util";
import { signInUser } from "../../utils/sign-in-user.util";
import { indicateSuccessAction, resetUserAction } from "./user.actions";
import { addNewUser } from "../../utils/add-new-user.util";


export function* signinSaga() {
    try {
        yield delay(1000);
        const data = yield call(signInUser);
        if (data) {
            yield call(getUser)
            yield put(indicateSuccessAction());
        }
    } catch (error) {
        console.log(error);
    } finally {
        yield put(resetUserAction())
    }
}


export function* signupSaga() {
    try {
        yield delay(1000);
        const isUnique = yield call(isUsernameUsed);
        if (isUnique) {
            localStorage.clear();
            const data = yield call(signUpUser);

            if (data) {
                yield call(addNewUser)
                yield put(indicateSuccessAction());
            }
        }
    } catch (error) {
        console.log(error)
    } finally {
        yield put(resetUserAction())
    }
}