const BFS=(speed)=>{
    let dx=[1,0,-1,0];
    let dy=[0,1,0,-1];
    isVisited=[];
    currentSpeed=speed;
    incSpeed=speed;

    for(let i=0;i<rows;i++){
        let array=[];
        for(let j=0;j<cols;j++){
            let id=createId(i,j);
            let ele=document.getElementById(id);
            if(ele.className=="box" || ele.className=="box green") array.push(false);
            else array.push(true);
        }
        isVisited.push(array);
    }

    let queue=[];
    queue.push(createId(srcRow,srcCol));

    while(queue.length){
        let id=queue.shift();
        let row=Number.parseInt(id.split("-")[0]);
        let col=Number.parseInt(id.split("-")[1]);
        
        if(row==desRow && col==desCol)break;

        setTimeout(()=>{
            let ele=document.getElementById(id);
            if(ele.className=="box")ele.className="box yellow";
        },currentSpeed);

        currentSpeed+=incSpeed;

        for(let k=0;k<4;k++){
            let newRow=row+dx[k];
            let newCol=col+dy[k];
            if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols && isVisited[newRow][newCol]==false){
                queue.push(createId(newRow,newCol));
                isVisited[newRow][newCol]=true;
            }
        }
    }
}