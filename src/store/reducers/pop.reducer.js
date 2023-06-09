const initialState = { pops: [] }

export const popReducer = (state = initialState, action) => {
    let pops
    switch (action.type) {
        case 'SET_POPS':
            return { ...state, pops: action.pops }
        case 'ADD_POP':
            return { ...state, pops: [...state.pops, action.pop] }
        case 'UPDATE_POP':
            const idx = state.pops.findIndex(pop => pop._id === action.pop._id)
            pops = [...state.pops]
            pops[idx] = action.pop
            return { ...state, pops }
        case 'REMOVE_POP':
            pops = state.pops.filter(pop => pop._id !== action.popId)
            return { ...state, pops }
        default:
            return state
    }
}