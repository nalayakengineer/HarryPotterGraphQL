
# Harry Potter GraphQL Api

Disclaimer - This serverless GraphQL api is just for learning purpose.<br />
This is based on the RESTAPI of Harry Potter available at:<br />
<strong> <a href="https://potterapi.com">Harry Potter Api</a> </strong>




### Samples:

Query:
```graphql
query {
 character{
    name
    bloodStatus
 }
}
```

Response:
```json
{
    "data": {
        "character": [
            {
                "name": "Severus Snape",
                "bloodStatus": "half-blood"
            }
        ]
    }
}
```

Query:
```graphql
query {
 character(name:"Harry Potter")
 {
     bloodStatus
     school
     alias
     wand
     house
 }
 house{
     name
 }
 sortingHat
 randomSpell{
     spell
     effect
 }
}
```
Response:
```json
{
    "data": {
        "character": [
            {
                "bloodStatus": "half-blood",
                "school": "Hogwarts School of Witchcraft and Wizardry",
                "alias": "The Boy Who Lived",
                "wand": "Holly, 11\", phoenix feather",
                "house": "Gryffindor"
            }
        ],
        "house": [
            {
                "name": "Gryffindor"
            },
            {
                "name": "Ravenclaw"
            },
            {
                "name": "Slytherin"
            },
            {
                "name": "Hufflepuff"
            }
        ],
        "sortingHat": "Ravenclaw",
        "randomSpell": {
            "spell": "Extinguishing",
            "effect": "puts out fires"
        }
    }
}
```

<strong>If you want to try this code and run.</strong>

1. Clone this repository to your local machine
2. yarn install ( to install the dependencies)
3. yarn start

<h2>Dependecies:</h2>
<ul>
    <li>"serverless (Framework)"</li>
    <li>"apollo-server-lambda": "^2.2.2"</li>
    <li>"babel-polyfill": "^6.26.0"</li>
    <li>"graphql": "^14.0.2"</li>
</ul>

<h2>Dev Dependencies:</h2>
<ul>
    <li>"aws-sdk": "^2.192.0"</li>
    <li>"babel-core": "^6.26.0"</li>
    <li>"babel-loader": "^7.1.2"</li>
    <li>"babel-preset-env": "^1.6.1"</li>
    <li>"body-parser": "^1.15.2"</li>
    <li>"cors": "2.8.4"</li>
    <li>"env-cmd": "^5.0.0"</li>
    <li>"imports-loader": "^0.7.1"</li>
    <li>"jsonfile": "^4.0.0"</li>
    <li>"serverless-offline": "^3.15.3"</li>
    <li>"serverless-webpack": "^4.1.0"</li>
    <li>"webpack": "^3.8.1"</li>
    <li>"webpack-node-externals": "^1.6.0"</li>
</ul>