
  


function range(start, end, step){
const array = []
    for(i=1; i<=start; i++){
        array.push(i);
    }
    
    return array;
}


console.log(range(5));
//---------------------------------------------------------------------------
function range2(start, end, step){
    const array = []
        for(start; start<=end; start++){
            array.push(start);
        }
        
        return array;
    }
    
    console.log(range2(6,11))
//-------------------------------------------------------------------------------
    function range3(start, end, step){
            const array = []
            for(start; start<=end; start+=step){
                array.push(start);
            }
            
            return array;
        }

console.log(range3(10,19,2));        
//------------------------------------------------------------------------------

function range4(start, end, step){
    const array = []
    for(start; start>=end; start--){
        array.push(start);
    }
    
    return array;
}

console.log(range4(6,2));    

//------------------------------------------------------------------------------
function range4(start, end, step){
    const array = []
    for(start; start>=end; start-=step){
        array.push(start);
    }
    
    return array;
}

console.log(range4(8,-3, 4)); 

//------------------------- Exercicio resolvido pelo instrutor --------------------------
function range(start, end, stepParams = 1){
    const n1= end === undefined ? 1 : start
    const n2= end === undefined ? start : end
    const step = n1 <= n2 ? Math.abs(stepParams) : -Math.abs(stepParams)

    const array = []
        for(let i=n1; n1<=n2 ? i<=n2 : i>=n2; i+=step){
            array.push(i);
        }
        
        return array;
    }

    console.log(range(8,-3,4))
    