import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from './AxiosIntercepter'

const Profile = () => {
    const [profile,setProfile] = useState([])
    function getdataprofile() {

            const token =  localStorage.getItem("token")
            // const header = {
            //     headers:  {
            //         Authorization:` Bearer ${token}`
            //     } 
            // }

            api.get("/profile")
            .then((res)=>{
                console.log(res)
                setProfile(res.data)
                // console.log("Profile Data",res)
                alert("Profile Data get Successful")
            })
            .catch((error)=>{
                alert("Profile Data get Fail")

            })
        
    }
    console.log(profile)
    // useEffect(()=>{
    //     getdataprofile()
    // },[])

     function handlelogout(){
        localStorage.removeItem("token")
        alert("logout Success")
     }
  return (
    <div>
        <button className='bg-green-700 text-white px-4 py-1' onClick={getdataprofile}>get profile data</button>
        <button className='bg-red-700 text-white px-2 py-1' onClick={handlelogout}>LogOut</button>
        <h1>Profile</h1>
        {
           profile.id
        }
        {
            
            <img src={profile.avatar} alt="" />
        }
        <p>{profile.name}</p>
        <p>{profile.role}</p>
        
    </div>
  )
}

export default Profile