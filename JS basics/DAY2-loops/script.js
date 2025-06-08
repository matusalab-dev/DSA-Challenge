function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if ("aeiouAEIOU".includes(s[i])) {
      console.log(s[i]);
    }
  }
  for (let j = 0; j < s.length; j++) {
    if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(s[j])) {
      console.log(s[j]);
    }
  }
}
