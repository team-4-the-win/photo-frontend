'use strict'

const signUpSuccess = function () {
<<<<<<< HEAD
  $('#sign-up-message').text('Signed up successfully')
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
  $('#sign-out-message').text('Error occured.')
=======
}

const signUpFailure = function () {
}

const signInSuccess = function (data) {
}

const signInFailure = function () {
}

const changePasswordSuccess = function (data) {
}

const changePasswordFailure = function (data) {
}

const signOutSuccess = function () {
}

const signOutFailure = function () {
>>>>>>> Add auth folder
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
