var isValid = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      arr.push(s[i]);
    } else {
      let C = arr.pop();
      if (s[i] == ")" && C !== "(") return false;
      if (s[i] == "]" && C !== "[") return false;
      if (s[i] == "}" && C !== "{") return false;
    }
  }
  return arr.length === 0;
};
