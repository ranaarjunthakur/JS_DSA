Anagrams are words that have the same letters, just rearranged.
1:"bat" and "tab" are anagrams.
2:"tap" and "pat" are also anagrams.
3:"cat" is not an anagram of any other word in that list.

function groupAnagrams(words) {
  let map = {};
  for (let word of words) {
    let key = word.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["bat", "tab", "tap", "pat", "cat"]));

output:[ [ 'bat', 'tab' ], [ 'tap', 'pat' ], [ 'cat' ] ]
