const menus = {
    main: `
      name-gen [command] <options>
  
      gen ................ show weather for today
      version ............ show package version
      help ............... show help menu for a command`,
  
    gen: `
      name-gen gen <options>
  
      --race, -r ..... the race to use
      --gender, -g .... the gender to use

      Without options, you get random`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main);
  }