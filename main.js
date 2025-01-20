import express from "express";

const app = express();
const PORT = 3000; // to kill port use command : npx kill-port 3000
app.get('/',(req,res)=>{

    res.json({msg:"Hello world to Artificial Intelligence"})

})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})
