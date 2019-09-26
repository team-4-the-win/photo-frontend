'use strict'

const imageUploadEvents = require('./image-upload/events.js')
const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')

$(() => {
  imageUploadEvents.addHandlers()
<<<<<<< HEAD
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#reset-pw-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
=======
  authEvents.addHandlers()
>>>>>>> Make change to auth and change to app.js
})
