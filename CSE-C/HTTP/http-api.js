const http=require('http');
const port=3000;

const server=http.createServer(async(req,res)=>{
    const response= await fetch("https://dummyjson.com/product");
    res.writeHead(200, {
        'content-type' :applica
    })
    const data= await response.json();
    res.end("Hello Cse C Students");

});
server.listen(port, ()=>{
    console.log("server listeninig on port"+port)
});