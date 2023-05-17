
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'popDB'
// const PAGE_SIZE = 3

export const popService = {
    query,
    getById,
    save,
    remove
}


function query() {
    return storageService.query(STORAGE_KEY)
        .then((pops) => {
            return pops
        })
}

function getById(popId) {
    return storageService.get(STORAGE_KEY, popId)
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

// function _createData() {
//     return [
//         { _id: "alad1", name: "Aladdin", price: 14.90, movieTitle: "Aladdin", labels: ["Male", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad2", name: "Aladdin", price: 13.40, movieTitle: "Aladdin", labels: ["Male", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad3", name: "Abu", price: 13.70, movieTitle: "Aladdin", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad4", name: "Jasmine", price: 14.80, movieTitle: "Aladdin", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad5", name: "Jasmine", price: 14.10, movieTitle: "Aladdin", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad7", name: "Rajah", price: 12.90, movieTitle: "Aladdin", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad6", name: "Jafar", price: 13.30, movieTitle: "Aladdin", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alad8", name: "Iago", price: 13.60, movieTitle: "Aladdin", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alic1", name: "Alice", price: 13.80, movieTitle: "Alice in Wonderland", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alic2", name: "The Mad Hatter", price: 13.30, movieTitle: "Alice in Wonderland", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alic3", name: "Queen of Hearts", price: 13.60, movieTitle: "Alice in Wonderland", labels: ["Female", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alic4", name: "Caterpillar", price: 12.80, movieTitle: "Alice in Wonderland", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alic5", name: "Cheshire Cat", price: 13.20, movieTitle: "Alice in Wonderland", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "alic6", name: "McTwisp", price: 13.30, movieTitle: "Alice in Wonderland", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "beau1", name: "Belle", price: 14.20, movieTitle: "Beauty and The Beast", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "beau2", name: "Beast", price: 13.90, movieTitle: "Beauty and The Beast", labels: ["Male", "Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "beau3", name: "Cogsworth", price: 12.60, movieTitle: "Beauty and The Beast", labels: ["Item", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "beau4", name: "Lumiere", price: 12.80, movieTitle: "Beauty and The Beast", labels: ["Item", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "beau5", name: "Mrs. Potts and Chip", price: 13.80, movieTitle: "Beauty and The Beast", labels: ["Item", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "froz1", name: "Elsa", price: 15.70, movieTitle: "Frozen", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "froz2", name: "Anna", price: 14.90, movieTitle: "Frozen", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "froz3", name: "Elsa", price: 15.30, movieTitle: "Frozen", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "froz4", name: "Olaf", price: 13.70, movieTitle: "Frozen", labels: ["Item", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "froz5", name: "Sven", price: 13.20, movieTitle: "Frozen", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "jung1", name: "Mowgli", price: 14.40, movieTitle: "The Jungle Book", labels: ["Male", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "jung2", name: "Mowgli with Kaa", price: 14.80, movieTitle: "The Jungle Book", labels: ["Male", "Animal", "Main character", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "jung3", name: "Kaa", price: 13.70, movieTitle: "The Jungle Book", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "jung4", name: "Baloo", price: 12.80, movieTitle: "The Jungle Book", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "jung5", name: "Shere Khan", price: 13.90, movieTitle: "The Jungle Book", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "jung6", name: "King Louie", price: 13.40, movieTitle: "The Jungle Book", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lilo1", name: "Lilo", price: 15.70, movieTitle: "Lilo and Stitch", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lilo2", name: "Lilo", price: 14.90, movieTitle: "Lilo and Stitch", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lilo3", name: "Stitch", price: 15.30, movieTitle: "Lilo and Stitch", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lilo4", name: "Stitch", price: 13.70, movieTitle: "Lilo and Stitch", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lion1", name: "Mufasa", price: 16.40, movieTitle: "The Lion King", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lion2", name: "Simba", price: 16.70, movieTitle: "The Lion King", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lion3", name: "Rafik", price: 15.60, movieTitle: "The Lion King", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lion4", name: "Scar", price: 13.90, movieTitle: "The Lion King", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lion5", name: "Timon", price: 14.50, movieTitle: "The Lion King", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "lion6", name: "Pumba", price: 15.70, movieTitle: "The Lion King", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "litt1", name: "Ariel", price: 15.20, movieTitle: "The Little Mermaid", labels: ["Female", "Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "litt2", name: "Ariel", price: 15.20, movieTitle: "The Little Mermaid", labels: ["Female", "Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "litt3", name: "Ursula", price: 15.90, movieTitle: "The Little Mermaid", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "litt4", name: "Sebastian", price: 14.50, movieTitle: "The Little Mermaid", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "litt5", name: "Sebastian", price: 13.70, movieTitle: "The Little Mermaid", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "luca1", name: "Luca Pafuro", price: 15.70, movieTitle: "Luca", labels: ["Male", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "luca2", name: "Luca Pafuro", price: 14.90, movieTitle: "Luca", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "luca3", name: "Alberto Scorfano", price: 15.30, movieTitle: "Luca", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "luca4", name: "Alberto Scorfano", price: 13.70, movieTitle: "Luca", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "mick1", name: "Mickey Mouse", price: 13.70, movieTitle: "Mickey and Firends", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "mick2", name: "Minnie Mouse", price: 12.50, movieTitle: "Mickey and Firends", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "mick3", name: "Donald Duck", price: 13.10, movieTitle: "Mickey and Firends", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "mick4", name: "Daisy Duck", price: 12.90, movieTitle: "Mickey and Firends", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "mick5", name: "Goofy", price: 13.20, movieTitle: "Mickey and Firends", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "mick6", name: "Pluto", price: 12.80, movieTitle: "Mickey and Firends", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "moha1", name: "Mohana", price: 13.90, movieTitle: "Mohana", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "moha2", name: "Baby Mohana", price: 12.90, movieTitle: "Mohana", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pino1", name: "Pinocchio", price: 14.60, movieTitle: "Pinocchio", labels: ["Male", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pino2", name: "Geppetto", price: 13.30, movieTitle: "Pinocchio", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pino3", name: "Blue Fairy", price: 12.60, movieTitle: "Pinocchio", labels: ["Female", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pino4", name: "Jiminy Cricket", price: 12.70, movieTitle: "Pinocchio", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pino5", name: "Figaro with Cleo", price: 12.10, movieTitle: "Pinocchio", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pooh1", name: "Winnie", price: 16.80, movieTitle: "Winnie the Pooh", labels: ["Animal", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pooh2", name: "Tigger", price: 15.90, movieTitle: "Winnie the Pooh", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pooh3", name: "Eeyore", price: 15.70, movieTitle: "Winnie the Pooh", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "pooh4", name: "Piglet", price: 16.30, movieTitle: "Winnie the Pooh", labels: ["Animal", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "snow1", name: "Snow White", price: 15.20, movieTitle: "Snow White", labels: ["Female", "Main character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "snow2", name: "Evil Queen", price: 12.50, movieTitle: "Snow White", labels: ["Female", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "snow3", name: "Sleepy", price: 13.10, movieTitle: "Snow White", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "snow4", name: "Sneezy", price: 12.90, movieTitle: "Snow White", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "snow5", name: "Dopey", price: 13.20, movieTitle: "Snow White", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//         { _id: "snow6", name: "Grumpy", price: 12.80, movieTitle: "Snow White", labels: ["Male", "Secondary character"], createdAt: 1684162968586, "inStock": true },
//     ]
// }
