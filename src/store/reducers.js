import { combineReducers } from "redux";
import PersonajesReducer from "./personajes/reducer";
import MundosReducer from "./mundos/reducer";
import CronologiasReducer from "./cronologia/reducer";
import AuthReducer from "./auth/reducer";
const rootReducer = combineReducers({
    PersonajesReducer,
    MundosReducer,
    CronologiasReducer,
    AuthReducer,

})

export default rootReducer
