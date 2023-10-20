const onSuccessResponse = (response) => {
    if (response.status === 404) {
        throw new Error("Bad API Call")
    }

    return response.json()
}

const onSuccessResult = (result) => result

const onError = (error) => {
    // throw new Error(error.message)
    return error
}

const fetchGithubUsers = async () => {
    return fetch("https://api.github.com/userssjskjk")
        .then(onSuccessResponse)
        .then(onSuccessResult)
        .catch(onError)
}

const init = async () => {
    try {
        const githubUsers = await fetchGithubUsers()
        console.log("HERE", "githubUsers", githubUsers)
    } catch (error) {
        console.log("HERE", error)
    }
}

init()
