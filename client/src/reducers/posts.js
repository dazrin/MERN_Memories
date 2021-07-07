// a reducer is a function which accepts the react state, as well as an action to influence that state

const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}