export const findPattern = pattern => {
  switch (pattern) {
    case "PhoneNumber":
      //Iranian mobile number
      return /(0|\+98)?([ ]|,|-|[()]){0,2}9[0-9]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/;
    case "PasswordStrengthValidation":
      //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
      return /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    case "Email":
      return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    case "Username":
      //that may include _ and – having a length of 3 to 16 characters
      return /^[a-z0-9_-]{3,16}$/;
    case "URL":
      //includes http(s)
      return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
    case "FilePath":
      //File Path with Filename and extension
      return /((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/;
  }
};

// export const separateDigits = number => {
//   if (number) {
//     return Math.floor(parseFloat(number))
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
//   return "";
// };

// export const findFormatToDisplay = (format, data) => {
//   switch (format) {
//     case "uppercase":
//       return data.toUpperCase();
//     case "lowercase":
//       return data.toLowerCase();
//   }
// };
