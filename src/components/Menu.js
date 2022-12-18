import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import style from '../Menu.module.css'

function Menu() {
  return (
   <>
           
          <ListGroup className={style.ListGroup}>
        <h4 className={style.menu}>Menu</h4>
        <Link to="/" className='list-group-item list-group-item-action list-group-item-info' action >
          Home
        </Link>
        <Link to="/add-course" className='list-group-item list-group-item-action list-group-item-info' action >
            Add Course
              </Link>
        <Link to="/courses" className='list-group-item list-group-item-action list-group-item-info' action >
                View all course
              </Link>
       
        <Link to="/" className='list-group-item list-group-item-action list-group-item-info' action >
                  This one is a button
              </Link>

          </ListGroup>
   </>
  )
}

export default Menu