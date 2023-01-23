import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAsync, selectStudents, delStudentsAsync ,selectUpdate} from './sampSlice';

export function Samp() {
    const students = useSelector(selectStudents);
    const studentsupdate = useSelector(selectUpdate);
    const dispatch = useDispatch();
    const [searchVal, setsearchVal] = useState("")
    useEffect(() => {
        dispatch(getStudentsAsync())
    }, [students.length,studentsupdate])

    return (
        <div>
            {students && <h1> Students: {students.length}</h1>}
            search: <input onChange={(e) => setsearchVal(e.target.value)}></input>
            {students.filter(student => student.sName.includes(searchVal)).map((stu, i) => 
                <div key={i}>
                 <button onClick={() => dispatch(delStudentsAsync(stu.email))}>Del</button>
                {" "} name: {stu.sName},
                email: {stu.email}
                {stu.mathScore && ", math:"+ stu.mathScore}
                {stu.computerScore && ", computer:"+ stu.computerScore}
                {stu.engScore && ", english:"+ stu.engScore}
                 </div>)}
        </div>
    );
}
