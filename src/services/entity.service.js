
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'entityDB'
const PAGE_SIZE = 3

export const todoService = {
    query,
    getById,
    save,
    remove,
}


function query(filterBy = { txt: "", status: "all", sortBy: "date", pageIdx: 0 }) {
    const { status, txt, sortBy, pageIdx } = filterBy
    return storageService.query(STORAGE_KEY)
        .then((todos) => {
            let todosDisplay = [...todos]
            // TXT
            const regex = new RegExp(txt, "i");
            todosDisplay = todosDisplay.filter((entity) => regex.test(entity.txt));

            // STATUS
            switch (status) {
                case "active":
                    todosDisplay = todosDisplay.filter((entity) => !entity.isDone);
                    break;
                case "done":
                    todosDisplay = todosDisplay.filter((entity) => entity.isDone);
                    break;
                case "all":
                    break;
                default:
                    break;
            }

            // SORT BY
            switch (sortBy) {
                case "title":
                    todosDisplay.sort((a, b) => a.txt.localeCompare(b.txt));
                    break;
                default:
                    break;
            }

            const startIdx = pageIdx * PAGE_SIZE;
            todosDisplay = todosDisplay.slice(startIdx, startIdx + PAGE_SIZE)

            return todosDisplay
        })
}

function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}
function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}
function save(entity) {
    if (entity._id) {
        entity.isDone = !entity.isDone
        return storageService.put(STORAGE_KEY, entity)

    } else {
        // when switching to backend - remove the next 2 lines
        const { _id, username } = userService.getLoggedinUser()
        entity.creator = { _id, username }
        return storageService.post(STORAGE_KEY, entity)
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {txt: 'test', isDone: false, _id:'njMS3', creator:{_id:'none', username:'none'}}).then(x => console.log(x))


