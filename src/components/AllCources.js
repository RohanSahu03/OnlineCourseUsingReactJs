import React from 'react'
import Course from './Course'
import { useState } from 'react'

function AllCources() {

    const [courses, setCourses] = useState([
        { title: "java course", descreption: "this course is beginner friendly" },
        { title: "Spring boot course", descreption: "this course is for spring boot professinols" },
        { title: "React course", descreption: "learn react to make single page beautiful websites" },
        { title: "Python course", descreption: "this course is for python developer" }
    ])

  return (
   <>
   <h3>All cources</h3>
        {

            courses.length>0 ? courses.map((arrayItem)=> <Course course={arrayItem}/>)  :"not  found"

        }

   </>
  )
}

export default AllCources