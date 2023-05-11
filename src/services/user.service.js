import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    getLoggedinUser,
    login,
    logout,
    signup,
    addActivity,
    updateUser
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function login(credentials) {
    return storageService.query(STORAGE_KEY).then(users => {
        const user = users.find(user => user.username === credentials.username &&
            user.password === credentials.password)
        // console.log(user);
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user
    })
}

function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return Promise.resolve()
}


function signup(userInfo) {
    return storageService.post(STORAGE_KEY, userInfo)
        .then((user) => {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
            return user
        })
}

function addActivity(txt) {
    const activity = { txt, date: Date.now() }
    const user = userService.getLoggedinUser()
    user.activities.unshift(activity)
    if (txt.startsWith('Checked')) user.score += 10
    return storageService.put(STORAGE_KEY, user)
        .then((user) => {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
            return activity
        })
}

function updateUser({ username, color, bgColor }) {
    const user = getLoggedinUser()
    user.username = username
    user.prefs = { color, bgColor }
    return storageService.put(STORAGE_KEY, user)
        .then((user) => {
            sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
            return user
        })
}


// Test Data
// userService.signup({username: 'muki', password: '123', fullname: 'Muki Ja', score: 0, activities: [], prefs:{color:"#000", bgColor:"#87cefa"}})
// userService.login({ username: 'muki', password: '123' })
