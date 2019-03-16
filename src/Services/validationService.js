import validator from "validator";

const validateObservation = observation => {
  let errorArr = [];
  errorArr = errorArr.concat(
    validateBirdName(observation.birdname),
    validateNotes(observation.notes)
  );

  let errorMsgs = [];
  errorArr.forEach(err => {
    if (err) {
      errorMsgs = errorMsgs.concat(err);
    }
  });
  return errorMsgs;
};

const validateBirdName = name => {
  if (validator.isEmpty(name.toString())) {
    return "Name cannot be empty";
  }

  if (!validator.isAlpha(name)) {
    return "Name can only have letters";
  }
};

// Notes are optional and can be empty
const validateNotes = notes => {
  if (notes.length > 500) {
    return "Notes maximum length is 500 characters";
  }
};

export default validateObservation;
