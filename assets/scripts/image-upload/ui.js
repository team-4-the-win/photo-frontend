'use strict'

const onUploadSuccess = function (data) {
  $('.display').html('<img src="' + data.fileUpload.url + '">') // (`<img src="${data.fileUpload.url}">`) <-- this would work too
}

module.exports = {
  onUploadSuccess
}
