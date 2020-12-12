import { config } from 'dotenv'
config()

import yargs from 'yargs'

const argv = yargs
  .example(`npx ts-node ${__filename} <args>`, 'Do a command (hey you, make this cooler!)')
  .option('name', {
    description: 'name of the person',
    type: 'string',
    required: true,
  })
  .help()
  .alias('help', 'h').argv

const main = async () => {
  console.log(`Hello ${argv.name}, I know your secret (it's "${process.env.SUPER_SECRET}")`)
}

main()
