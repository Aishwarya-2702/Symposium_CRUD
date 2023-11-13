import {useEffect, useState} from "react"
import axios from'axios'
import { useNavigate } from "react-router-dom"

const Add=()=>{
    const [read,setRead]=useState([])

    useEffect(()=>{
        const fetchAllRecords=async()=>{
            try{
                const res=await axios.get()
                setRead(res.data.records)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllRecords()
    })

return(
    <>
    <h1>ADDING STUDENTS</h1>
    <table>
        <tbody>
            <tr>
                <th>Participant_id</th>
                <th>Participant_name</th>
                <th>Department</th>
                <th>Event_name</th>
                <th>Venue</th>
                <th>Winner</th>
            </tr>
        </tbody>
    </table>
    </>
)
}
export default Add