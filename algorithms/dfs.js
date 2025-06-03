const findPathDFS = (row, col) =>{
    if(row == desRow && col == desCol) return true;
    if(row < 0 || row >= rows || col < 0 || col >= cols || isVisited[row][col]) return false;
    
    isVisited[row][col] = true;
    setTimeout(() => {
      let ele = document.getElementById(createId(row,col));
      if(ele.className == "box") ele.className = "box yellow";
    }, currentSpeed);
    currentSpeed += incSpeed;

    return findPathDFS(row + 1, col) || findPathDFS(row-1, col) || findPathDFS(row, col+1) || findPathDFS(row, col - 1);
}


const DFS = (speed) =>{
  isVisited = [];
  currentSpeed = speed;
  incSpeed = speed;

  for(let i=0; i<rows; i++)
  {
    let array = [];
    for(let j=0; j<cols; j++)
    {
      let id = createId(i,j);
      let ele = document.getElementById(id);
      if(ele.className == "box" || ele.className == "box red") array.push(false);
      else array.push(true);
    }
    isVisited.push(array);
  }

  findPathDFS(srcRow, srcCol);
}