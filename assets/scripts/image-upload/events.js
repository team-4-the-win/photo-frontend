'use strict'

// EVENT HANDLER

const api = require('./api')
const ui = require('./ui')

const onCreateUpload = function (event) {
  event.preventDefault()

  $('.display').html('<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif">')
  const data = new FormData(event.target)
  console.log(...data)
  api.upload(data)
    .then(ui.onUploadSuccess)
    .catch(console.error)
}

// LISTEN FOR EVENTS

const addHandlers = function () {
  $('form').on('submit', onCreateUpload)
}

module.exports = {
  onCreateUpload,
  addHandlers
}
