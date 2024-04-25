function longestSubstring(s) {
    
        let n = s.length;
        let ans = 0;
        let map = new Map(); 
        
        for (let j = 0, i = 0; j < n; j++) {
            if (map.has(s[j])) {
                i = Math.max(map.get(s[j]), i); // Move i to the next index of repeating character
            }
            ans = Math.max(ans, j - i + 1);
            map.set(s[j], j + 1); // Put character and its index
        }
        return ans;
    }
    
    let s = "abcabcbb";
    console.log(longestSubstring(s))


module.exports = { longestSubstring };


