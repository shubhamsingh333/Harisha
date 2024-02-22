import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.css'
function Fetch() {
    const [data, setData] = useState([])

    // const apiGet =async()=>{
    // const result=   await fetch("https://jsonplaceholder.typicode.com/users")
    //     const data= await result.json()
    //     console.log('runnnnnnnnnnnnnnnnnnnnnnnnn')
    //     console.log(data,"data")

    // } 
    // const apiGet =()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then ((response)=> response.json())
    ////       //     .then ((response)=> console.log(response.json()))   // it will give promise 


    //     .then( (json)=>{
    //         console.log(json)
    //          setData(json)
    //     })


    // }
    // const apiGet =()=>{
    //  const result= axios.get("https://jsonplaceholder.typicode.com/users") // result will give promise
    //    result.then((res)=>console.log(res.data,"res"))   //.then will resolve the promise


    // }

    const apiGet = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        //   result.then((res)=>console.log(res.data,"res"))
        // console.log(result.data)
        setData(result.data)

    }
    console.log(data)


    return (
        <>
            <h1>Fetch an api</h1>
            <button onClick={apiGet}>Fetch API</button>
            <div style={{width:"80%",margin:'0 auto'}}>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                
                        {data.map((e) => (
                            <tr>
                           <td > {e.id}</td>
                            <td > {e.name}</td>
                            <td > {e.username}</td>
                            <td > {e.email}</td>
                            </tr>
                        ))}
                
                </table>


            </div>



        </>
    )
}

export default Fetch





