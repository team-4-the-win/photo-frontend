'use strict'

// UPON SUCCESSFUL IMAGE UPLOAD
const onUploadSuccess = function (data) {
  $('.display').html('<img src="' + data.fileUpload.url + '">')
  $('#create-files-message').text('File has successfully uploaded')
}

// UPON SUCCESSFUL GET IMAGES
const onGetUploadsSuccess = function () {
  console.log('do you work?')
  $('#get-files-message').text('Take a look around!')
}

// ON SUCCESSFUL DELETION OF A FILE
const onDeleteFileSuccess = function () {
  $('delete-files-message').text('File has been deleted')
}
module.exports = {
  onUploadSuccess,
  onGetUploadsSuccess,
  onDeleteFileSuccess
}
