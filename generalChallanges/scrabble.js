//example: 
let tiles = "_x_tns"
let word =  "cat"
//points: 3 + 1 + 1

tiles= "cat"
//word: cat
//points: 1


function check(tiles, word) {
  
  const tileMap = {a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10, _: 0};
  
  word = word.split("");
  tiles = tiles.split("");  
  let pointsObj = {};
  
  
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < tiles.length; j++) {
        let keys = [];
        if (tiles[j] === word[i]) {
        keys.push(word[i]);
        tiles = tiles.filter(e => e !== word[i]);
        word = word.filter(e => e !== word[i]);
          
          for (let key of keys)
          if (key in tileMap) {
            pointsObj[key] = tileMap[key];
          }
	}
      
      if (tiles[j] === "_" && tiles[j] in tileMap) {
        pointsObj[tiles[j]] = tileMap[tiles[j]];
        tiles[j] = word[i]
      }
   
    }
  }
  const points = Object.values(pointsObj).reduce((a, b) => a + b);
  //console.log(pointsObj, points)
 return points
}


check(tiles, word)