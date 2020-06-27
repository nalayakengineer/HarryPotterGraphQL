const spells = [
    {
        "_id": "5b74ebd5fb6fc0739646754c",
        "spell": "Aberto",
        "type": "Charm",
        "effect": "opens objects"
    },
    {
        "_id": "5b74ecfa3228320021ab622b",
        "spell": "Accio",
        "type": "Charm",
        "effect": "Summons an object",

    },
    {
        "_id": "5b74ed2f3228320021ab622c",
        "spell": "Age Line",
        "type": "Enchantment",
        "effect": "Hides things from younger people",

    },
    {
        "_id": "5b74ed453228320021ab622d",
        "spell": "Aguamenti",
        "type": "Charm",
        "effect": "shoots water from wand",

    },
    {
        "_id": "5b74ed583228320021ab622e",
        "spell": "Alarte Ascendare",
        "type": "Spell",
        "effect": "shoots things high in the air",

    },
    {
        "_id": "5b74ed6d3228320021ab622f",
        "spell": "Alohomora",
        "type": "Charm",
        "effect": "opens locked objects",

    },
    {
        "_id": "5b74ed823228320021ab6230",
        "spell": "Anapneo",
        "type": "Spell",
        "effect": "clears the target's airway",

    },
    {
        "_id": "5b74ed933228320021ab6231",
        "spell": "Anteoculatia",
        "type": "Hex",
        "effect": "turns head hair into antlers",

    },
    {
        "_id": "5b74eda53228320021ab6232",
        "spell": "Anti-Cheating",
        "type": "Spell",
        "effect": "prevents cheating on exams",

    },
    {
        "_id": "5b74edb53228320021ab6233",
        "spell": "Aparecium",
        "type": "Spell",
        "effect": "reveals invisible ink",

    },
    {
        "_id": "5b74edc23228320021ab6234",
        "spell": "Apparate",
        "type": "Spell",
        "effect": "teleportation spell",

    },
    {
        "_id": "5b74edcf3228320021ab6235",
        "spell": "Arania Exumai",
        "type": "Spell",
        "effect": "blasts away spiders",

    },
    {
        "_id": "5b74ede13228320021ab6236",
        "spell": "Aqua Eructo",
        "type": "Spell",
        "effect": "shoots water from wand",

    },
    {
        "_id": "5b74edee3228320021ab6237",
        "spell": "Arresto Momentum",
        "type": "Spell",
        "effect": "slows down objects",

    },
    {
        "_id": "5b74edfa3228320021ab6238",
        "spell": "Ascendio",
        "type": "Spell",
        "effect": "moves an object upward",

    },
    {
        "_id": "5b74ee1d3228320021ab6239",
        "spell": "Avada Kedavra",
        "type": "Curse",
        "effect": "murders opponent",

    },
    {
        "_id": "5b74ee2f3228320021ab623a",
        "spell": "Avifors",
        "type": "Charm",
        "effect": "turns small objects into birds",

    },
    {
        "_id": "5b74ee453228320021ab623b",
        "spell": "Avis",
        "type": "Spell",
        "effect": "launches birds from your wand",

    },
    {
        "_id": "5b74ee553228320021ab623c",
        "spell": "Babbling Curse ",
        "type": "Curse",
        "effect": "makes a person babble",

    },
    {
        "_id": "5b74ee833228320021ab623d",
        "spell": "Bombarda",
        "type": "Spell",
        "effect": "causes explosions",

    },
    {
        "_id": "5b74ee8d3228320021ab623e",
        "spell": "Bombarda Maxima",
        "type": "Spell",
        "effect": "causes large explosions",

    },
    {
        "_id": "5b74eea03228320021ab623f",
        "spell": "Bubble Head",
        "type": "Charm",
        "effect": "puts a person's head in a protective air bubble",

    },
    {
        "_id": "5b74eeb63228320021ab6240",
        "spell": "Carpe Retractum",
        "type": "Spell",
        "effect": "shoots a rope from a wand to snag things",

    },
    {
        "_id": "5b74eed03228320021ab6241",
        "spell": "Caterwauling",
        "type": "Charm",
        "effect": "detects enemies and emits a scream",

    },
    {
        "_id": "5b74eedd3228320021ab6242",
        "spell": "Cave Inimicum",
        "type": "Charm",
        "effect": "detects enemies and emits an alarm",

    },
    {
        "_id": "5b74eee93228320021ab6243",
        "spell": "Cheering",
        "type": "Charm",
        "effect": "makes a person happy and giddy",

    },
    {
        "_id": "5b74eef43228320021ab6244",
        "spell": "Cistem Aperio",
        "type": "Spell",
        "effect": "opens things",

    },
    {
        "_id": "5b74eefc3228320021ab6245",
        "spell": "Colloportus",
        "type": "Spell",
        "effect": "locks doors",

    },
    {
        "_id": "5b74ef093228320021ab6246",
        "spell": "Colloshoo",
        "type": "Spell",
        "effect": "makes a person's shoes stick to the ground",

    },
    {
        "_id": "5b74ef233228320021ab6247",
        "spell": "Colovaria",
        "type": "Charm",
        "effect": "makes an object change colour",

    },
    {
        "_id": "5b74ef413228320021ab6248",
        "spell": "Confringo",
        "type": "Curse",
        "effect": "explode flames on target",

    },
    {
        "_id": "5b74ef513228320021ab6249",
        "spell": "Confundus",
        "type": "Charm",
        "effect": "used to confuse opponent",

    },
    {
        "_id": "5b74ef633228320021ab624a",
        "spell": "Conjunctivitis",
        "type": "Curse",
        "effect": "damages opponent's eyesight",

    },
    {
        "_id": "5b74ef6f3228320021ab624b",
        "spell": "Cornflake Skin",
        "type": "Curse",
        "effect": "gives a person cereal skin",

    },
    {
        "_id": "5b74ef813228320021ab624c",
        "spell": "Crucio",
        "type": "Curse",
        "effect": "tortures a person",

    },
    {
        "_id": "5b74ef8d3228320021ab624d",
        "spell": "Cushioning",
        "type": "Charm",
        "effect": "helps cushon a fall",

    },
    {
        "_id": "5b74ef9e3228320021ab624e",
        "spell": "Defodio",
        "type": "Spell",
        "effect": "dig out materials",

    },
    {
        "_id": "5b74efbe3228320021ab624f",
        "spell": "Deletrius",
        "type": "Spell",
        "effect": "counters \"Prior Incantato\"",

    },
    {
        "_id": "5b74efd93228320021ab6250",
        "spell": "Densaugeo",
        "type": "Spell",
        "effect": "enlarges teeth",

    },
    {
        "_id": "5b74efe73228320021ab6251",
        "spell": "Deprimo",
        "type": "Spell",
        "effect": "wind damaging spell",

    },
    {
        "_id": "5b74eff13228320021ab6252",
        "spell": "Depulso",
        "type": "Charm",
        "effect": "drives an object away",

    },
    {
        "_id": "5b74effe3228320021ab6253",
        "spell": "Descendo",
        "type": "Spell",
        "effect": "moves an object downwards",

    },
    {
        "_id": "5b74f0083228320021ab6254",
        "spell": "Diffindo",
        "type": "Spell",
        "effect": "splits seams",

    },
    {
        "_id": "5b74f0113228320021ab6255",
        "spell": "Diminuendo",
        "type": "Spell",
        "effect": "shrinks the target",

    },
    {
        "_id": "5b74f01d3228320021ab6256",
        "spell": "Dissendium",
        "type": "Spell",
        "effect": "opens passageways",

    },
    {
        "_id": "5b74f02d3228320021ab6257",
        "spell": "Disillusionment",
        "type": "Charm",
        "effect": "makes the target blend into the surroundings",

    },
    {
        "_id": "5b74f0383228320021ab6258",
        "spell": "Duro",
        "type": "Spell",
        "effect": "makes objects hard",

    },
    {
        "_id": "5b74f0443228320021ab6259",
        "spell": "Drought",
        "type": "Charm",
        "effect": "dries up puddles",

    },
    {
        "_id": "5b74f0593228320021ab625a",
        "spell": "Ears to Kumquats",
        "type": "Spell",
        "effect": "gives a person kumquat ears",

    },
    {
        "_id": "5b74f0723228320021ab625b",
        "spell": "Ear Shriveling ",
        "type": "Curse",
        "effect": "cause a person's ear to shrivel",

    },
    {
        "_id": "5b74f0883228320021ab625c",
        "spell": "Engorgio",
        "type": "Charm",
        "effect": "enlarges an item",

    },
    {
        "_id": "5b74f0b73228320021ab625d",
        "spell": "Ennervate",
        "type": "Spell",
        "effect": "counters Stupefy",

    },
    {
        "_id": "5b74f0c83228320021ab625e",
        "spell": "Entrail-Expelling",
        "type": "Curse",
        "effect": "expel entrails from a body",

    },
    {
        "_id": "5b74f0d73228320021ab625f",
        "spell": "Episkey",
        "type": "Spell",
        "effect": "heals minor injuries",

    },
    {
        "_id": "5b74f0e63228320021ab6260",
        "spell": "Epoximise",
        "type": "Spell",
        "effect": "binds objects together",

    },
    {
        "_id": "5b74f0f13228320021ab6261",
        "spell": "Erecto",
        "type": "Spell",
        "effect": "builds things",

    },
    {
        "_id": "5b74f0fc3228320021ab6262",
        "spell": "Evanesco",
        "type": "Spell",
        "effect": "makes things vanish",

    },
    {
        "_id": "5b74f10a3228320021ab6263",
        "spell": "Everte Statum",
        "type": "Spell",
        "effect": "throws a victim backwards",

    },
    {
        "_id": "5b74f11f3228320021ab6264",
        "spell": "Expecto Patronum",
        "type": "Charm",
        "effect": "creates a Patronus",

    },
    {
        "_id": "5b74f1293228320021ab6265",
        "spell": "Expelliarmus",
        "type": "Charm",
        "effect": "disarms your opponent",

    },
    {
        "_id": "5b74f1393228320021ab6266",
        "spell": "Expulso",
        "type": "Spell",
        "effect": "makes objects explode",

    },
    {
        "_id": "5b74f1423228320021ab6267",
        "spell": "Extinguishing",
        "type": "Spell",
        "effect": "puts out fires",

    },
    {
        "_id": "5b74f14c3228320021ab6268",
        "spell": "Ferula",
        "type": "Spell",
        "effect": "creates bandages",

    },
    {
        "_id": "5b74f15d3228320021ab6269",
        "spell": "Fianto Duri",
        "type": "Charm",
        "effect": "defensive charm",

    },
    {
        "_id": "5b74f16b3228320021ab626a",
        "spell": "Fidelius",
        "type": "Charm",
        "effect": "hides a secret within someone",

    },
    {
        "_id": "5b74f1803228320021ab626b",
        "spell": "Fiendfyre",
        "type": "Curse",
        "effect": "hard to control large fire curse",

    },
    {
        "_id": "5b74f18b3228320021ab626c",
        "spell": "Finestra",
        "type": "Spell",
        "effect": "turns windows to dust",

    },
    {
        "_id": "5b74f19b3228320021ab626d",
        "spell": "Finite",
        "type": "Spell",
        "effect": "finishes spell in the caster's area",

    },
    {
        "_id": "5b74f1a93228320021ab626e",
        "spell": "Finite Incantatum",
        "type": "Spell",
        "effect": "stops any current spells",

    },
    {
        "_id": "5b74f1b83228320021ab626f",
        "spell": "Flagrante",
        "type": "Curse",
        "effect": "multiplies and burns objects upon touch",

    },
    {
        "_id": "5b74f1c53228320021ab6270",
        "spell": "Flagrate",
        "type": "Spell",
        "effect": "allows user to write on objects",

    },
    {
        "_id": "5b74f1ce3228320021ab6271",
        "spell": "Flame Freezing",
        "type": "Charm",
        "effect": "makes flames cool",

    },
    {
        "_id": "5b74f1dd3228320021ab6272",
        "spell": "Flipendo",
        "type": "Jinx",
        "effect": "knocks an object backwards",

    },
    {
        "_id": "5b74f1ee3228320021ab6273",
        "spell": "Flying",
        "type": "Charm",
        "effect": "makes objects fly",

    },
    {
        "_id": "5b74f1f83228320021ab6274",
        "spell": "Fumos",
        "type": "Spell",
        "effect": "a defensive cloud of smoke",

    },
    {
        "_id": "5b74f2043228320021ab6275",
        "spell": "Furnunculus",
        "type": "Curse",
        "effect": "produces boils on opponent",

    },
    {
        "_id": "5b74f2113228320021ab6276",
        "spell": "Geminio",
        "type": "Spell",
        "effect": "duplicates an object",

    },
    {
        "_id": "5b74f2213228320021ab6277",
        "spell": "Glisseo",
        "type": "Spell",
        "effect": "turns stairs into ramps",

    },
    {
        "_id": "5b74f2323228320021ab6278",
        "spell": "Gripping",
        "type": "Charm",
        "effect": "makes it easier to hold things",

    },
    {
        "_id": "5b74f23f3228320021ab6279",
        "spell": "Harmonia Nectere Passus",
        "type": "Spell",
        "effect": "mends broken things",

    },
    {
        "_id": "5b74f24e3228320021ab627a",
        "spell": "Homenum Revelio",
        "type": "Spell",
        "effect": "reveals humans nearby",

    },
    {
        "_id": "5b74f25f3228320021ab627b",
        "spell": "Homonculous",
        "type": "Charm",
        "effect": "lets a person track another's movement on a map",

    },
    {
        "_id": "5b74f2863228320021ab627c",
        "spell": "Homorphus",
        "type": "Charm",
        "effect": "Lockhart's warewolf \"cure\"",

    },
    {
        "_id": "5b74f29a3228320021ab627d",
        "spell": "Horcrux",
        "type": "Curse",
        "effect": "allows wizard to put their soul into an object",

    },
    {
        "_id": "5b74f2ab3228320021ab627e",
        "spell": "Illegibilus",
        "type": "Spell",
        "effect": "makes text unreadable",

    },
    {
        "_id": "5b74f2bb3228320021ab627f",
        "spell": "Immobulus",
        "type": "Charm",
        "effect": "renders target immobile",

    },
    {
        "_id": "5b74f2c93228320021ab6280",
        "spell": "Impedimenta",
        "type": "Charm",
        "effect": "slows an advancing object",

    },
    {
        "_id": "5b74f2d83228320021ab6281",
        "spell": "Imperio",
        "type": "Curse",
        "effect": "controls a person",

    },
    {
        "_id": "5b74f2e83228320021ab6282",
        "spell": "Impervius",
        "type": "Charm",
        "effect": "makes an object repel water",

    },
    {
        "_id": "5b74f2f23228320021ab6283",
        "spell": "Incarcerous",
        "type": "Spell",
        "effect": "ties someone up",

    },
    {
        "_id": "5b74f2ff3228320021ab6284",
        "spell": "Incendio",
        "type": "Spell",
        "effect": "starts a fire",

    },
    {
        "_id": "5b74f3103228320021ab6285",
        "spell": "Lacarnum Inflamarae",
        "type": "Spell",
        "effect": "shoots a fireball from caster's wand",

    },
    {
        "_id": "5b74f31e3228320021ab6286",
        "spell": "Langlock",
        "type": "Spell",
        "effect": "glues opponent's tongue to roof of mouth",

    },
    {
        "_id": "5b74f3313228320021ab6287",
        "spell": "Legilimens",
        "type": "Spell",
        "effect": "allows caster to read the mind of the target",

    },
    {
        "_id": "5b74f33d3228320021ab6288",
        "spell": "Levicorpus",
        "type": "Spell",
        "effect": "hangs target upside down by feet",

    },
    {
        "_id": "5b74f34c3228320021ab6289",
        "spell": "Liberacorpus",
        "type": "Spell",
        "effect": "counter spell to Levicorpus",

    },
    {
        "_id": "5b74f3583228320021ab628a",
        "spell": "Locomotor Mortis",
        "type": "Curse",
        "effect": "locks opponent's legs",

    },
    {
        "_id": "5b74f3653228320021ab628b",
        "spell": "Lumos",
        "type": "Spell",
        "effect": "creates light at wand tip",

    },
    {
        "_id": "5b74f37d3228320021ab628c",
        "spell": "Lumos Maxima",
        "type": "Spell",
        "effect": "creates ball of light that can brighten a room for a long period of time",

    },
    {
        "_id": "5b74f38b3228320021ab628d",
        "spell": "Lumos Solem",
        "type": "Spell",
        "effect": "creates a strong beam of light from the wand",

    },
    {
        "_id": "5b74f39a3228320021ab628e",
        "spell": "Meteolojinx Recanto",
        "type": "Spell",
        "effect": "causes weather effect spells to stop",

    },
    {
        "_id": "5b74f3a83228320021ab628f",
        "spell": "Mimblewimble",
        "type": "Curse",
        "effect": "tongue ties it's target",

    },
    {
        "_id": "5b74f3b53228320021ab6290",
        "spell": "Mobiliarbus",
        "type": "Charm",
        "effect": "moves objects with wand",

    },
    {
        "_id": "5b74f3c23228320021ab6291",
        "spell": "Mobilicorpus",
        "type": "Spell",
        "effect": "moves unconcious bodies",

    },
    {
        "_id": "5b74f3cc3228320021ab6292",
        "spell": "Morsmorde",
        "type": "Spell",
        "effect": "conjures the dark mark",

    },
    {
        "_id": "5b74f3dc3228320021ab6293",
        "spell": "Morsmorde",
        "type": "Spell",
        "effect": "prevents nearby people from listening to conversations",

    },
    {
        "_id": "5b74f3ee3228320021ab6294",
        "spell": "Nox",
        "type": "Spell",
        "effect": "counter to Lumos, turns off light",

    },
    {
        "_id": "5b74f3f93228320021ab6295",
        "spell": "Oculus Reparo",
        "type": "Spell",
        "effect": "repairs eyeglasses",

    },
    {
        "_id": "5b74f4063228320021ab6296",
        "spell": "Obliteration",
        "type": "Charm",
        "effect": "removes footprints",

    },
    {
        "_id": "5b74f4103228320021ab6297",
        "spell": "Obliviate",
        "type": "Charm",
        "effect": "erases memories",

    },
    {
        "_id": "5b74f41f3228320021ab6298",
        "spell": "Obscuro",
        "type": "Spell",
        "effect": "blindfolds the victim",

    },
    {
        "_id": "5b74f42f3228320021ab6299",
        "spell": "Oppugno",
        "type": "Spell",
        "effect": "makes conjured items attack",

    },
    {
        "_id": "5b74f4383228320021ab629a",
        "spell": "Orchideous",
        "type": "Spell",
        "effect": "conjures flowers",

    },
    {
        "_id": "5b74f44f3228320021ab629b",
        "spell": "Periculum",
        "type": "Spell",
        "effect": "makes fireworks from the wand tip",

    },
    {
        "_id": "5b74f45e3228320021ab629c",
        "spell": "Permanent Sticking",
        "type": "Charm",
        "effect": "causes items to permanently stick to things",

    },
    {
        "_id": "5b74f46a3228320021ab629d",
        "spell": "Petrificus Totalus",
        "type": "Spell",
        "effect": "body bind",

    },
    {
        "_id": "5b74f47f3228320021ab629e",
        "spell": "Piertotum Locomotor",
        "type": "Spell",
        "effect": "animates statues and suits of armor",

    },
    {
        "_id": "5b74f48b3228320021ab629f",
        "spell": "Point Me",
        "type": "Charm",
        "effect": "wand acts like a compass",

    },
    {
        "_id": "5b74f4993228320021ab62a0",
        "spell": "Portus",
        "type": "Charm",
        "effect": "makes an object a Portkey",

    },
    {
        "_id": "5b74f4ba3228320021ab62a1",
        "spell": "Priori Incantatem",
        "type": "Spell",
        "effect": "when sibling wands duel, the weaker wand shows all recently cast spells",

    },
    {
        "_id": "5b74f4c43228320021ab62a2",
        "spell": "Prior Incantato",
        "type": "Spell",
        "effect": "reveals a wand's last spell",

    },
    {
        "_id": "5b74f4d53228320021ab62a3",
        "spell": "Protego",
        "type": "Charm",
        "effect": "cause spells to reflect back to the sender",

    },
    {
        "_id": "5b74f4e63228320021ab62a4",
        "spell": "Protego Totalum",
        "type": "Charm",
        "effect": "area protection charm",

    },
    {
        "_id": "5b74f4f93228320021ab62a5",
        "spell": "Quietus",
        "type": "Spell",
        "effect": "counter spell for Sonorous",

    },
    {
        "_id": "5b74f50c3228320021ab62a6",
        "spell": "Reducio",
        "type": "Spell",
        "effect": "returns items to original size. counters Engorgio",

    },
    {
        "_id": "5b74f51a3228320021ab62a7",
        "spell": "Reducto",
        "type": "Spell",
        "effect": "blasts solid objects aside",

    },
    {
        "_id": "5b74f5263228320021ab62a8",
        "spell": "Relashio",
        "type": "Spell",
        "effect": "releases user from binding",

    },
    {
        "_id": "5b74f5333228320021ab62a9",
        "spell": "Rennervate",
        "type": "Spell",
        "effect": "cures unconciousness",

    },
    {
        "_id": "5b74f53d3228320021ab62aa",
        "spell": "Reparo",
        "type": "Spell",
        "effect": "repairs things",

    },
    {
        "_id": "5b74f5453228320021ab62ab",
        "spell": "Repello Muggletum",
        "type": "Spell",
        "effect": "keeps muggles away",

    },
    {
        "_id": "5b74f5503228320021ab62ac",
        "spell": "Repello Inimicum",
        "type": "Spell",
        "effect": "keeps evil beings away",

    },
    {
        "_id": "5b74f5593228320021ab62ad",
        "spell": "Revelio",
        "type": "Spell",
        "effect": "reveals hidden objects",

    },
    {
        "_id": "5b74f5643228320021ab62ae",
        "spell": "Rictusempra",
        "type": "Charm",
        "effect": "tickles target",

    },
    {
        "_id": "5b74f57a3228320021ab62af",
        "spell": "Riddikulus",
        "type": "Spell",
        "effect": "causes target to laugh and defeats Boggarts",

    },
    {
        "_id": "5b74f5873228320021ab62b0",
        "spell": "Salvio Hexia",
        "type": "Spell",
        "effect": "protection against hexes",

    },
    {
        "_id": "5b74f5943228320021ab62b1",
        "spell": "Scourgify",
        "type": "Charm",
        "effect": "cleaning charm",

    },
    {
        "_id": "5b74f5a33228320021ab62b2",
        "spell": "Sectumsempra",
        "type": "Spell",
        "effect": "causes wounds as if slashed by a sword",

    },
    {
        "_id": "5b74f5ac3228320021ab62b3",
        "spell": "Serpensortia",
        "type": "Spell",
        "effect": "produces a snake",

    },
    {
        "_id": "5b74f5b93228320021ab62b4",
        "spell": "Silencio",
        "type": "Spell",
        "effect": "silences target",

    },
    {
        "_id": "5b74f5c63228320021ab62b5",
        "spell": "Slugulus Eructo",
        "type": "Charm",
        "effect": "makes target vomit slugs",

    },
    {
        "_id": "5b74f5d43228320021ab62b6",
        "spell": "Sonorus",
        "type": "Spell",
        "effect": "amplifies voice",

    },
    {
        "_id": "5b74f5e53228320021ab62b7",
        "spell": "Specialis Revelio",
        "type": "Spell",
        "effect": "reveals hidden secrets or magical properties",

    },
    {
        "_id": "5b74f5f83228320021ab62b8",
        "spell": "Stinging Jinx",
        "type": "Jinx",
        "effect": "makes target feel stinging",

    },
    {
        "_id": "5b74f6013228320021ab62b9",
        "spell": "Stupefy",
        "type": "Spell",
        "effect": "knocks out target",

    },
    {
        "_id": "5b74f60c3228320021ab62ba",
        "spell": "Switching Spell",
        "type": "Spell",
        "effect": "switches objects",

    },
    {
        "_id": "5b74f6173228320021ab62bb",
        "spell": "Tarantallegra",
        "type": "Spell",
        "effect": "forces target to dance",

    },
    {
        "_id": "5b74f6223228320021ab62bc",
        "spell": "Tergeo",
        "type": "Spell",
        "effect": "cleans up messes",

    },
    {
        "_id": "5b74f6363228320021ab62bd",
        "spell": "Unbreakable Vow",
        "type": "Spell",
        "effect": "a vow that if broken, kills you",

    },
    {
        "_id": "5b74f64a3228320021ab62be",
        "spell": "Vulnera Sanentur",
        "type": "Spell",
        "effect": "heals target",

    },
    {
        "_id": "5b74f6543228320021ab62bf",
        "spell": "Waddiwasi",
        "type": "Spell",
        "effect": "unsticks an object",

    },
    {
        "_id": "5b74f6613228320021ab62c0",
        "spell": "Wingardium Leviosa",
        "type": "Charm",
        "effect": "makes an object fly",

    }
]

export default spells;