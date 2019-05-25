const minimist = require('minimist')
const https = require('https')
module.exports = () => {
    const args = minimist(process.argv.slice(2))

    const options = new URL('https://api.genr8rs.com/Generator/Gaming/Rpg/NameGenerator?genr8rsUserId=1558757955.64345ce8c2439d155&_sGenre=fantasy&_sRace=' + args.race + '&_sGender=' + args.gender);

    const req = https.get(options, (res) => {
        
        res.on('data', (d) => {

                process.stdout.write(d);
        });
    }).on('error', (e) => {
        console.error(e);
    });

    console.log('first: ',  args.gender)
    console.log('second: ' , args.race)
}

//@todo: add help
//@todo: set defaults to 'any'
//@todo: add better error handling
//@todo: pretty format results
