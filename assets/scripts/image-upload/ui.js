'use strict'

const store = require('../store')

// UPON SUCCESSFUL IMAGE UPLOAD
const onUploadSuccess = function (data) {
  $('.display').html('<img class="img-fluid" src="' + data.fileUpload.url + '">')
  $('#create-files-message').text('File has successfully uploaded')
  store.file = data.fileUpload
  console.log(store.file)
}

// UPON SUCCESSFUL GET IMAGES
const onGetUploadsSuccess = function () {
  $('#get-files-message').text('Take a look around!')
}

module.exports = {
  onUploadSuccess,
  onGetUploadsSuccess
}
