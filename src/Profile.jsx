import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from './AxiosIntercepter'
import { useGetProfileQuery } from './service/getprofile'

const Profile = () => {
    const [profile, setProfile] = useState([])
    const { data, isLoading, isError, isSuccess } = useGetProfileQuery()
    // function getdataprofile() {

    //         const token =  localStorage.getItem("token")
    //         // const header = {
    //         //     headers:  {
    //         //         Authorization:` Bearer ${token}`
    //         //     } 
    //         // }

    //         api.get("/profile")
    //         .then((res)=>{
    //             console.log(res)
    //             setProfile(res.data)
    //             // console.log("Profile Data",res)
    //             alert("Profile Data get Successful")
    //         })
    //         .catch((error)=>{
    //             alert("Profile Data get Fail")

    //         })

    // }

    function getdataprofile() {

        setProfile(data)
        // console.log("success", isSuccess)
        // console.log("error", isError)
    }
    // console.log(profile)
    // useEffect(()=>{
    //     getdataprofile()
    // },[])

    function handlelogout() {
        localStorage.removeItem("token")
        alert("logout Success")
    }
    return (
        <div className='p-5'>
            <button className='bg-green-700 text-white px-4 py-1' onClick={getdataprofile}>get profile data</button>
            <button className='bg-red-700 text-white px-2 py-1' onClick={handlelogout}>LogOut</button>

            <h1>Profile</h1>
            {isLoading && <h1>...loading</h1>}
            {isError && <h1>error</h1>}
            <p>
                 {
                profile?.id
            }
            </p>
            <p>
                  {

                <img src={profile?.avatar} alt=""  className='rounded-full size-40'/>
            }
            </p>
            <p>{profile?.name}</p>
            <p>{profile?.role}</p>

        </div>
    )
}

export default Profile