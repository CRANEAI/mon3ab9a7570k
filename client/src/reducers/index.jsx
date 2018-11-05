import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import signup from "./reducer_signup"

const rootReducer = combineReducers({
  signup: signup
})

export default rootReducer
