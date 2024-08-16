function finalValueAfterOperations(operations: string[]): number {
    let x:number=0
    operations.forEach((e)=>{
    switch(e) { 
    case "--X": { 
        --x
      break; 
    } 
    case "X--": { 
      x--
      break; 
    } 
    case "++X":{
        ++x
      break;
    }
    case "X++":{
        x++
      break;
    }
    default: {     
      break; 
   }
    }}) 
    return x
} 
