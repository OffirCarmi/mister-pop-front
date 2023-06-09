
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'popDB'
// const PAGE_SIZE = 3

export const popService = {
    query,
    getById,
    save,
    remove,
    getMoviesIndex,
    getLabelsIndex
}


function query() {
    return storageService.query(STORAGE_KEY)
        // .then((pops) => {
        //     return pops
        // })
}

function getById(popId) {
    return storageService.get(STORAGE_KEY, popId)
}
function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}
function save(pop) {
    if (pop._id) {
        return storageService.put(STORAGE_KEY, pop)
    }
    else {
        // when switching to backend - remove the next 2 lines
        pop._id = utilService.makeId()
        pop.createdAt = Date.now()
        return storageService.post(STORAGE_KEY, pop)
    }
}

function getMoviesIndex() {
    return {
        1: "Aladdin",
        2: "Alice in Wonderland",
        3: "Beauty and The Beast",
        4: "Frozen",
        5: "The Jungle Book",
        6: "Lilo and Stitch",
        7: "The Lion King",
        8: "The Little Mermaid",
        9: "Luca",
        10: "Mickey and friends",
        11: "Moana",
        12: "Pincchio",
        13: "Snow White",
        14: "Winnie The Pooh"

    }
}

function getLabelsIndex() {
    return {
        1: "Male",
        2: "Female",
        3: "Animal",
        4: "Item",
        10: "Main character",
        11: "Side character"
    }
}