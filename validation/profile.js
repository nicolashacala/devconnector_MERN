const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 4 characters";
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle field is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "skills field is required";
  }
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.Youtube)) {
    if (!Validator.isURL(data.Youtube)) {
      errors.Youtube = "Not a valid URL";
    }
  }
  if (!isEmpty(data.Twitter)) {
    if (!Validator.isURL(data.Twitter)) {
      errors.Twitter = "Not a valid URL";
    }
  }
  if (!isEmpty(data.Facebook)) {
    if (!Validator.isURL(data.Facebook)) {
      errors.Facebook = "Not a valid URL";
    }
  }
  if (!isEmpty(data.Linkedin)) {
    if (!Validator.isURL(data.Linkedin)) {
      errors.Linkedin = "Not a valid URL";
    }
  }
  if (!isEmpty(data.Instagram)) {
    if (!Validator.isURL(data.Instagram)) {
      errors.Instagram = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
