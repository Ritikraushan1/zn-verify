export async function verifyName(name) {
  const nameRegex = /^(?!.*\s{2})(?!^\s)(?!.*\d)[a-zA-Z\s]+$/;
  if (nameRegex.test(name)) {
    return true;
  } else {
    return false;
  }
}

export async function verifyEmail(email, specialDomain = null) {
  const generalEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const specialDomainRegex = specialDomain
    ? new RegExp(`^[a-zA-Z0-9._%+-]+@${specialDomain.replace(".", "\\.")}$`)
    : null;

  if (specialDomain) {
    return specialDomainRegex.test(email);
  } else {
    return generalEmailRegex.test(email);
  }
}

export async function verifyMobileNumber(phoneNumber) {
  const mobileNumberRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  return mobileNumberRegex.test(phoneNumber);
}

export function calculateAge(dateInput) {
  let birthDate;

  // Parse the input into a Date object
  if (typeof dateInput === "string") {
    const sanitizedInput = dateInput.replace(/-/g, "/");
    const [day, month, year] = sanitizedInput.split("/");

    if (!day || !month || !year) {
      throw new Error(
        "Invalid date format. Expected dd/mm/yyyy or dd-mm-yyyy."
      );
    }

    birthDate = new Date(`${year}/${month}/${day}`);
  } else if (dateInput instanceof Date) {
    birthDate = dateInput;
  } else {
    throw new Error(
      "Invalid date input. Expected dd/mm/yyyy, dd-mm-yyyy, or a Date object."
    );
  }

  // Check if the parsed date is valid
  if (isNaN(birthDate)) {
    throw new Error("Invalid date. Please provide a valid date.");
  }

  const today = new Date();
  const diffInMilliseconds = today - birthDate;

  if (diffInMilliseconds < 0) {
    throw new Error("Date cannot be in the future.");
  }

  // Calculate differences
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30.44); // Average days in a month
  const diffInYears = Math.floor(diffInDays / 365.25); // Account for leap years

  // Determine the age format
  if (diffInDays < 30) {
    return diffInDays === 1 ? "1 day" : `${diffInDays} days`;
  } else if (diffInMonths < 12) {
    return diffInMonths === 1 ? "1 month" : `${diffInMonths} months`;
  } else {
    return diffInYears === 1 ? "1 year" : `${diffInYears} years`;
  }
}
