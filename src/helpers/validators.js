/**
 * Created by DzEN on 30.01.2017.
 */
function required(value) {
  return !value ? 'This field is required!' : undefined;
}

function checkEmail(value) {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

function checkPhoneNumber(value) {
  return value && /^[0-9]{12,15}$/i.test(value);
}

function checkIntInput(v, min = -Infinity, max = Infinity) {
  if ((/(\.|,)/.test(v))) return false;

  const number = parseInt(v, 10);

  return (number > min && number <= max);
}

export { required, checkEmail, checkIntInput, checkPhoneNumber };
