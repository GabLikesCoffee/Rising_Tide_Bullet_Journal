import axios from "axios"

//Adds a user journal
export const addJournalPost=(journal)=>{

    //token contains encrypted username and password


    let token=JSON.parse(localStorage.getItem("user"));
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
    let token=JSON.parse(localStorage.getItem("user"));
    axios.post("http://localhost:5000/journals/get", JSON.stringify({date,token}),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    
                    console.log("Journal received "+ res.data);
                    return res.data[0];
                }else{
                    console.log("error");
                }
                return res.data
            })
        
       
}
//Returns all user habits
export const getHabitPost=(date)=>{
    let token=JSON.parse(localStorage.getItem("user"));
    axios.post("http://localhost:5000/habits/get", JSON.stringify({token,date}),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
                if (res.data) {
                    
                    
                    let completedHabits= res.data[0].activity;
                    for(let i=1;i< res.data.length;i++){
                        completedHabits+=(", "+(res.data[i].activity));
                    }
                    console.log("Habit received" + completedHabits);
                }else{
                    console.log("error");
                }
                return res.data
            })
        
       
}
export const addHabitPost=(habit)=>{
    let token=JSON.parse(localStorage.getItem("user"));
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