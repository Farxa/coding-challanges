//example: 
let tiles = "_x_tns"
let word =  "cat"
//points: 3 + 1 + 1

//tiles= "cat"
//word: cat
//points: 1


  const tileMap = {a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10, _: 0};

function check(tiles, word) {
    
  let pointsObj = {};
  let points = 0;
  
  for (let i = 0; i < word.length; i++) {
        if (tiles.includes(word[i])) {
          tiles = tiles.replace(word[i],'');
          
          if (word[i] in tileMap) {
            pointsObj[word[i]] = tileMap[word[i]];
            points += tileMap[word[i]]
          }
	}
      
      if (tiles.includes("_")) {
        pointsObj["_"] = tileMap["_"];
      }
   
    
  }
 return points
}



console.log(check(tiles, word))