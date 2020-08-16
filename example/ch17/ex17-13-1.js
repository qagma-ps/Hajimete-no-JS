const input = "Regex pros know the differene between\n" +
  "<i>greedy</i> and <i>lazy</i> matching";
const output = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(output);
