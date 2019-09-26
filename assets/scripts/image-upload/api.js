'use strict'

const config = require('../config')
const store = require('../store')

// UPLOAD AN IMAGE
const upload = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/fileUploads`,
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    contentType: false,
    processData: false
  })
}

// SEE ALL IMAGES 'INDEX'
const getUploads = function () {
  return $.ajax({
    url: `${config.apiUrl}/fileUploads`,
    method: 'GET'
  })
}

// UPDATE AN IMAGE 'PATCH'
const updateUpload = function (data) {
  console.log('id', store.file._id)
  console.log('token', store.user.token)
  return $.ajax({
    url: `${config.apiUrl}/fileUploads/` + store.file._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// DELETE AN IMAGE 'DELETE'

module.exports = {
  upload,
  getUploads,
  updateUpload
}
