const fscallabck=require("fs");
const read=()=>{
 fscallabck.readFile("./data.txt","utf-8",(error,data)=>{
    if(error){
        console.error(error.message);
    }
    else{
        console.log(data)
    }
 });


}
read();
console.log("1st");
console.log("2st");
console.log("3st");