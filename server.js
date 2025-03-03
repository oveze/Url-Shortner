import express from 'express'
import mongoose from 'mongoose';
import { getOriginalUrl, shortUrl } from "./Controllers/url.js";




const app = express();


app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://ovezeov:FwOll9LUSleet6IK@cluster0.y0oga.mongodb.net/',{
    dbName:"Nodejs"
}
).then(()=> console.log('Mongodb connected')).
catch((error)=> console.log('error'))


// rendering ejs file 
app.get('/',(req,res)=> {
    res.render('index.ejs' ,{shortUrl : null})
})

//shorting Url logic
app.post('/short', shortUrl )




//redrict to original url using short code dynamic routing
app.get('/:shortCode',getOriginalUrl);


// const port = 2000;
// app.listen(port,()=> console.log(`sever is running on port ${port}`))

export default app;
