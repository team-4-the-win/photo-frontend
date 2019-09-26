'use strict'

// UPON SUCCESSFUL IMAGE UPLOAD
const onUploadSuccess = function (data) {
  $('.display').html('<img src="' + data.fileUpload.url + '">')
  $('#create-files-message').text('File has successfully uploaded')
}

// UPON SUCCESSFUL GET IMAGES
const onGetUploadsSuccess = function () {
  $('.get-files').text('Take a look around!')
}

module.exports = {
  onUploadSuccess,
  onGetUploadsSuccess
}
