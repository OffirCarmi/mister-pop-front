import { popService } from "../../services/pop.service.js";
import { userService } from "../../services/user.service.js";
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'

export const loadPops = () => {
    return dispatch => {
        return popService
            .query()
            .then((pops) => {
                dispatch({ type: "SET_POPS", pops })
            })
            .catch(() => showErrorMsg('Cannot load pops'))
    }
};

export const savePop = (newPop) => {
    return dispatch => {
        return popService
            .save(newPop)
            .then((pop) => {
                dispatch({ type: "ADD_POP", pop });
                // console.log(pop);
                const txt = `Added a new pop: '${pop.txt}'`;
                // console.log(txt);
                userService
                    .addActivity(txt)
                    .then((activity) =>
                        dispatch({ type: "ADD_ACTIVITY", activity })
                    );
                showSuccessMsg("New pop was added");
            })
            .catch(() => showErrorMsg("Cannot add pop"));
    }
}

export const togglePop = (pop) => {
    return dispatch => {
        return popService
            .save(pop)
            .then((savedPop) => {
                dispatch({ type: "UPDATE_POP", pop: savedPop });

                const txt = savedPop.isDone
                    ? `Checked '${savedPop.txt}'`
                    : `Unchecked '${savedPop.txt}'`;

                userService
                    .addActivity(txt)
                    .then((activity) =>
                        dispatch({ type: "ADD_ACTIVITY", activity })
                    );
                showSuccessMsg("Pop was updated");
            })
            .catch((err) => {
                showErrorMsg("Cannot update pop");
            });
    }
}

export const removePop = (popId) => {
    return dispatch => {
        return popService
            .remove(popId)
            .then((removedPop) => {
                dispatch({ type: "REMOVE_POP", popId: removedPop._id });
                const txt = `Removed pop: '${removedPop.txt}'`;
                userService
                    .addActivity(txt)
                    .then((activity) =>
                        dispatch({ type: "ADD_ACTIVITY", activity })
                    );
                showSuccessMsg("Pop was removed");
            })
            .catch((err) => {
                showErrorMsg("Cannot remove pop");
            });
    }
}