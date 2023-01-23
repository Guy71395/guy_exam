import { MY_SERVER } from '../../app/env'
import axios from 'axios'

export function getStudents() {
    // console.log("getttt")
    return new Promise((resolve) =>
        axios.get(MY_SERVER+"/student").then(res => resolve({ data: res.data }))
    );
}
export function addStudents(email,sName) {
    // console.log("add",desc,sName)
    return new Promise((resolve) =>
        axios.post(MY_SERVER+"/student",{email:email,sName:sName}).then(res => resolve({ data: res.data }))
    );
}
export function delStudent(email) {
    // console.log("add",desc,sName)
    return new Promise((resolve) =>
        axios.delete(MY_SERVER+"/student"+"/"+ email).then(res => resolve({ data: res.data }))
    );
}

export function addScore(email,score,course) {
    console.log(email,score,course)
    if (course == "math") {
        return new Promise((resolve) =>
            axios.put(MY_SERVER+"mark"+"/"+ email,{"mathScore":score}).then(res => resolve({ data: res.data }))
        );
    } else if(course == "computers") {
        return new Promise((resolve) =>
            axios.put(MY_SERVER+"mark"+"/"+ email,{"computerScore":score}).then(res => resolve({ data: res.data }))
        );  
    } else if(course == "english") {
        return new Promise((resolve) =>
            axios.put(MY_SERVER+"mark"+"/"+ email,{"engScore":score}).then(res => resolve({ data: res.data }))
        );  
    }
}