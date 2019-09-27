'use strict'

// EVENT HANDLER
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// CREATE AN UPLOAD
const onCreateUpload = function (event) {
  event.preventDefault()
  $('.display').html('<img class="img-fluid" src="../../../public/Spinner-1s-85px.gif">')
  const data = new FormData(event.target)
  // console.log(data)
  api.upload(data)
    .then(ui.onUploadSuccess)
    .catch(console.error)
}

// SEE ALL FILES (GET)
const onGetUploads = function () {
  // event.preventDefault()
  api.getUploads()
    .then(ui.onGetUploadsSuccess)
    .catch(console.error)
}

const onGetBrowse = function (event) {
  // event.preventDefault()
  api.getUploads()
    .then(ui.onGetBrowseSuccess)
    .catch(console.error)
}

// UDPATE THE FILE (PATCH)
const onUpdateUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  console.log(id)
  api.updateUpload(data, id)
    .then(ui.onUpdateUploadSuccess)
    .catch(console.error)
}

// DELETE A FILE
const onDeleteFile = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log('id', id)
  api.deleteFile(id)
    .then(ui.onDeleteFileSuccess)
    .catch(console.error)
}

// LISTEN FOR EVENTS
const addHandlers = function () {
  $('#create-files-form').on('submit', onCreateUpload)
  $('#get-files-button').on('click', onGetUploads)
  $('#edit-files-form').on('submit', onUpdateUpload)
  $('#delete-files-button').on('click', onDeleteFile)
  $('#my-pictures').on('click', onGetUploads)
  $('#browse-pictures').on('click', onGetBrowse)
}

module.exports = {
  onCreateUpload,
  onGetUploads,
  onDeleteFile,
  addHandlers,
  onGetBrowse
}
