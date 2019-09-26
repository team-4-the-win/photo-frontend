'use strict'

// EVENT HANDLER
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// CREATE AN UPLOAD
const onCreateUpload = function (event) {
  event.preventDefault()
  $('.display').html('<img class="img-fluid" src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif">')
  const data = new FormData(event.target)
  api.upload(data)
    .then(ui.onUploadSuccess)
    .catch(console.error)
}

// SEE ALL FILES (GET)
const onGetUploads = function (event) {
  event.preventDefault()
  api.getUploads()
    .then(ui.onGetUploadsSuccess)
    .catch(console.error)
}

// UDPATE THE FILE (PATCH)
const onUpdateUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateUpload(data)
    .then(ui.onUpdateUploadSuccess)
    .catch(console.error)
}
// LISTEN FOR EVENTS

const addHandlers = function () {
  $('#create-files-form').on('submit', onCreateUpload)
  $('#get-files-button').on('click', onGetUploads)
  $('#edit-files-form').on('submit', onUpdateUpload)
}

module.exports = {
  onCreateUpload,
  onGetUploads,
  addHandlers
}
