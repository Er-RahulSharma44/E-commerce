import React, {useContext} from 'react'
import { MyContext } from "../CONTEXT/Mycontext";
// import PropTypes from 'prop-types'

export default function Alert() {
  const {alert} = useContext(MyContext);
  return (
    <div className="alert" style= {{height: "90px" } }>
    {alert && <div>
      <div className="alert alert-warning" role="alert">
       <p>{alert.msg}</p> 
      
      </div>
    </div>}
    </div>
  )
}
