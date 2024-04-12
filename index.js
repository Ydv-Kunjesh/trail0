// //import fetch from "node-fetch";
// jsonfile=require('jsonfile');
// const moment = require('moment');
// const crypto = require('crypto');
// // const random = require('random');
// //import random as random from 'random';

// //import random from 'random'
// const random = import('random');

// simpleGit = require('simple-git');

// FILE_PATH = './data.json';


// DATE = moment().subtract(1,'y').format();

// data ={date: DATE}

// jsonfile.writeFile(FILE_PATH, data, () => {
//     simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();})


// makeCommit = n => {
//     if(n===0) return simpleGit.push();
//     x = crypto.randomInt(0,52);
//     y = crypto.randomInt(0,6);
//     DATE = moment().subtract(1,'y').add(1, 'd').add(x, 'w').add(y, 'd').format();

// data ={date: DATE}

// jsonfile.writeFile(FILE_PATH, data, () => {
//     simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }),
//     makeCommit.bind(this, --n)
// }
// )



// }

// makeCommit(120)




// // jsonfile.readFile(FILE_PATH, function(err, obj) {
// //     if (err) {
// //         console.error(err);
// //     } else {
// //         console.log(obj);
// //     }
// // })

const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
//const random = import('random')
random =  require("crypto")
const FILE_PATH = "./data.json";

const makeCommit = n =>{
    if(n===0) return simpleGit().push();
    const x = random.randomInt(0,51);
    const y = random.randomInt(0,6)
    const DATE = moment().subtract(2.5, 'y').add(1, 'd')
                     .add(x, 'w').add(y, 'd').format();

    const data = {
        date: DATE
    }

    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE },
        makeCommit.bind(this, --n));
    });
}

makeCommit(5550)