const initialState = { pops: [] }

export const popReducer = (state = initialState, action) => {
    let pops
    switch (action.type) {
        case 'SET_POPS':
            return { ...state, pops: action.pops }
        case 'ADD_POP':
            return { ...state, pops: [...state.pops, action.todo] }
        case 'UPDATE_POP':
            const idx = state.pops.find(todo => todo._id === action.todo._id)
            pops = [...state.pops]
            pops[idx] = action.todo
            return { ...state, pops }
        case 'REMOVE_POP':
            pops = state.pops.filter(todo => todo._id !== action.todoId)
            return { ...state, pops }
        default:
            return state
    }
}