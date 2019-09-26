'use strict'

const config = require('../config')
const store = require('../store')

// UPLOAD AN IMAGE
const upload = function (formData) { // CHECK IN ON THIS
  return $.ajax({
    url: `${config.apiUrl}/fileUploads`,
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token
    },
    data: formData, // CHECK IN ON THIS
    contentType: false,
    processData: false
  })
}

// UPDATE AN IMAGE 'PATCH'

// SEE ALL IMAGES 'INDEX'

// DELETE AN IMAGE 'DELETE'

module.exports = {
  upload
}
