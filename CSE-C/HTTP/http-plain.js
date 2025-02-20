const http =require('http');
const port = 3000;
const fspromise=require('fs/promises');


const server =http.createServer( async(req,res)=>{
    res.statusCode=200;
    //res.setHeader('Content-type','text/html');

     res.writeHead(200,{"content-type": "text/html"});
        const data=await fspromise.readFile("./home.html","utf-8", ()=>{
            if(err) console.log(err.message);
        });

    //res.write("Hello CSE-C student");
    res.end(data);
});


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});