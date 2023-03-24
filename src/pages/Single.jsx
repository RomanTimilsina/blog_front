import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/11131486/pexels-photo-11131486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            
            <img src={Delete} alt="" />
            
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p> Beatae, reiciendis pariatur. Amet, suscipit! Fugiat quaerat expedita, odit voluptate amet eaque nobis perspiciatis cumque necessitatibus blanditiis alias aperiam cupiditate hic autem. Beatae, reiciendis pariatur. Amet, suscipit! Fugiat quaerat expedita, odit voluptate amet eaque nobis perspiciatis cumque necessitatibus blanditiis alias aperiam cupiditate hic autem. Beatae, reiciendis pariatur. Amet, suscipit! Fugiat quaerat expedita, odit voluptate amet eaque nobis perspiciatis cumque necessitatibus blanditiis alias aperiam cupiditate hic autem. Beatae, reiciendis pariatur. Amet, suscipit! Fugiat quaerat expedita, odit voluptate amet eaque nobis perspiciatis cumque necessitatibus blanditiis alias aperiam cupiditate hic autem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis pariatur. Amet, suscipit! Fugiat quaerat expedita, odit voluptate amet eaque nobis perspiciatis cumque necessitatibus blanditiis alias aperiam cupiditate hic autem. Beatae, reiciendis pariatur. Amet, suscipit! Fugiat quaerat expedita, odit voluptate amet eaque nobis perspiciatis cumque necessitatibus blanditiis alias aperiam cupiditate hic autem. Fuga corrupti laborum porro nihil. Numquam, reiciendis! Illum ratione omnis quod magni reiciendis autem assumenda minus! Sunt, maxime! Nemo earum consequatur molestiae.</p>
      </div>
      <div className='menu'>
        <Menu/>
      </div>
    </div>
  )
}

export default Single
