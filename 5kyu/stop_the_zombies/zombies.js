function findZombies(matrix) {

  // set variables
  let r = matrix.length, c = matrix[0].length,
      q = [], visited = [], cur;

  // create an empty grid
  let grid = new Array(r).fill(0).map(x => new Array(c).fill(0));

  // add [0,0] to the queue
  q.push({ r: 0, c: 0 });

  // while there is something in the queue
  while (q.length) {
    // pop cell off queue
    cur = q.pop();

    // mark as infected
    grid[cur['r']][cur['c']] = 1;

    // mark as visited
    visited.push((cur['r'] * r + cur['c']));

    // check for cells we can move to
    // add these cells to the queue and marked as visited
    let newCells = getCells(cur, matrix, visited);
    if (newCells != null) q.push(...newCells);
  }

  return grid;
}

function getCells(x, matrix, v) {
  let cells = [], rx = x['r'], cx = x['c'];
  // north
  if (rx - 1 >= 0
    && matrix[rx - 1][cx] == matrix[0][0]
    && v.indexOf((rx - 1) * matrix.length + cx) == -1) {
    cells.push({ r: rx - 1, c: cx });
  }

  // south
  if (rx + 1 < matrix.length
    && matrix[rx + 1][cx] == matrix[0][0]
    && v.indexOf((rx + 1) * matrix.length + cx) == -1) {
    cells.push({ r: rx + 1, c: cx });
  }

  // east
  if (cx + 1 < matrix[0].length
    && matrix[rx][cx + 1] == matrix[0][0]
    && v.indexOf(rx * matrix.length + cx + 1) == -1) {
    cells.push({ r: rx, c: cx + 1 });
  }

  // west
  if (cx - 1 >= 0
    && matrix[rx][cx - 1] == matrix[0][0]
    && v.indexOf(rx * matrix.length + cx - 1) == -1) {
    cells.push({ r: rx, c: cx - 1 });
  }

  return cells.length > 0 ? cells : null;
}
