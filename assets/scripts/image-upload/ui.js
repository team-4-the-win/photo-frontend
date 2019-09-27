'use strict'

const store = require('../store')
const showImagesTemplate = require('../templates/imageUpload-listing.handlebars')

// UPON SUCCESSFUL IMAGE UPLOAD
const onUploadSuccess = function (data) {
  $('.display').html('<img class="img-fluid" src="' + data.fileUpload.url + '">')
  $('#create-files-message').text('File has successfully uploaded')
  store.file = data.fileUpload
  // onGetUploadsSuccess()
  // console.log(store.file)
}

// UPON SUCCESSFUL GET IMAGES
const onGetUploadsSuccess = function (data) { // added data as a parameter
  const myImages = data.fileUploads.filter(function (image) {
    return image.user === store.user._id
  })
  $('#get-files-message').text('Take a look around!')
  const showImagesHtml = showImagesTemplate({ images: myImages })
  $('.get-files').html(showImagesHtml)
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}

const onGetBrowseSuccess = function (data) { // added data as a parameter
  const myImages = data.fileUploads.filter(function (image) {
    return image.user !== store.user._id
  })
  const showImagesHtml = showImagesTemplate({ images: myImages })
  $('.get-files').html(showImagesHtml)
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}

module.exports = {
  onUploadSuccess,
  onGetUploadsSuccess,
  onGetBrowseSuccess
}
