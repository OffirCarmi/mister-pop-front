import { popService } from "../../services/pop.service.js";


export const loadPops = () => {
    return dispatch => {
        return popService
            .query()
            .then((pops) => dispatch({ type: "SET_POPS", pops }))
            .catch(() => console.log('Cannot load pops'))
    }
};

export const savePop = (pop) => {
    const type = pop._id ? "UPDATE_POP" : "ADD_POP"
    return dispatch => {
        return popService.save(pop)
            .then((savedPop) => dispatch({ type, pop: savedPop }))
            .catch((err) => console.log("Cannot add changes to pops", err));
    }
}