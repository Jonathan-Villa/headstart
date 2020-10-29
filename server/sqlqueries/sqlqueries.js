exports.insertUser = (fName, lName, userName, userEmail, userPassW) => {



  const userInput = `INSERT INTO User VALUES ('${fName}', '${lName}',' ${userEmail}', '${userName}', '${userPassW}')`;

  return userInput;
};
