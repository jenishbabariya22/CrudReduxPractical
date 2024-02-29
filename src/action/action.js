export const adduser = (data) => {
    return {
        type: "adduser",
        payload: data
    }
}

export const viewuser = () => {
    return {
        type: "viewuser"
    }
}

export const deleteuser = (id) => {
    return {
        type: "deleteuser",
        payload: id
    }
}

export const editeuser = (id) => {
    return {
        type: "editeuser",
        payload: id
    }
}

export const updateuser = (data) => {
    return {
        type: "updateuser",
        payload: data
    }
}