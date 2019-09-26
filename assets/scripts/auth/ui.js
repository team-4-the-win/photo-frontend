'use strict'
<<<<<<< HEAD

const signUpSuccess = function () {
<<<<<<< HEAD
<<<<<<< HEAD
=======
const store = require('../store')

const signUpSuccess = function () {
>>>>>>> soo
  $('#sign-up-message').text('Signed up successfully')
}

const signUpFailure = function () {
  $('#sign-up-message').text('Error occured.')
}

<<<<<<< HEAD
const signInSuccess = function () {
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
=======
const signInSuccess = function (data) {
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
  store.user = data.user
>>>>>>> soo
}

const signInFailure = function () {
  $('#sign-in-message').text('Error occured.')
}

const changePasswordSuccess = function () {
<<<<<<< HEAD
  $('#change-pw-message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#change-pw-message').text('Error occured.')
=======
  $('#reset-pw-message').text('Changed password successfully.')
}

const changePasswordFailure = function () {
  $('#reset-pw-message').text('Error occured.')
>>>>>>> soo
}

const signOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully')
  $('#sign-in-div').show()
  $('#sign-up-div').show()
}

const signOutFailure = function () {
  $('#sign-out-message').text('Error occured.')
<<<<<<< HEAD
=======
=======
  $('#sign-up-message').text('Signed up successfully')
>>>>>>> Add feedback for user (auth)
}

const signUpFailure = function () {
  $('#sign-up-message').text('Error occured.')
}

const signInSuccess = function () {
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-div').hide()
  $('#sign-up-div').hide()
}

const signInFailure = function () {
  $('#sign-in-message').text('Error occured.')
}

const changePasswordSuccess = function () {
  $('#change-pw-message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#change-pw-message').text('Error occured.')
}

const signOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully')
  $('#sign-in-div').show()
  $('#sign-up-div').show()
}

const signOutFailure = function () {
<<<<<<< HEAD
>>>>>>> Add auth folder
=======
  $('#sign-out-message').text('Error occured.')
>>>>>>> Add feedback for user (auth)
=======
>>>>>>> soo
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
