import React, {
    useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentsAsync, addScoreAsync,selectStudents } from './sampSlice';

const AddStudent = () => {
    const dispatch = useDispatch();
    const students = useSelector(selectStudents);
    const [email, setemail] = useState("")
    const [sName, setsName] = useState("")
    const [sEmail, setsEmail] = useState("")
    const [course, setcourse] = useState("")
    const [score, setScore] = useState(0)
    
    return (
        <div><h3>Add Student</h3>
            email:<input onChange={(e) => setemail(e.target.value)} />
            Name:<input onChange={(e) => setsName(e.target.value)} />
            <button onClick={() => dispatch(addStudentsAsync({ email, sName }))} >Add</button>
            <h3>Add Score</h3>
            {/* <input onChange={(e) => setsEmail(e.target.value)} /> */}
            student: <select name='stuCombo' id='stuCombo' onClick={(e) => setsEmail(e.target.value)}>
                {students.map((stu,i)=> <option value={stu.email} key={i}>{stu.sName}</option>)}
            </select> {" "}
            course: <select name='courseCombo' id='courseCombo' onClick={(e) => setcourse(e.target.value)}>
                <option value={"math"}>math</option>
                <option value={"computers"}>computers</option>
                <option value={"english"}>english</option>
            </select> {" "}
            score: <input type={'number'} onChange={(e) => setScore(e.target.value)}></input>
            <button onClick={() => dispatch(addScoreAsync({sEmail,score,course}))}>add score</button>
        </div>
    )
}

export default AddStudent