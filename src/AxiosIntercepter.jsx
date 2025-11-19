import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.escuelajs.co/api/v1/auth",
    timeout:5000
    // headers:{
    //     "Authorization": `Bearer ${localStorage.getItem("token")}`
    // }
})

// api.interceptors.request.use((config)=>{
//     console.log(config)
//       config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;


//     return config
// })



// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
        console.log(" Request Sent:", config.url);
    }

  
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(" Response Error:", error.response?.status);
    return Promise.reject(error);
  }
);
