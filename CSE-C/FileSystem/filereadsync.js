const fs=require("fs");
// const data=fs.readFileSync("./data.txt","utf-8");
// // console.log(data.toString());
// console.log(data)
// fs.writeFileSync("./data.txt", "Hello ABES","utf-8");
// fs.appendFileSync("./data.txt", "Hello ABES","utf-8");
// fs.renameSync("./data2.txt","data3.txt");
// fs.unlinkSync("./data.txt");
const data =fs.readFileSync("./data.txt","utf-8");
console.log(data)
if (data.match("H")){
    console.log("File contains 'H");
    const newdata=data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}
