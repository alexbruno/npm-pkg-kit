export default `#!/usr/bin/env node

import commander, { Command } from 'commander'
import pack from '../package.json'

commander.version(pack.version).description(pack.description)

commander
  .command('log <name>')
  .description('Log a message on terminal')
  .option('-p, --param', 'Param test')
  .action((name: string, cmd: Command) => {
    console.log(name, cmd.opts())
  })

commander.parse(process.argv)
`
