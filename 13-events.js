const EventEmitter = require('events');

const customEmitter = new EventEmitter()


customEmitter.on('response',(name,id) => {
    console.log(`data recieved ${name} with id:${id}`)
})


customEmitter.on('response',() => {
    console.log(`some other logic here`)
})

customEmitter.emit('response','john',34)





// const { readFile, writeFile } = require("fs").promises;
// // const util = require("util");
// // const readFilePromise = util.promisify(readFile);
// // const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf8");
//     const second = await readFile("./content/second.txt", "utf8");
//     await writeFile(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`,
//       { flag: "a" }
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// // const getText = (path) => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, "utf8", (err, data) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(data);
// //       }
// //     });
// //   });
// // };

// // getText("./content/first.txt")
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));
