export const initialState = { pathCommandSnapshot: []};

export const reducer = (state, action) => { // expects a current state and action to be worked on
    switch (action.type) {
        case "UPDATE_SNAPSHOTS":
            {
                let updatedState = {...state }
                let newPathCommandSnapshot = { path: action.pathCommand.path, command: action.pathCommand.command.replaceAll("\n",""), result: action.pathCommand.result, id: new Date().getTime() }
                updatedState.pathCommandSnapshot.push(newPathCommandSnapshot)
                return updatedState
            }
        case "CLEAR_SNAPSHOTS":
            {
                let updatedState = {...state }

                updatedState.pathCommandSnapshot = []
                return updatedState
            }
        default:
            return state;
    }
}