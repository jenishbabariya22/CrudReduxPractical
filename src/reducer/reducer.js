let initilize = {
    user: JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [],
    users: {}
}

const reducer = (state = initilize, action) => {
    switch (action.type) {
        case "adduser":
            let all = [...state.user, action.payload]
            localStorage.setItem("user", JSON.stringify(all))
            return {
                ...state,
                user: all
            }

        case "viewuser":
            return state

        case "deleteuser":
            let id = action.payload;
            let remove = state.user.filter((val) => {
                return val.id !== id
            })

            localStorage.setItem("user", JSON.stringify(remove))

            return {
                ...state,
                user: remove
            }

        case "editeuser":
            let edit = state.user.find((val) => {
                return val.id === action.payload
            })

            return {
                ...state,
                users: edit
            }

        case "updateuser":
            let userid = action.payload.id
            let update = state.user.map((val) => {
                if (userid == val.id) {
                    return {
                        ...val,
                        email: action.payload.email,
                        password: action.payload.password
                    }
                }
                return val
            })
            console.log(update);
            localStorage.setItem("user", JSON.stringify(update))

            return {
                ...state,
                user: update
            }

        default:
            return state
    }
}

export default reducer