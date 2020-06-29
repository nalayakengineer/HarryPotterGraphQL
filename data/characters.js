const characters = [
    {
        "_id": "5a0fa4daae5bc100213c232e",
        "name": "Hannah Abbott",
        "role": "Student",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a0fa54aae5bc100213c232f",
        "name": "Bathsheda Babbling",
        "role": "Professor, Ancient Runes",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a0fa5deae5bc100213c2330",
        "name": "Ludo Bagman",
        "role": "Head, Department of Magical Games and Sports",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a0fa60aae5bc100213c2331",
        "name": "Bathilda Bagshot",
        "role": "Author, A History Of Magic",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a0fa648ae5bc100213c2332",
        "name": "Katie Bell",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "Lord Voldemort",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a0fa67dae5bc100213c2333",
        "name": "Cuthbert Binns",
        "role": "Professor, History of Magic",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "ghost"
    },
    {
        "_id": "5a0fa6bbae5bc100213c2334",
        "name": "Phineas Nigellus Black",
        "role": "(Formerly) Headmaster of Hogwarts",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a0fa772ae5bc100213c2337",
        "name": "Regulus Black",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a0fa7dcae5bc100213c2338",
        "name": "Sirius Black",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Padfoot",
        "animagus": "black dog",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a0fa842ae5bc100213c2339",
        "name": "Amelia Bones",
        "role": "Head, Department of Magical Law Enforcement",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a0fa86dae5bc100213c233a",
        "name": "Susan Bones",
        "role": "Student",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a0fa8a6ae5bc100213c233b",
        "name": "Terry Boot",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a107e1ae0686c0021283b19",
        "name": "Lavender Brown",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "rat",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a107e4ae0686c0021283b1a",
        "name": "Millicent Bulstrode",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a107ee3e0686c0021283b1c",
        "name": "Frank Bryce",
        "role": "Gardener, Riddle Family",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a107ebee0686c0021283b1b",
        "name": "Charity Burbage",
        "role": "Professor, Muggle Studies",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "Lord Voldemort",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a107f17e0686c0021283b1d",
        "name": "Alecto Carrow",
        "role": "Professor, Muggle Studies",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a107f60e0686c0021283b1e",
        "name": "Amycus Carrow",
        "role": "Professor, Dark Arts",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a107f9be0686c0021283b1f",
        "name": "Reginald Cattermole",
        "role": "Employee, Magical Maintenance Department",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a107fc9e0686c0021283b20",
        "name": "Mary Cattermole",
        "wand": "Cherry, 8 3/4\", unicorn hair",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a107ffee0686c0021283b21",
        "name": "Cho Chang",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "patronus": "swan",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a108023e0686c0021283b22",
        "name": "Penelope Clearwater",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Penny",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a108047e0686c0021283b23",
        "name": "Michael Corner",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1093eb3dc2080021cd8753",
        "name": "Crabbe",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a10942a3dc2080021cd8754",
        "name": "Vincent Crabbe",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "Lord Voldemort",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a10944f3dc2080021cd8755",
        "name": "Colin Creevey",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "human"
    },
    {
        "_id": "5a10947c3dc2080021cd8756",
        "name": "Dennis Creevey",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "human"
    },
    {
        "_id": "5a1094a53dc2080021cd8757",
        "name": "Dirk Cresswell",
        "role": "Head, Goblin Liason Office",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "human"
    },
    {
        "_id": "5a1094dc3dc2080021cd8758",
        "name": "Bartemius Crouch Sr.",
        "role": "Head, Department of International Magical Cooperation",
        "alias": "Barty",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1094fa3dc2080021cd8759",
        "name": "Bartemius Crouch Jr.",
        "alias": "Barty",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a10951a3dc2080021cd875a",
        "name": "John Dawlish",
        "role": "Auror",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1095693dc2080021cd875b",
        "name": "Fleur Delacour",
        "role": "Student",
        "school": "Beauxbatons Academy of Magic",
        "wand": "Rosewood, 9 1/2\", veela hair",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "quarter-villa",
        "species": "part-human"
    },
    {
        "_id": "5a1095873dc2080021cd875c",
        "name": "Gabrielle Delacour",
        "role": "Student",
        "school": "Beauxbatons Academy of Magic",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "quarter-villa",
        "species": "part-human"
    },
    {
        "_id": "5a1095af3dc2080021cd875d",
        "name": "Dedalus Diggle",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1095e53dc2080021cd875e",
        "name": "Amos Diggory",
        "role": "Employee, Department for the Regulation and Control of Magical Creatures",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1096253dc2080021cd875f",
        "name": "Cedric Diggory",
        "role": "Student",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Ash, 12 1/4\", unicorn hair",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a10964d3dc2080021cd8760",
        "name": "Elphias Doge",
        "role": "Special Advisor to the Wizengamot",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1096743dc2080021cd8761",
        "name": "Antonin Dolohov",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1096b33dc2080021cd8762",
        "name": "Aberforth Dumbledore",
        "role": "Owner, Hog's Head Inn",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Ab",
        "patronus": "goat",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1097653dc2080021cd8763",
        "name": "Albus Dumbledore",
        "role": "Headmaster, Hogwarts",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Elder, 15\", thestral tail hair",
        "boggart": "Ariana (sister)",
        "patronus": "phoenix",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a10977d3dc2080021cd8764",
        "name": "Ariana Dumbledore",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1097943dc2080021cd8765",
        "name": "Dudley Dursley",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a1097a23dc2080021cd8766",
        "name": "Marjorie Dursley",
        "alias": "Marge",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a1097aa3dc2080021cd8767",
        "name": "Petunia Dursley",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a1097b03dc2080021cd8768",
        "name": "Vernon Dursley",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a1097d53dc2080021cd8769",
        "name": "Marietta Edgecombe",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1098093dc2080021cd876a",
        "name": "Everard",
        "role": "(former) Headmaster, Hogwarts",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a10982c3dc2080021cd876b",
        "name": "Arabella Figg",
        "role": "Dealer of cross-bread cats and kneazies",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "squib",
        "species": "human"
    },
    {
        "_id": "5a1098653dc2080021cd876c",
        "name": "Argus Filch",
        "role": "Caretaker, Hogwarts",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "squib",
        "species": "human"
    },
    {
        "_id": "5a1098bd3dc2080021cd876d",
        "name": "Justin Finch-Fletchley",
        "role": "Student",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "Lord Voldemort ",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1098fd3dc2080021cd876e",
        "name": "Seamus Finnigan",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "banshee",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1099353dc2080021cd876f",
        "name": "Marcus Flint",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a10995b3dc2080021cd8770",
        "name": "Nicolas Flamel",
        "role": "Alchemist",
        "school": "Beauxbatons Academy of Magic",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1099893dc2080021cd8771",
        "name": "Mundungus Fletcher",
        "role": "Dealer of Wizarding Artifacts",
        "alias": "Dung",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1099cf3dc2080021cd8772",
        "name": "Filius Flitwick",
        "role": "Professor, Charms",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "Lord Voldemort",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "part-goblin"
    },
    {
        "_id": "5a1099f93dc2080021cd8773",
        "name": "Cornelius Fudge",
        "role": "Minister of Magic",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109a1a3dc2080021cd8774",
        "name": "Marvolo Gaunt",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109a253dc2080021cd8775",
        "name": "Merope Gaunt",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109a2c3dc2080021cd8776",
        "name": "Morfin Gaunt",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109a553dc2080021cd8777",
        "name": "Anthony Goldstein",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a109a763dc2080021cd8778",
        "name": "Goyle Sr.",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109aa03dc2080021cd8779",
        "name": "Gregory Goyle",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109af13dc2080021cd877a",
        "name": "Hermione Granger",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Vine wood, 10 3/4\", dragon heartstring",
        "boggart": "failure",
        "patronus": "otter",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "human"
    },
    {
        "_id": "5a109b693dc2080021cd877b",
        "name": "Mykew Gregorovitch",
        "role": "Wand Maker",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109b873dc2080021cd877c",
        "name": "Fenrir Greyback",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "werewolf"
    },
    {
        "_id": "5a109bb33dc2080021cd877d",
        "name": "Gellert Grindelwald",
        "school": "Durmstrang Institute",
        "alias": "Percival Graves",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109bde3dc2080021cd877e",
        "name": "Wilhelmina Grubbly-Plank",
        "role": "Professor, Care of Magical Creatures",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109bfc3dc2080021cd877f",
        "name": "Godric Gryffindor",
        "role": "Founder, Hogwarts",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109c3d3dc2080021cd8780",
        "name": "Rubeus Hagrid",
        "role": "Groundkeeper, Professor, Care of Magical Creatures",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Oak, 16\", unknown core",
        "boggart": "Lord Voldemort",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "half-giant"
    },
    {
        "_id": "5a109c5c3dc2080021cd8781",
        "name": "Rolanda Hooch",
        "role": "Quidditch Referee ",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109c813dc2080021cd8782",
        "name": "Mafalda Hopkirk",
        "role": "Assistant, mproper Use of Magic Office",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109c993dc2080021cd8783",
        "name": "Helga Hufflepuff",
        "role": "Founder, Hogwarts",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109cb83dc2080021cd8784",
        "name": "Angelina Johnson",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109cd33dc2080021cd8785",
        "name": "Lee Jordan",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "River",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109cf73dc2080021cd8786",
        "name": "Bertha Jorkins",
        "role": "Department of Magical Games and Sports Employee",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109d2d3dc2080021cd8787",
        "name": "Igor Karkaroff",
        "role": "Headmaster, Durmstrang",
        "school": "Durmstrang Institute",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109d4a3dc2080021cd8788",
        "name": "Viktor Krum",
        "role": "Bulgarian Quiddich Seeker",
        "school": "Durmstrang Institute",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109d893dc2080021cd8789",
        "name": "Bellatrix Lestrange",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Bella",
        "wand": "Walnut, 10 3/4\", dragon heartstring",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109d9f3dc2080021cd878a",
        "name": "Rabastan Lestrange",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109dab3dc2080021cd878b",
        "name": "Rodolphus Lestrange",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109de83dc2080021cd878c",
        "name": "Gilderoy Lockhart",
        "role": "Professor, Defense Against the Dark Arts",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Cherry, 9\", dragon heartstring",
        "boggart": "cornish pixies",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a109e143dc2080021cd878d",
        "name": "Alice Longbottom",
        "role": "Auror (formerly)",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109e1e3dc2080021cd878e",
        "name": "Frank Longbottom",
        "role": "Auror (formerly)",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109e253dc2080021cd878f",
        "name": "Augusta Longbottom",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109e543dc2080021cd8790",
        "name": "Neville Longbottom",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Cherry, 13\", unicorn hair",
        "boggart": "Severus Snape",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109e943dc2080021cd8791",
        "name": "Luna Lovegood",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Loony Lovegood",
        "patronus": "hare",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109ebd3dc2080021cd8792",
        "name": "Xenophilius Lovegood",
        "role": "Editor, The Quibbler",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Xeno",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109f053dc2080021cd8793",
        "name": "Remus Lupin",
        "role": "Professor, Defence Against the Dark Arts",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Moony",
        "wand": "Cypress, 10 1/4\", unicorn hair",
        "boggart": "full moon",
        "patronus": "wolf",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "werewolf"
    },
    {
        "_id": "5a109f433dc2080021cd8794",
        "name": "Walden Macnair",
        "role": "Executioner, Committee of Disposal of Dangerous Creatures",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a109f8b3dc2080021cd8795",
        "name": "Draco Malfoy",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Hawthorn, 10\", unicorn hair",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109fa83dc2080021cd8796",
        "name": "Lucius Malfoy",
        "role": "School Governer of Hogwarts",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a109fde3dc2080021cd8797",
        "name": "Narcissa Malfoy",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1222c50f5ae10021650d6d",
        "name": "Madam Malkin",
        "role": "Shop Owner, Madam Malkin's Robes for All Occasions",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12231d0f5ae10021650d6e",
        "name": "Olympe Maxime",
        "role": "Headmistress, Beauxbatons Academy of Magic",
        "school": "Beauxbatons Academy of Magic",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-giant",
        "species": "half-giant"
    },
    {
        "_id": "5a1223720f5ae10021650d6f",
        "name": "Ernest Macmillan",
        "role": "Student",
        "house": "Hufflepuff",
        "school": "Hogwarts Academy of Witchcraft and Wizardry",
        "alias": "Ernie",
        "boggart": "Lord Voldemort",
        "patronus": "boar",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1223ed0f5ae10021650d70",
        "name": "Minerva McGonagall",
        "role": "Professor, Transfiguration",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Fir, 9 1/2\", dragon heartstring",
        "boggart": "Lord Voldemort",
        "patronus": "cat",
        "animagus": "tabby cat",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1225210f5ae10021650d71",
        "name": "Alastor Moody",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Mad-Eye",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1225640f5ae10021650d72",
        "name": "Theodore Nott",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1225a20f5ae10021650d73",
        "name": "Garrick Ollivander",
        "role": "Wandmaker",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Hornbeam, 12 3/4\", dragon heartstring",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1225e30f5ae10021650d74",
        "name": "Pansy Parkinson",
        "role": "Student",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12260f0f5ae10021650d75",
        "name": "Padma Patil",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1226520f5ae10021650d76",
        "name": "Parvati Patil",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "mummy",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1226d70f5ae10021650d77",
        "name": "Peter Pettigrew",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Wormtail",
        "wand": "Chestnut, 9 1/4, dragon heartstring",
        "boggart": "Lord Voldemort",
        "animagus": "rat",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12273f0f5ae10021650d78",
        "name": "Antioch Peverell",
        "wand": "Elder, 15\", Thestral tail hair core",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a12276b0f5ae10021650d79",
        "name": "Cadmus Peverell",
        "role": "Owner of the resurrection stone",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a12279f0f5ae10021650d7a",
        "name": "Ignotus Peverell",
        "role": "Owner of the invisibility cloak",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1227e10f5ae10021650d7b",
        "name": "Irma Pince",
        "role": "Librarian, Hogwarts",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "Lord Voldemort",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1228070f5ae10021650d7c",
        "name": "Sturgis Podmore",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1228930f5ae10021650d7d",
        "name": "Poppy Pomfrey",
        "role": "Matron, Hogwarts Hospital Wing",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12292a0f5ae10021650d7e",
        "name": "Harry Potter",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "The Boy Who Lived",
        "wand": "Holly, 11\", phoenix feather",
        "boggart": "dementor",
        "patronus": "stag",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a12298d0f5ae10021650d7f",
        "name": "James Potter I",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Prongs",
        "wand": "Mahogany, 11\", unknown core",
        "patronus": "stag",
        "animagus": "stag",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1229e10f5ae10021650d80",
        "name": "Lily J. Potter",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Willow, 10 1/4\", unknown core",
        "patronus": "doe",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "human"
    },
    {
        "_id": "5a122a0e0f5ae10021650d81",
        "name": "Ernest Prang",
        "role": "Driver of the Knight Bus",
        "alias": "Ernie",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122a880f5ae10021650d82",
        "name": "Quirinus Quirrell",
        "role": "Professor, Defence Against the Dark Arts",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Alder, 9\", unicorn hair",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a122ac40f5ae10021650d83",
        "name": "Helena Ravenclaw",
        "role": "Ravenclaw House Ghost",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Grey Lady",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "ghost"
    },
    {
        "_id": "5a122aef0f5ae10021650d84",
        "name": "Rowena Ravenclaw",
        "role": "Founder, Hogwarts",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122b320f5ae10021650d85",
        "name": "Mary Riddle",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a122b510f5ae10021650d86",
        "name": "Thomas Riddle",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a122b930f5ae10021650d87",
        "name": "Tom Riddle Sr",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle",
        "species": "human"
    },
    {
        "_id": "5a122c200f5ae10021650d88",
        "name": "Tom Riddle",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Lord Voldemort",
        "wand": "Yew, 13 1/2\", phoenix feather core",
        "boggart": "his own corpse",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a122cbe0f5ae10021650d89",
        "name": "Demelza Robins",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122cf40f5ae10021650d8a",
        "name": "Augustus Rockwood",
        "role": "Unspeakable",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122ea30f5ae10021650d8b",
        "name": "Albert Runcorn",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a122ecc0f5ae10021650d8c",
        "name": "Scabior",
        "role": "Snatcher",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122f3d0f5ae10021650d8d",
        "name": "Newton Scamander ",
        "role": "Author, Fantastic Beasts and Where to Find Them",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Newt ",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122f750f5ae10021650d8e",
        "name": "Rufus Scrimgeour",
        "role": "Head of Auror Office",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a122fc60f5ae10021650d8f",
        "name": "Kingsley Shacklebolt",
        "role": "Auror",
        "patronus": "lynx",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1230070f5ae10021650d90",
        "name": "Stanley Shunpike",
        "role": "Conductor of the Knight Bus",
        "alias": "Stan ",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1230e90f5ae10021650d91",
        "name": "Aurora Sinistra",
        "role": "Professor, Astronomy",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1231fd0f5ae10021650d92",
        "name": "Rita Skeeter",
        "role": "Gossip Correspondant for the Daily Prophet",
        "alias": "Queen of the Quills",
        "animagus": "beetle",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1232600f5ae10021650d93",
        "name": "Horace Slughorn",
        "role": "Professor, Potions",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Cedar, 10 1/4\", dragon heartstring",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12327c0f5ae10021650d94",
        "name": "Salazar Slytherin",
        "role": "Founder, Hogwarts",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1232b10f5ae10021650d95",
        "name": "Hepzibah Smith",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12333f0f5ae10021650d96",
        "name": "Zacharias Smith",
        "role": "Student",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1233bc0f5ae10021650d97",
        "name": "Severus Snape",
        "role": "Professor, Potions",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "patronus": "doe",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1233ff0f5ae10021650d98",
        "name": "Alicia Spinnet",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1234500f5ae10021650d99",
        "name": "Pomona Sprout",
        "role": "Professor, Herbology",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1234820f5ae10021650d9a",
        "name": "Pius Thicknesse",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1234cb0f5ae10021650d9b",
        "name": "Dean Thomas",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "severed hand walking on it's own",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1235060f5ae10021650d9c",
        "name": "Andromeda Tonks",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1235790f5ae10021650d9d",
        "name": "Nymphadora Tonks",
        "role": "Auror",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Tonks",
        "patronus": "wolf",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human (metamorphmagus)"
    },
    {
        "_id": "5a1235c10f5ae10021650d9e",
        "name": "Edward Tonks",
        "alias": "Ted",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "human"
    },
    {
        "_id": "5a12361f0f5ae10021650d9f",
        "name": "Travers",
        "role": "Ministry of Magic Official",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12368a0f5ae10021650da0",
        "name": "Sybill Trelawney",
        "role": "Professor, Divination",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Hazel, 9 1/2\", unicorn hair",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1236eb0f5ae10021650da1",
        "name": "Dolores Umbridge",
        "role": "Head of the Muggle Born Registration Commission",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "wand": "Birch, 8\", dragon heartstring",
        "patronus": "persian cat",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "half-blood",
        "species": "human"
    },
    {
        "_id": "5a1237150f5ae10021650da2",
        "name": "Emmeline Vance",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1237480f5ae10021650da3",
        "name": "Romilda Vane",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a12376d0f5ae10021650da4",
        "name": "Septima Vector",
        "role": "Professor, Arithmancy",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a1237c00f5ae10021650da5",
        "name": "Arthur Weasley",
        "role": "Head, Misuse of Muggle Artifacts ",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "patronus": "weasel",

        "ministryOfMagic": true,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1238070f5ae10021650da6",
        "name": "William Weasley",
        "role": "Curse Breaker, Gringotts Bank",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Bill",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1238350f5ae10021650da7",
        "name": "Charles Weasley",
        "role": "Dragonologist",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Charlie",
        "wand": "Ash, 12\", unicorn hair tail",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a12387a0f5ae10021650da8",
        "name": "Fred Weasley",
        "role": "co-owner of Weasleys' Wizard Wheezes",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1238b20f5ae10021650da9",
        "name": "George Weasley",
        "role": "co-owner of Weasleys' Wizard Wheezes",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1239130f5ae10021650daa",
        "name": "Ginevra Weasley",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Ginny",
        "patronus": "horse",
        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a12393d0f5ae10021650dab",
        "name": "Molly Weasley",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "boggart": "corpses of her family",

        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a12395f0f5ae10021650dac",
        "name": "Percy Weasley",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1239c80f5ae10021650dad",
        "name": "Ronald Weasley",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Ron",
        "wand": "Willow, 14\", unicorn hair tail",
        "boggart": "Aragog",
        "patronus": "jack russell terrier",
        "ministryOfMagic": false,
        "orderOfThePhoenix": true,
        "dumbledoresArmy": true,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a1239f10f5ae10021650dae",
        "name": "Oliver Wood",
        "role": "Student",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123a110f5ae10021650daf",
        "name": "Kennilworthy Whisp",
        "role": "Author, Quiddich Through The Ages",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123a460f5ae10021650db0",
        "name": "Corban Yaxley",

        "ministryOfMagic": true,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": true,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123a710f5ae10021650db1",
        "name": "Blaise Zabini",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123a950f5ae10021650db2",
        "name": "Aragog",
        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "acromantula"
    },
    {
        "_id": "5a123aa70f5ae10021650db3",
        "name": "Bane",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "centaur"
    },
    {
        "_id": "5a123ac60f5ae10021650db4",
        "name": "Beedle the Bard",
        "role": "Fairytale Author",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123af40f5ae10021650db5",
        "name": "Bloody Baron",
        "role": "Slytherin House Ghost",
        "house": "Slytherin",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "ghost"
    },
    {
        "_id": "5a123b110f5ae10021650db6",
        "name": "Buckbeak",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "hippogriff"
    },
    {
        "_id": "5a123b450f5ae10021650db7",
        "name": "Cadogan",
        "role": "Gryffindor Tower Door Guard",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "pure-blood",
        "species": "human"
    },
    {
        "_id": "5a123bfa0f5ae10021650db8",
        "name": "Crookshanks",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "cat"
    },
    {
        "_id": "5a123c260f5ae10021650db9",
        "name": "Dobby",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "house-elf"
    },
    {
        "_id": "5a123c710f5ae10021650dba",
        "name": "Errol",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "Great Grey Owl"
    },
    {
        "_id": "5a123c8c0f5ae10021650dbb",
        "name": "Fang",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "Boarhound"
    },
    {
        "_id": "5a123cb40f5ae10021650dbc",
        "name": "Fat Friar",
        "role": "Hufflepuff House Ghost",
        "house": "Hufflepuff",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "ghost"
    },
    {
        "_id": "5a123cd20f5ae10021650dbd",
        "name": "Fridfwulfa",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "giant"
    },
    {
        "_id": "5a123cf00f5ae10021650dbe",
        "name": "Fat Lady",
        "role": "Gryffindor Tower Door Guard",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "portrait"
    },
    {
        "_id": "5a123d3a0f5ae10021650dbf",
        "name": "Fawkes",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "phoenix"
    },
    {
        "_id": "5a123d520f5ae10021650dc0",
        "name": "Firenze",
        "role": "Professor, Divination",
        "school": "Hogwarts School of Witchcraft and Wizardry",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "centaur"
    },
    {
        "_id": "5a123d680f5ae10021650dc1",
        "name": "Fluffy",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "three-headed dog"
    },
    {
        "_id": "5a123d7c0f5ae10021650dc2",
        "name": "Grawp",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "giant"
    },
    {
        "_id": "5a123d9b0f5ae10021650dc3",
        "name": "Griphook",
        "role": "Employee, Gringotts Wizarding Bank",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "goblin"
    },
    {
        "_id": "5a123db20f5ae10021650dc4",
        "name": "Hedwig",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "Snowy Owl"
    },
    {
        "_id": "5a123dc30f5ae10021650dc5",
        "name": "Hokey",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "house-elf"
    },
    {
        "_id": "5a123de10f5ae10021650dc6",
        "name": "Kreacher",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "house-elf"
    },
    {
        "_id": "5a123df10f5ae10021650dc7",
        "name": "Magorian",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "centaur"
    },
    {
        "_id": "5a123e450f5ae10021650dc8",
        "name": "Myrtle Warren",
        "role": "Student",
        "house": "Ravenclaw",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Moaning Myrtle",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "muggle-born",
        "species": "ghost"
    },
    {
        "_id": "5a123e600f5ae10021650dc9",
        "name": "Mrs. Norris",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "cat"
    },
    {
        "_id": "5a123e870f5ae10021650dca",
        "name": "Great Aunt Muriel",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123e9f0f5ae10021650dcb",
        "name": "Nagini",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "horcrux"
    },
    {
        "_id": "5a123f130f5ae10021650dcc",
        "name": "Nicholas de Mimsy-Porpington",
        "role": "Gryffindor House Ghost",
        "house": "Gryffindor",
        "school": "Hogwarts School of Witchcraft and Wizardry",
        "alias": "Nearly Headless Nick",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "ghost"
    },
    {
        "_id": "5a123f3b0f5ae10021650dcd",
        "name": "Norbert",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "Norwegian Ridgeback"
    },
    {
        "_id": "5a123f7c0f5ae10021650dce",
        "name": "Peeves",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "poltergeist"
    },
    {
        "_id": "5a123f970f5ae10021650dcf",
        "name": "Pigwidgeon",
        "alias": "Pig",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "scops owl"
    },
    {
        "_id": "5a123fbf0f5ae10021650dd0",
        "name": "Madam Rosmerta",
        "role": "Owner, The Three Broomsticks",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "human"
    },
    {
        "_id": "5a123fd20f5ae10021650dd1",
        "name": "Ronan",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "centaur"
    },
    {
        "_id": "5a123fe30f5ae10021650dd2",
        "name": "Trevor",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "toad"
    },
    {
        "_id": "5a123fff0f5ae10021650dd3",
        "name": "Winky",

        "ministryOfMagic": false,
        "orderOfThePhoenix": false,
        "dumbledoresArmy": false,
        "deathEater": false,
        "bloodStatus": "unknown",
        "species": "house-elf"
    }
]

export default characters;