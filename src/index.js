const minimist = require('minimist')
module.exports = () => {

    const args = minimist(process.argv.slice(2))

    const cmd = args._[0]

  switch (cmd) {
    case 'gen':
      require('./gen')(args)
      break
    case 'help':
      require('./help')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
   

}

//@todo: add better error handling
//@todo: pretty format results
