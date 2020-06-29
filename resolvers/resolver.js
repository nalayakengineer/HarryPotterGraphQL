import characters from '../data/characters'
import houses from '../data/houses'
import spells from '../data/spells'

const character = (_, args) => {
    if (args.input.name) {
        return characters.filter(character => character.name === args.input.name)
    }
    if (args.input.role) {
        return characters.filter(character => character.role === args.input.role)
    }
    if (args.input.alias) {
        return characters.filter(character => character.alias === args.input.alias)
    }
    var character = characters[Math.floor(Math.random() * characters.length)]
    return [character]

}

const house = (_, args) => {
    if (args.name) {
        return houses.filter(house => house.name === args.name)
    }
    return houses
}

const sortingHat = () => {
    var house = houses[Math.floor(Math.random() * houses.length)]
    return house.name
}

const randomSpell = () => {
    var spell = spells[Math.floor(Math.random() * spells.length)]
    return spell
}


export const resolvers = {
    Query: {
        character,
        house,
        sortingHat,
        randomSpell
    }
}
