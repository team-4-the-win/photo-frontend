'use strict'

const config = require('../config')
const store = require('../store')

// UPLOAD AN IMAGE
const upload = function (formData) {
  console.log(store.user)
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
  // console.log(data)
  return $.ajax({
    url: `${config.apiUrl}/fileUploads/` + data.file.file_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'fileUpload': {
        'name': data.file.name,
        'tag': data.file.tags
      }
    }
  })
}

// DELETE AN IMAGE 'DELETE'
const deleteFile = function (id) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/fileUploads/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  upload,
  getUploads,
  updateUpload,
  deleteFile
}
