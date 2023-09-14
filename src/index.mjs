import "./styles.css";
const flattenArray=(arr)=>{
  let resultArray=arr.reduce((acc,item)=>{
    if(Array.isArray(item)){
      acc=acc.concat(flattenArray(item));
    } else{
      acc.push(item);
    }
    return acc;
  },[]);
  return resultArray;
}

const nestedArray=[1,[1,2,[3,4,5],6],7];
console.log(flattenArray(nestedArray));


const flattenObject=(obj,parent='')=>{
  let result={};
  for(let key in obj){
    let newKey;
    if(parent===''){
      newKey=key;
    } else{
      newKey=parent+'.'+key;
    }
    if(typeof(obj[key])==='object'){
      result={...result,...flattenObject(obj[key],newKey)};
    } else{
      result[newKey]=obj[key];
    }
  }
  return result;
}

console.log(flattenObject({a:{b:'sukdip'},c:'kar'},''));
