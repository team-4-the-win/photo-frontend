'use strict'

const store = require('../store')

$('.signed-in-options').hide()

const signUpSuccess = function () {
  $('#sign-up-message').text('Signed up successfully')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#sign-up-message').text('Error occured.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#sign-in-message').text('Signed in successfully')
  // $('#sign-in-div').hide()
  // $('#sign-up-div').hide()
  $('.signed-in-options').show()
  $('.signed-out-options').hide()
  store.user = data.user
  $('#navbarDropdownMenuLink').text(store.user.email)
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#sign-in-message').text('Error occured.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#reset-pw-message').text('Changed password successfully.')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#reset-pw-message').text('Error occured.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#sign-out-message').text('Signed out successfully')
  $('form').trigger('reset')
  // $('#sign-in-div').show()
  // $('#sign-up-div').show()
  $('.signed-in-options').hide()
  $('.signed-out-options').show()
}

const signOutFailure = function () {
  $('#sign-out-message').text('Error occured.')
  $('form').trigger('reset')
}

const showSignUp = function () {
  $('#')
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
