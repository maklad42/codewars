function solution(input) {
  let visited = new Set, moves = [], q = [], res = 0, max = 0, tmp, count = 0;

  // convert input to coords and remove invalid cells
  let pos = input.split(',')
                 .filter(x=> { return x.length === 2 && typeof +x == 'number' && x >= 0 && x <= 99} )
                 .sort();
  pos = Array.from(new Set(pos)); //.map(x=>+x);
  if (pos.length == 1) { return 1; }
//   console.log(pos);
  
  let board = [[],[],[],[],[],[],[],[],[],[]];
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = '' + r + c;
      if (pos.indexOf(x) > -1) {
        board[r].push('■');
      } else {
        board[r].push('□');
      }
    }
  }
  console.log(board);

  // Loop over all positions in pos set
  pos.forEach(p => {
//     console.log(p);
    max = 1;
    res = max > res ? max : res;
    // add adjacent cells to queue
    let q = filterMoves(getMoves(p), visited);
    visited.add(p);
//     console.log("q: " + q);
    while (q.length > 0 && count < 1000) {
      count++;
      tmp = q.shift();
      visited.add(tmp);
//       console.log("tmp: " + tmp);
//       console.log(pos.includes(tmp));
      if (pos.includes(tmp)) {
        max++;
//         console.log("Max: " + max);
        res = max > res ? max : res;
        moves = filterMoves(getMoves(tmp), visited);
        moves.forEach(move => q.push(move));
      }
//       console.log("end q: " + q);
    }
//     console.log(q);
  });
  console.log("Final Res: " + res);
  return res;

}


  // List all possible paths
  const getMoves = pos => {
    const moves = [];
    let p = [+pos[0],+pos[1]];
    moves.push([+p[0] - 1, +p[1]].join(''));
    moves.push([+p[0], +p[1] + 1].join(''));
    moves.push([+p[0] + 1, +p[1]].join(''));
    moves.push([+p[0], +p[1] - 1].join(''));
    return moves;
  };

  // remove invalid moves
  const filterMoves = (moves, visited) => {
    return moves.filter(m => {
//       console.log("m: " + m);
//       console.log("m in visited? " + visited.has(m));
      return (!visited.has(m) && m.length == 2 && m[0] >= 0 && m[0] <= 9 && m[1] >= 0 && m[1] <= 9);
    }).map(x=>'' + x[0] + x[1]);
  };


// solution('67,01,09,22,82,28'); // 1
solution('08,48,95,66,45,79,83,21,67,39,21,93,81,79,20,53,94,89,35,92,93,47,49,46,95,36,13,86,34,42,14,11'); // 9
// solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,46');
// solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00');
