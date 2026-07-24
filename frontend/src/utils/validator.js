// frontend/src/utils/validator.js

export function isEmpty(value) {
  return !value || value.trim() === "";
}

export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function hasMinLength(value, length) {
  return value.length >= length;
}

export function passwordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}