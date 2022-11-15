import axios from "axios"

const API_URL="http://localhost:5000/users/add"


 function register(user){
    axios.post("http://localhost:5000/users/add", JSON.stringify(user),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    console.log("Locally saved");
                }
                return res.data
            })
        
        
        
    

    
}
 export default register
