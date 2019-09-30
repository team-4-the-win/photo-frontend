'use strict'

const store = require('../store')
// const events = require('./events')
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
  if (myImages.length === 0) {
    $('.please-upload-div').html('please <a data-toggle="modal" data-target="#uploadModal" href="#">upload</a> some images, or view the gallery')
  } else {
    $('#get-files-message').text('Take a look around!')
    const showImagesHtml = showImagesTemplate({ images: myImages })
    $('.get-files').html(showImagesHtml)
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
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
