const faker = require('faker');
const fs = require('fs');
const readline = require('readline');

const generateUsers = function (num) {
  function generateUsername(num) {
    return (
      faker.fake("{{hacker.noun}}{{name.firstName}}{{name.lastName}}")
    );
  }

  for (let i = 0; i < num; i++) {
        const user = {};
        user.id = i;
        user.name = generateUsername();
        user.avatar = `https://lambda-five.s3-us-west-1.amazonaws.com/avatar/${i % 11}.png`
        fs.writeFileSync('users.txt', `${JSON.stringify(user)}\n`);
    }
}


function generateSongs(num) {
  const read = readline.createInterface({
    input: fs.createReadStream('users.txt'),
  });
  // for (let i = 0; i < num; i++) {

  //   }
}
