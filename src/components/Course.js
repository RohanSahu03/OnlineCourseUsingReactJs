import React, { useState } from 'react'

function Course(props){
  

  return (
    <>

      <div className="card mb-4 text-bg-light" >
        <h5>{props.course.title}</h5>
        <p>{props.course.descreption}</p>
        <div class="card-body">
          <button type="button" className="btn btn-primary">update</button>
          <button type="button" className="btn btn-secondary ms-3">Delete</button>
        </div>
        
      </div>
    
    </>
  )
}

export default Course