async function verifyName(name) {
  const nameRegex = /^(?!.*\s{2})(?!^\s)(?!.*\d)[a-zA-Z\s]+$/;
  if (nameRegex.test(name)) {
    return true;
  } else {
    return false;
  }
}

export default verifyName;
