import React from 'react'

function AddCourse() {
  return (
   <>
   <h3>fill the details about courses</h3>
   <hr className="w-25 mx-auto"></hr>
          <form className="border  border-primary p-4 w-55 mx-auto" >
              <div className="input-group has-validation mb-3 w-50 mx-auto">
                  <label for="validationServerUsername" className="form-label m-2">Course name  </label>
                  <input type="text" className="form-control is-invalid rounded-start" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
        
              </div>
              <div className="input-group has-validation mb-3 w-50 mx-auto ">
                  <label for="validationServerUsername" className="form-label m-2">Descreption  </label>
                  <input type="text" className="form-control is-invalid rounded-start" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
                  style={{height:120}}
                  required />
                  
              </div>
        
           
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
   
   </>
  )
}

export default AddCourse