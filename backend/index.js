const express=require("express")
const bodyParser = require("body-parser")
const refexp=require("express")
const refmysql=require("mysql2")
const cors=require('cors')


const app=refexp()
const dbase=refmysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"Aish27",
    "port":3306,
    "database":"symposium_project"
})
dbase.connect(()=>{
    console.log("Your Database is Connected!!!")
})
const application= express()
application.use(bodyParser.urlencoded({extended:true}))
application.use(bodyParser.json())
application.use(cors())
application.listen(1995,()=>{
    console.log("App is running...")
})
application.get('/fetch',async(req,res)=>{
    const sql="select * from registration_form"
    dbase.query(sql,(err,records)=>{
        if(err){
            res.status(404).json({"error":err.message})
            return
        }
        if(records.length==0){
            res.json(201).json({"message":"data not found"})
            return
        }
        res.status(200).json({records})
    })
})

application.post("/new",async(req,res)=>{
    const{Participant_id, Participant_name, Department, Event_name, Venue, Winner}=req.body
    const sql="insert into registration_form values(?,?,?,?,?,?)"
    dbase.query(sql,[Participant_id, Participant_name, Department, Event_name, Venue, Winner],(err,ack)=>{
        if(err){
            res.status(404).json({"error":err.message})
            return
        }
        res.status(200).json({message:"PARTICIPANT ADDED SUCESSFULLY"})
    })

})

application.put("/change/:number",async(req,res)=>{
    const{Event_name,Venue}=req.body
    const sql="update registration_form set Event_name=?,Venue=? where Participant_id=?"
    dbase.query(sql,[Event_name,Venue,req.params.number],(err,ack)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.status(200).json({message:"EVENT NAME AND VENUE UPDATED"})

    })
})

application.delete('/delkey/:key',async(req,res)=>{
    const sql="delete from registration_form where Participant_id=?"
    dbase.query(sql,[req.params.key],(err,ack)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(ack.affectedRows==0){
            res.status(404).json({message:"Records not available to delete"})
            return
        }
        res.status(201).json({message:"Records deleted"})
    })
})
