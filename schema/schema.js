const schema = `type Character {
  _id: ID!
  name: String!
  house: String
  patronus: String
  species: String
  bloodStatus: String
  role: String
  school: String
  deathEater: Boolean
  dumbledoresArmy: Boolean
  orderOfThePhoenix: Boolean
  ministryOfMagic: Boolean
  alias: String
  wand: String
  boggart: String
  animagus: String
}

type Houses {
  _id: ID!
  name: String!
  mascot: String
  headOfHouse: String
  houseGhost: String
  founder: String
  school: String
  members: [String]
  values: [String]
  colors: [String]
}
type Spells {
  _id: ID!
  spell: String!
  type: String
  effect: String
}

input characterInput {
  name: String
  _id: ID
  house: String
  role: String
}

type Query {
  character(input: characterInput): [Character]!
  house(name: String): [Houses]!
  sortingHat: String!
  randomSpell: Spells!
}
schema {
  query: Query
}
`

export { schema };