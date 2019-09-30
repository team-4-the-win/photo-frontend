'use strict'

const store = require('../store')
// const events = require('./events')
const showImagesTemplate = require('../templates/imageUpload-listing.handlebars')

// UPON SUCCESSFUL IMAGE UPLOAD
const onUploadSuccess = function (data) {
  $('.display').html('<img class="img-fluid" src="' + data.fileUpload.url + '">')
  $('#create-files-message').text('File has successfully uploaded')
  store.file = data.fileUpload
  $('.get-files-message').text('')
  // onGetUploadsSuccess()
  // console.log(store.file)
}

// UPON SUCCESSFUL GET IMAGES
// hi
const onGetUploadsSuccess = function (data) { // added data as a parameter
  const myImages = data.fileUploads.filter(function (image) {
    return image.user === store.user._id
  })
  if (myImages.length === 0) {
    $('.get-files-message').html('please <a data-toggle="modal" data-target="#uploadModal" href="#">upload</a> some images, or view the gallery')
  } else {
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

const onDeleteSuccess = function () {
  $('#delete-files-message').text('File has successfully deleted ')
}

const onUpdateSuccess = function () {
  $('#update-files-message').text('File has updated successfully ')
}

const onDeleteFailure = function () {
  $('#delete-files-message').text('Unable to delete  file. Try again.')
}

const onUpdateFailure = function () {
  $('#update-files-message').text('Unable to update  file. Try again.')
}

const onCreateFailure = function () {
  $('#create-files-message').text('Unable to create file')
}

const onFailure = function () {
  $('#get-files-message').text('Error Occured!')
}

module.exports = {
  onUploadSuccess,
  onGetUploadsSuccess,
  onGetBrowseSuccess,
  onDeleteSuccess,
  onUpdateSuccess,
  onUpdateFailure,
  onDeleteFailure,
  onCreateFailure,
  onFailure
}
