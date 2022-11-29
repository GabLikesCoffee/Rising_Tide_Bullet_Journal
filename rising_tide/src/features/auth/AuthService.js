import axios from "axios"

//const API_URL="http://localhost:5000/users/add"


 export const register=(user)=>{
    axios.post("http://localhost:5000/users/add", JSON.stringify(user),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data ) {
                    if(localStorage.getItem("user")==null){
                        localStorage.setItem("user", JSON.stringify(res.data));
                    }
                    
                    console.log("Locally saved");
                }else{
                    console.log("error");
                }
                return res.data
            })
        
        
        
    

    
}
export const  logIn= async (user)=>{
    let token;
    console.log( JSON.stringify(user))
    axios.post("http://localhost:5000/users/logIn", JSON.stringify(user),
    { headers: {
        'Content-Type': 'application/json'
    },
    }).then(res=>{
                if (res.data) {
                   
                        localStorage.setItem("user", JSON.stringify(res.data));
                    
                    console.log("Locally saved and lgoin is sucessful");
                }else{
                    console.log("error");
                }
                token= res.data;
            })
            return token;
}

export const logOut=()=>{
    localStorage.removeItem("user");
    if(!localStorage.getItem("user"))
         return "User sucessfully logged out";
}
export const  getUsername= async()=>{

    if(localStorage.getItem("user")==null) 
        return null;
    else{
        let token = JSON.parse(localStorage.getItem("user"));
        let username;
        axios.post("http://localhost:5000/users/getUsername", JSON.stringify({token}),
        { headers: {
            'Content-Type': 'application/json'
        },
        }).then(res=>{
                    if (res.data) {
                    
                        console.log(res.data.username);
                    }else{
                        console.log("No username");
                    }
                    username = res.data.username
                })
                return username;
        }
}
