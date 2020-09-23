const leftPad = (value, count = 2, char = "0") => {
  let stringValue = value;
  let newValue = stringValue;

  if (stringValue.length < count || stringValue.length % 10 ===0) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    } 
  }
  return newValue;
};