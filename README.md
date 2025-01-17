Here's the updated **README.md** file with the newly added `validateAgeRange` function:

---

# Validation Utilities

A simple JavaScript/TypeScript library that provides utility functions for validating names, emails, phone numbers, calculating age, and validating age ranges. This library is designed to simplify common validation tasks in your projects.

## Features

- Validate names to ensure they contain only letters and spaces.
- Validate emails for general purposes or specific domains.
- Validate Indian mobile numbers, including support for `+91` and `0` prefixes.
- Calculate age from a date in different formats (e.g., `dd/mm/yyyy`, `dd-mm-yyyy`, or a `Date` object).
- Validate if an age falls within a specified range.

## Installation

To use this library, install it via npm or yarn:

```bash
npm install zn-verify
```

or

```bash
yarn add zn-verify
```

## Functions

### 1. `verifyName`

Validates a name to ensure it contains only letters and spaces, with no consecutive spaces or digits.

#### Usage

```javascript
import { verifyName } from "zn-verify";

console.log(verifyName("John Doe")); // true
console.log(verifyName("John  Doe")); // false
console.log(verifyName("John123")); // false
```

#### Rules:

- No consecutive spaces.
- Cannot start or end with a space.
- No digits are allowed.

---

### 2. `verifyEmail`

Validates an email address for general use or against a specific domain.

#### Usage

```javascript
import { verifyEmail } from "zn-verify";

console.log(verifyEmail("example@gmail.com")); // true
console.log(verifyEmail("example@gmail.com", "gmail.com")); // true
console.log(verifyEmail("example@yahoo.com", "gmail.com")); // false
```

#### Parameters

- `email` (string): The email address to validate.
- `specialDomain` (string, optional): A specific domain to validate against (e.g., `gmail.com`).

#### Behavior

- If `specialDomain` is provided, the email must match that domain.
- Otherwise, it validates the email format against a general-purpose regex.

---

### 3. `verifyMobileNumber`

Validates an Indian mobile number, supporting prefixes like `+91` and `0`.

#### Usage

```javascript
import { verifyMobileNumber } from "zn-verify";

console.log(verifyMobileNumber("+919876543210")); // true
console.log(verifyMobileNumber("09876543210")); // true
console.log(verifyMobileNumber("9876543210")); // true
console.log(verifyMobileNumber("1234567890")); // false
```

#### Rules

- Mobile numbers must start with digits `6-9`.
- Can optionally have `+91` or `0` as a prefix.
- Must contain exactly 10 digits (excluding the prefix).

---

### 4. `calculateAge`

Calculates the age based on a provided date. The date can be in `dd/mm/yyyy`, `dd-mm-yyyy`, or a `Date` object.

#### Usage

```javascript
import { calculateAge } from "zn-verify";

console.log(calculateAge("01/01/2023")); // "12 months" (if today is 01/01/2024)
console.log(calculateAge("31-12-2023")); // "1 day" (if today is 01/01/2024)
console.log(calculateAge(new Date(2000, 0, 1))); // "24 years" (if today is 01/01/2024)
```

#### Parameters

- `dateInput` (string | Date): The input date to calculate age from.

#### Output

- Returns the age in one of the following formats:
  - `X days` (if less than 30 days).
  - `X months` (if less than 12 months).
  - `X years` (if 1 year or more).

---

### 5. `validateAgeRange`

Validates if an age calculated from a date falls within a specified range.

#### Usage

```javascript
import { validateAgeRange } from "zn-verify";

// No age range specified (validates all ages)
console.log(validateAgeRange("01/01/2000")); // true

// Only maxAge specified
console.log(validateAgeRange("01/01/2010", undefined, 20)); // true (if age <= 20)

// Only minAge specified
console.log(validateAgeRange("01/01/2005", 18)); // true (if age >= 18)

// Both minAge and maxAge specified
console.log(validateAgeRange("01/01/1990", 18, 30)); // false (if age is outside 18-30)
```

#### Parameters

- `dateInput` (string | Date): The input date to validate.
- `minAge` (number, optional): The minimum age (defaults to `0`).
- `maxAge` (number, optional): The maximum age (defaults to `Infinity`).

#### Output

- Returns `true` if the age falls within the specified range.
- Returns `false` otherwise.

#### Behavior

- Throws an error if the date is invalid or in the future.
- Defaults `minAge` to `0` and `maxAge` to `Infinity` if not specified.

---

## Error Handling

All functions throw an error for invalid input formats. Ensure inputs follow the documented formats.

## Contribution

Contributions are welcome! Please submit a pull request or open an issue on the GitHub repository.

## License

This library is licensed under the MIT License.

---

## Changelog

### v1.2.1 (Patch Update)

- **Breaking Change:** Functions no longer return a promise. They are now synchronous for easier usage.
- Added `validateAgeRange` to validate if an age is within a specified range.
- Updated documentation to reflect the changes.

### v1.2.0

- Added `verifyName` function for name validation.
- Enhanced `verifyEmail` function to support specific domain validation.
- Added `verifyMobileNumber` function to validate Indian mobile numbers.
- Improved `calculateAge` function to handle multiple date formats.

### v1.0.0

- Initial release with basic validation functionality.

---

Let me know if further adjustments are needed!
