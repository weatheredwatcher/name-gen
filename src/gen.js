const https = require('https')

module.exports = (args) => {
    const race = (args.race ? args.race : 'any');
    const gender = (args.gender ? args.gender : 'any');
    const options = new URL('https://api.genr8rs.com/Generator/Gaming/Rpg/NameGenerator?genr8rsUserId=1558757955.64345ce8c2439d155&_sGenre=fantasy&_sRace=' + race + '&_sGender=' + gender);

    const req = https.get(options, (res) => {
        
        res.on('data', (d) => {

                process.stdout.write(d);
        });
    }).on('error', (e) => {
        console.error(e);
    });
  }