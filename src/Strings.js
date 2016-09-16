export function longestSub(str) {
  let maxLen = 1;
  let currLen = 1;
  const visited = {};
  (str.split('')).forEach(char => {
    visited[char] = -1;
  });
  visited[str[0]] = 0;
  for (let i = 1; i < str.length; i ++) {
    const prev = visited[str[i]];
    // if the character has not been visited or if the current longest string
    // starts after the character was previously visited, increment currLen
    if (prev === -1 || (i - currLen) > prev) {
      currLen++;
    } else {
      if (currLen > maxLen) maxLen = currLen;
      currLen = i - prev;
    }
    visited[str[i]] = i;
  }
  if (currLen > maxLen) maxLen = currLen;
  return maxLen;
}
