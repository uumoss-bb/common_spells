#!/usr/bin/env node
import chalk from 'chalk'
import { exec, echo } from 'shelljs'

const fetchAndPull = async () => {
  echo(chalk.yellow.italic('git fetch'))
  exec('git fetch')
  echo(chalk.yellow.italic('git pull'))
  await exec(`git pull`)
  echo(chalk.green.italic("Update Complete."))
}

export default fetchAndPull
