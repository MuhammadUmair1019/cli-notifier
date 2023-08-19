/**
 * CLI Alerts,
 *
 * Cross, platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Muhammad Umair <https://twitter.com/MrUmairAfzal/>
 */
const chalk = require('chalk')
const logSymbols = require('log-symbols')

const logTypes = {
  success: { color: chalk.green, symbol: logSymbols.success },
  warning: { color: chalk.keyword('orange'), symbol: logSymbols.warning },
  info: { color: chalk.blue, symbol: logSymbols.info },
  error: { color: chalk.red, symbol: logSymbols.error }
}

module.exports = options => {
  const defaultOptions = {
    type: 'error',
    msg: 'You forgot to define all options.',
    name: ''
  }

  const opts = { ...defaultOptions, ...options }
  const { type, msg, name } = opts
  const printName = name ? name.toUpperCase() : type.toUpperCase()

  const logType = logTypes[type] || logTypes.error

  const formattedMessage = `${logType.symbol}  ${logType.color.inverse(
    ` ${printName} `
  )} ${logType.color(msg)}\n`

  console.log(`\n${formattedMessage}`)
}
