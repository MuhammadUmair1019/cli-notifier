const alert = require('./index')

console.clear()

alert({type: `info`, msg: `Umair is awesome!`})
alert({type: `error`, msg: `Something went wrong!`})
alert({type: `warning`, msg: `cli-notifier are cool!`})
alert({type: `success`, msg: `Everything finished!`})
alert({type: `success`, msg: `Everything finished!`, name: `DONE`})
alert()
