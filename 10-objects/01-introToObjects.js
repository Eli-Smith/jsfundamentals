/*
    - objects store enumerable properties in the key/value pairs format
    - denoted by {}
*/

let netflix = {
    id: 1,
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            },
            {
                episode: 6,
                episodeName: 'Hot Girl'
            }
        ]
        }
    },
    season2: {},
    season3: {},
};

/*
    - Where arrays use bracket ( [] )notation, objects use what is called dot notation ( . )
*/

// console.log('All data:', netflix);

console.log(`Season Info`, netflix.season1.seasonInfo)

console.log('Specific episode name', netflix.season1.seasonInfo.episodeInfo[3].episodeName)

console.log(`Episode:`, netflix.season1.seasonInfo.episodeInfo[5].episode, `Episode Name:`, netflix.season1.seasonInfo.episodeInfo[5].episodeName);

/*
    JSON Objects

    - JSON stands for JavaScript Object Notation
    - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
    - JSON exists as a string - useful when we want to fetch data from a sever. It needs to be converted to a native JavaScript Object if you want to access the data
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnocks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//Object.keys & Object.values
// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad.duck)); // returns the index of each character in the string 'Daffy Duck'
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.toonSquad));

/*
    - Object bracket notation
        - object bracket notation also allows us to parsse through an objecct and pull out specific information
        - using object bracket notation can be useful if we want to store a key from an object in a variable
        -all keys in an object are strings even though they're not wrapped in quotes - which is why this will work
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'Sun Flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

// keys in an object are strings - shown below
let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

// This is standard . notation
console.log(garden.vegetable);

// object bracket notation
let zuchini = garden['vegetable']; // we can access keys in an object by specifying the name of the object followed by the key want to grab in brackets. 
//The key name that we pass into our object needs to be a string (wrapped in quotes) because all keys in an object are strings
console.log(zuchini);

let baking = {};
baking['zucchini'] = ['better make some bread!']; // setting a key/value pair using object bracket notation
console.log(baking);

console.log(baking[garden['vegetable']]);

// using object bracket notation is a good idea when you may not be able to use dot notation to dig through and object

let testObject = {
    "Spaces Here": true,
    noSpaces: true
};

console.log(testObject.noSpaces);
console.log(testObject["Spaces Here"]);
// Our use case for object bracket notation is if a key in our object has spaces 