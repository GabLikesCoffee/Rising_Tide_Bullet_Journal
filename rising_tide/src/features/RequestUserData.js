import axios from "axios"

//Adds a user journal
export const addJournalPost=(journal)=>{

    //token contains encrypted username and password


    let token=localStorage.getItem("user");
    axios.post("http://localhost:5000/journals/add", JSON.stringify({journal,token}),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    //localStorage.setItem("user", JSON.stringify(res.data));
                    console.log(res.data);
                }else{
                    console.log("error");
                }
                return res.data
            })
        
       
}

//Give a date to get a journal entry
export const getJournalPost=(date)=>{
    let token=localStorage.getItem("user");
    axios.post("http://localhost:5000/journals/get", JSON.stringify({date,token}),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    
                    console.log("Journal received "+ res.data);
                }else{
                    console.log("error");
                }
                return res.data
            })
        
       
}
//Returns all user habits
export const getHabitPost=()=>{
    let token=localStorage.getItem("user");
    axios.post("http://localhost:5000/habits/get", JSON.stringify(token),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    
                    console.log("Habit received");
                }else{
                    console.log("error");
                }
                return res.data
            })
        
       
}
export const addHabitPost=(habit)=>{
    let token=localStorage.getItem("user");
    axios.post("http://localhost:5000/habits/add", JSON.stringify({habit,token}),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    //localStorage.setItem("user", JSON.stringify(res.data));
                    console.log("Habit sent");
                }else{
                    console.log("error");
                }
                return res.data
            })
        
       
}