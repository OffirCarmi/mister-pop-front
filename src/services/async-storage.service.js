import { utilService } from "./util.service.js"

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 500) {
    let entities = JSON.parse(localStorage.getItem(entityType))

    if (!entities) {
        entities = _createData()
        _save(entityType, entities)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })

    // FOR SYNC SERVICE
    // return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const pop = entities.find(entity => entity._id === entityId)
            pop.recommendations = entities.filter(entity => entity.movieTitle === pop.movieTitle && entity._id !== pop._id)
            pop.recommendations = pop.recommendations.slice(0, 4)
            return pop
        })
}

function post(entityType, newEntity) {
    newEntity._id = utilService.makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            const removedEntity = entities[idx]
            entities.splice(idx, 1)
            _save(entityType, entities)
            return removedEntity
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}


function _createData() {
    return [
        { _id: "alad1", name: "Aladdin", price: 14.90, movieTitle: "aladdin", description: "Aladdin is a quick-witted and a caring person. Like most Disney male protagonists, he is a heroic young man who seeks to win the affection of many other characters, which demonstrates his insecurity.", labels: ["Male", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad2", name: "Prince Aladdin", price: 13.40, movieTitle: "aladdin", description: "Aladdin is a quick-witted and a caring person. Like most Disney male protagonists, he is a heroic young man who seeks to win the affection of many other characters, which demonstrates his insecurity.", labels: ["Male", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad3", name: "Abu", price: 13.70, movieTitle: "aladdin", description: "Abu is scheming and sneaky and hates danger. However, he is also very loyal to Aladdin and is willing to risk his life to save him and his friends.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad4", name: "Princess Jasmine", price: 14.80, movieTitle: "aladdin", description: "Jasmine is incredibly independent and strong. She isn't afraid to speak her mind, no matter who she's up against, and won't hesitate to stand up for what's right. She is extremely compassionate and caring towards her kingdom, her family, and her friends.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad5", name: "Jasmine", price: 14.10, movieTitle: "aladdin", description: "Jasmine is incredibly independent and strong. She isn't afraid to speak her mind, no matter who she's up against, and won't hesitate to stand up for what's right. She is extremely compassionate and caring towards her kingdom, her family, and her friends.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad6", name: "Rajah", price: 12.90, movieTitle: "aladdin", description: "Rajah is Princess Jasmine's loyal, protective pet tiger and constant companion.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad7", name: "Jafar", price: 13.30, movieTitle: "aladdin", description: "Jafar is a masterful liar who has smooth-talked his way to the top, with the help of a little magical mind control. When he's not putting on a polite public face, Jafar is spiteful, abusive, and quick to anger.", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alad8", name: "Iago", price: 13.60, movieTitle: "aladdin", description: "Iago is a sarcastic, loud-mouthed, and short-tempered parrot that served as Jafar's sidekick during the latter's attempt to rule Agrabah.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alic1", name: "Alice", price: 13.80, movieTitle: "alice in wonderland", description: "Alice is a sensible prepubescent girl from a wealthy English family who finds herself in a strange world ruled by imagination and fantasy. Alice feels comfortable with her identity and has a strong sense that her environment is comprised of clear, logical, and consistent rules and features.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alic2", name: "The Mad Hatter", price: 13.30, movieTitle: "alice in wonderland", description: "The Mad Hatter is the supervillain who keeps his Wonderland counterpart's costume and personality, with a lot of his gadgets stored in his hat. ", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alic3", name: "Queen of Hearts", price: 13.60, movieTitle: "alice in wonderland", description: "Queen of Hearts is overbearing, meticulously obsessive about manners, and civil in a self-righteous and supercilious way.", labels: ["Female", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alic4", name: "Caterpillar", price: 12.80, movieTitle: "alice in wonderland", description: "The Caterpillar (also known as Russel) is a hookah-smoking insect who meets Alice after she has been shrunk to a tiny size.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alic5", name: "Cheshire Cat", price: 13.20, movieTitle: "alice in wonderland", description: "The Cheshire Cat is intelligent and mischievous that sometimes helps Alice and sometimes gets her into trouble.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "alic6", name: "The White Rabbit", price: 13.30, movieTitle: "alice in wonderland", description: "The White Rabbit (also known as McTwisp) is nervous and always in a hurry. However, he is confident enough about himself to contradict the King of Hearts.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "beau1", name: "Belle", price: 14.20, movieTitle: "beauty and the beast", description: "Belle is confident and comfortable being herself and knows that it's not fair to judge a book—or a beast—by its cover. She yearns to escape the simplicity of her life and find adventure beyond her provincial town.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "beau2", name: "Beast", price: 13.90, movieTitle: "beauty and the beast", description: "The beast is haunted by his past mistakes. Quick temper and prone to anger. Angry at himself for what he did but takes it out on others. Despite this, he has an inner beauty.", labels: ["Male", "Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "beau3", name: "Cogsworth", price: 12.60, movieTitle: "beauty and the beast", description: "A manic, officious English major-domo who has been turned into a clock. Someone wound him up way too tight and he has never wound down. Slightly snooty but with a heart of gold.", labels: ["Item", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "beau4", name: "Lumiere", price: 12.80, movieTitle: "beauty and the beast", description: "Lumiere is a kind-hearted, charismatic, yet rebellious maître'd of the Beast. Incredibly social and hospitable towards all of whom he meets, Lumiere has a habit of disobeying the firm rules of his antisocial master, frequently resulting in controversy.", labels: ["Item", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "beau5", name: "Mrs. Potts and Chip", price: 13.80, movieTitle: "beauty and the beast", description: "Mrs. Potts is perhaps the most reliant member of the Beast's staff. Being a mother, she can be very gentle and nurturing, while also being stern and no-nonsense.\nChip is a cheerful and active young boy who is shown to have a great fear of the Beast's temper.", labels: ["Item", "Side character"], inStock: true, createdAt: 1684162968586 },
        { _id: "froz1", name: "Elsa", price: 15.70, movieTitle: "frozen", description: "From the outside, Elsa looks poised, regal and reserved, but in reality, she lives in fear as she wrestles with a mighty secret—she was born with the power to create ice and snow. ", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "froz2", name: "Anna", price: 14.90, movieTitle: "frozen", description: "Anna might not have the elegance of royalty, but she has the pure and loving heart of a true princess. Sweet yet tenacious, Anna is a courageous and determined woman willing to do anything for her sister.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "froz3", name: "Elsa", price: 15.30, movieTitle: "frozen", description: "From the outside, Elsa looks poised, regal and reserved, but in reality, she lives in fear as she wrestles with a mighty secret—she was born with the power to create ice and snow. ", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "froz4", name: "Olaf", price: 13.70, movieTitle: "frozen", description: "Olaf is by far the friendliest snowman in Arendelle. He is innocent, outgoing and loves all things summer. Olaf may be a bit naive, but his sincerity and good-natured temperament make him a true friend to Anna and Elsa.", labels: ["Item", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "froz5", name: "Sven", price: 13.20, movieTitle: "frozen", description: "Sven is a reindeer that lives together with his companion, Kristoff. Sven, alongside Kristoff, assists princess Anna in her search for her sister, queen Elsa.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "jung1", name: "Mowgli", price: 14.40, movieTitle: "the jungle book", description: "Mowgli is endlessly curious about the world around him. He's not one to sit still and follow the rules. He wants to explore, try things for himself, and test his limits.", labels: ["Male", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "jung2", name: "Mowgli with Kaa", price: 14.80, movieTitle: "the jungle book", description: "Mowgli is endlessly curious about the world around him. He's not one to sit still and follow the rules. He wants to explore, try things for himself, and test his limits.\nKaa is an enormous snake with an equally large appetite—specifically for Mowgli the man cub. Kaa's most dangerous attributes are his hypnotic eyes, which he uses to manipulate unsuspecting prey and lure them into his jaws.", labels: ["Male", "Animal", "Main character", "Side character"], inStock: true, createdAt: 1684162968586 },
        { _id: "jung3", name: "Kaa", price: 13.70, movieTitle: "the jungle book", description: "Kaa is an enormous snake with an equally large appetite—specifically for Mowgli the man cub. Kaa's most dangerous attributes are his hypnotic eyes, which he uses to manipulate unsuspecting prey and lure them into his jaws.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "jung4", name: "Baloo", price: 12.80, movieTitle: "the jungle book", description: "Baloo is a fun-loving, easygoing, and good-natured bear who becomes the best friend of the \"man-cub\" Mowgli.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "jung5", name: "Shere Khan", price: 13.90, movieTitle: "the jungle book", description: "Shere Khan is considered suave and charming, yet is deeply feared as the most ferocious predator in the jungle. His reputation was such that he needed only to show himself to intimidate his victims. Khan is equally notorious for his animosity toward man, due to his fear of guns and fire.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "jung6", name: "King Louie", price: 13.40, movieTitle: "the jungle book", description: "King Louie is an Orangutan who leads other jungle primates and wants to become more human-like by gaining knowledge of fire from Mowgli.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lilo1", name: "Lilo", price: 15.70, movieTitle: "lilo and stitch", description: "Lilo is a young, orphaned Hawaiian girl who lives on the island of Kauai with her older sister, Nani, and her extended yet unconventional family of alien visitors marooned on Earth.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lilo2", name: "Lilo", price: 14.90, movieTitle: "lilo and stitch", description: "Lilo is a young, orphaned Hawaiian girl who lives on the island of Kauai with her older sister, Nani, and her extended yet unconventional family of alien visitors marooned on Earth.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lilo3", name: "Stitch", price: 15.30, movieTitle: "lilo and stitch", description: "Stitch (also known as Experiment 626)  is an illegal genetic experiment created by Jumba Jookiba, whose original primary function is to destroy everything he touches. He is designed to be abnormally strong, virtually indestructible, super-intelligent, and very mischievous.", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lilo4", name: "Stitch", price: 13.70, movieTitle: "lilo and stitch", description: "Stitch (also known as Experiment 626)  is an illegal genetic experiment created by Jumba Jookiba, whose original primary function is to destroy everything he touches. He is designed to be abnormally strong, virtually indestructible, super-intelligent, and very mischievous.", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lion1", name: "Mufasa", price: 16.40, movieTitle: "the lion king", description: "A huge, powerful male lion, Mufasa was the King of the Pride Lands, father of Simba, and mate of Sarabi. He is shown to be a wise and fair ruler, who follows the \"Circle of Life\".", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lion2", name: "Simba", price: 16.70, movieTitle: "the lion king", description: "Simba is playful, energetic, and naive. After his father Mufasa's death, he feels responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne.", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lion3", name: "Rafiki", price: 15.60, movieTitle: "the lion king", description: "A wise mandrill who acts as healer of the Pridelands and guides Simba on his journey home. She is an omniscient character, evincing an air of mystery.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lion4", name: "Scar", price: 13.90, movieTitle: "the lion king", description: "Scar, Mufasa's younger brother, was next-in-line to take the throne until his nephew Simba, Mufasa's son, was born, replacing him. Determined to seize the throne, Scar devises a plan to kill both Simba and Mufasa.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lion5", name: "Timon", price: 14.50, movieTitle: "the lion king", description: "Timon is afraid of his own shadow, but pretends to be a confident and relaxed leader.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "lion6", name: "Pumba", price: 15.70, movieTitle: "the lion king", description: "Pumba is a kindhearted, sensitive warthog who enjoys his simple life of grubs and relaxation.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "litt1", name: "Ariel", price: 15.20, movieTitle: "the little mermaid", description: "Ariel is the youngest daughter of King Triton and Queen Athena of an underwater kingdom of merfolk called Atlantica.", labels: ["Female", "Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "litt2", name: "Ariel", price: 15.20, movieTitle: "the little mermaid", description: "Ariel is the youngest daughter of King Triton and Queen Athena of an underwater kingdom of merfolk called Atlantica.", labels: ["Female", "Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "litt3", name: "Ursula", price: 15.90, movieTitle: "the little mermaid", description: "Ursula is a villainous sea witch in the shape of a morbidly obesed octopod who offers Ariel a temporary opportunity to become human so that she may earn the love of Prince Eric.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "litt4", name: "Sebastian", price: 14.50, movieTitle: "the little mermaid", description: "Sebastian is a red, Jamaican-accented crab who serves as King Triton's advisor and \"distinguished\" court composer. Despite his esteemed position, Sebastian is regularly tasked with watching over Triton's youngest daughter, Princess Ariel.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "litt5", name: "Sebastian", price: 13.70, movieTitle: "the little mermaid", description: "Sebastian is a red, Jamaican-accented crab who serves as King Triton's advisor and \"distinguished\" court composer. Despite his esteemed position, Sebastian is regularly tasked with watching over Triton's youngest daughter, Princess Ariel.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "luca1", name: "Luca Pafuro", price: 15.70, movieTitle: "luca", description: "Luca Paguro is a bright and inventive 13-year-old sea monster with endless curiosity—especially when it comes to the mysterious world above the sea.", labels: ["Male", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "luca2", name: "Luca Pafuro", price: 14.90, movieTitle: "luca", description: "Luca Paguro is a bright and inventive 13-year-old sea monster with endless curiosity—especially when it comes to the mysterious world above the sea.", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "luca3", name: "Alberto Scorfano", price: 15.30, movieTitle: "luca", description: "Alberto Scorfano is an independent, free-spirited 17-year-old sea monster with unbridled enthusiasm for the human world. Expressive and gregarious, he is all about having fun, so inviting a fellow sea monster to hang out above the surface is a no-brainer for Alberto.", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "luca4", name: "Alberto Scorfano", price: 13.70, movieTitle: "luca", description: "Alberto Scorfano is an independent, free-spirited 17-year-old sea monster with unbridled enthusiasm for the human world. Expressive and gregarious, he is all about having fun, so inviting a fellow sea monster to hang out above the surface is a no-brainer for Alberto.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "mick1", name: "Mickey Mouse", price: 13.70, movieTitle: "mickey and friends", description: "Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves. He is optimistic, brave, and lovable. ", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "mick2", name: "Minnie Mouse", price: 12.50, movieTitle: "mickey and friends", description: "Minnie is sweet in nature, fun-loving and very beautiful. She is widely recognized by her pink or red polka-dotted bow.Her favorite hobbies are cooking, dancing, gardening, shopping, music, fashion and spending time with Mickey.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "mick3", name: "Donald Duck", price: 13.10, movieTitle: "mickey and friends", description: "Donald is an anthropomorphic white duck with a yellow-orange bill, legs, and feet. He typically wears a sailor shirt and cap with a bow tie. Donald is known for his semi-intelligible speech and his mischievous, temperamental, and pompous personality.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "mick4", name: "Daisy Duck", price: 12.90, movieTitle: "mickey and friends", description: "Daisy is an anthropomorphic white duck, but has large eyelashes and ruffled tail feathers to suggest a skirt. She is often seen wearing a hair bow, blouse, and shoes.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "mick5", name: "Goofy", price: 13.20, movieTitle: "mickey and friends", description: "Goofy is a tall, anthropomorphic dog who typically wears a turtle neck and vest, with pants, shoes, white gloves, and a tall hat originally designed as a rumpled fedora.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "mick6", name: "Pluto", price: 12.80, movieTitle: "mickey and friends", description: "Pluto is a yellow-orange color, medium-sized, short-haired dog with black ears. He is a happy and cheerful dog, extremely loyal to Mickey and gets into trouble with the intelligence to extradite himself.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "moan1", name: "Mohana", price: 13.90, movieTitle: "moana", description: "Moana is a sea-loving, strong-willed wayfarer. Though she has moments of self-doubt, she has great pride in who she is, and doesn't back away from new challenges.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "moan2", name: "Baby Mohana", price: 12.90, movieTitle: "moana", description: "Moana is a sea-loving, strong-willed wayfarer. Though she has moments of self-doubt, she has great pride in who she is, and doesn't back away from new challenges.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pino1", name: "Pinocchio", price: 14.60, movieTitle: "pinocchio", description: "Pinocchio was carved out of a piece of wood by the old wood-carver Geppetto. The puppet acts like a human child: he frequently gets into trouble and is often impulsive and mischievous. When he tells a lie, his nose grows longer, and when he tells the truth, his nose resumes its normal size.", labels: ["Male", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pino2", name: "Geppetto", price: 13.30, movieTitle: "pinocchio", description: "Geppetto is a kindly, old Italian woodcarver and the creator of Pinocchio, a wooden puppet that is brought to life by the Blue Fairy per Geppetto's wish to have a son.", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pino3", name: "The Blue Fairy", price: 12.60, movieTitle: "pinocchio", description: "The Blue Fairy is soft-spoken and sweet. She is also a motherly figure to Pinocchio and guides him.", labels: ["Female", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pino4", name: "Jiminy Cricket", price: 12.70, movieTitle: "pinocchio", description: "Jiminy Cricket is a clever, kind, caring and brave small cricket. He will do anything for a friend, even if it's life-threatening.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pino5", name: "Figaro with Cleo", price: 12.10, movieTitle: "pinocchio", description: "Figaro is Geppetto's pet tuxedo cat, a pint-sized feline with a heart of gold who loves Pinocchio very much. He is always looking out for Pinocchio.\nCleo is Geppetto's affectionate, innocent, sweet, obedient, and loyal pet goldfish", labels: ["Animal", "Side character"], inStock: true, createdAt: 1684162968586 },
        { _id: "pooh1", name: "Winnie-the-Pooh", price: 16.80, movieTitle: "winnie the pooh", description: "Winnie-the-Pooh, or Pooh for short, is an anthropomorphic, soft-voiced, cuddly, loveable and quiet bear. Despite being naïve and slow-witted, he is a friendly, thoughtful and sometimes insightful, who is always willing to help his friends and try his best.", labels: ["Animal", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pooh2", name: "Tigger", price: 15.90, movieTitle: "winnie the pooh", description: "Tigger is known for his distinctive orange and black stripes, large eyes, a long chin, a springy tail, and his love of bouncing. As he says himself, \"Bouncing is what Tiggers do best\". Tigger never refers to himself as a tiger, but as a \"Tigger\".", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pooh3", name: "Eeyore", price: 15.70, movieTitle: "winnie the pooh", description: "Eeyore is a pessimistic, gloomy, depressed, anhedonic, old grey stuffed donkey who is a friend of Winnie-the-Pooh.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "pooh4", name: "Piglet", price: 16.30, movieTitle: "winnie the pooh", description: "Mostly due to his small size and flimsiness, Piglet is an incredibly timid, fragile, and insecure animal. He apparently suffers from anxiety and is often seen cowering in fear in even the tamest moments. Piglet also has a speech impediment that causes him to stutter.", labels: ["Animal", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "snow1", name: "Snow White", price: 15.20, movieTitle: "snow white", description: "Snow White is a kind and gentle princess, with lips red as a rose and skin white as snow. She is not yet an adult woman, but a girl in her puberty years.", labels: ["Female", "Main character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "snow2", name: "The Evil Queen", price: 12.50, movieTitle: "snow white", description: "The Evil Queen is cold, sadistic, cruel, and extremely vain, owning a magic mirror, and obsessively desiring to remain the \"fairest in the land\".", labels: ["Female", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "snow3", name: "Sleepy", price: 13.10, movieTitle: "snow white", description: "Sleepy is very lazy. He likes to sleep as much as he canwhen he's not at work in the mine. He yawns so much because he just can't stop himself", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "snow4", name: "Sneezy", price: 12.90, movieTitle: "snow white", description: "Sneezy doesn't sneeze all the time, just at the wrong time like when he doesn't want anyone to know where he is!", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "snow5", name: "Dopey", price: 13.20, movieTitle: "snow white", description: "Dopey isn't really dopey. He just likes having fun and playing tricks. He never minds if he looks silly while he's playing his games!", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
        { _id: "snow6", name: "Grumpy", price: 12.80, movieTitle: "snow white", description: "No matter what anyone says, Grumpy is always complaining. He never agrees with anyone! But, if any of his friends are in trouble, he's always the first to rescue.", labels: ["Male", "Side character"], "inStock": true, createdAt: 1684162968586 },
    ]
}