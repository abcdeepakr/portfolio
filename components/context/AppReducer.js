export const initialState = { pathCommandSnapshot: [], currentPath:["/home"]};

export const reducer = (state, action) => { // expects a current state and action to be worked on
    switch (action.type) {
        case "UPDATE_SNAPSHOTS":
            {
                console.trace("snapshot")
                console.log("updating snapchot")
                let updatedState = {...state }
                let newPathCommandSnapshot = { path: action.pathCommand.path, command: action.pathCommand.command.replaceAll("\n",""), result: action.pathCommand.result, id: new Date().getTime() + Math.random() }
                updatedState.pathCommandSnapshot.push(newPathCommandSnapshot)
                return updatedState
            }
        case "CLEAR_SNAPSHOTS":
            {
                let updatedState = {...state }
                updatedState.pathCommandSnapshot = []
                return updatedState
            }
        case "UPDATE_PATH":
            {
                console.trace("path")
                let updatedState = {...state }
                updatedState.currentPath = action.path
                return updatedState
            }
        default:
            return state;
    }
}