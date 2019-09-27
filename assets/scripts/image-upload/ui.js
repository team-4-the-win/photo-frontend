'use strict'

const store = require('../store')
const showImagesTemplate = require('../templates/imageUpload-listing.handlebars')

// UPON SUCCESSFUL IMAGE UPLOAD
const onUploadSuccess = function (data) {
  $('.display').html('<img class="img-fluid" src="' + data.fileUpload.url + '">')
  $('#create-files-message').text('File has successfully uploaded')
  store.file = data.fileUpload
  console.log(store.file)
}

// UPON SUCCESSFUL GET IMAGES
const onGetUploadsSuccess = function (data) { // added data as a parameter
  console.log(data)
  $('#get-files-message').text('Take a look around!')
  // new shit under here
  const showImagesHtml = showImagesTemplate({ images: data.fileUploads })
  $('.get-files').html(showImagesHtml)
}

module.exports = {
  onUploadSuccess,
  onGetUploadsSuccess
}
