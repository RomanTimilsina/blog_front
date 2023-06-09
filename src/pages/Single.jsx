import React, { useContext, useEffect, useState } from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import { AuthContext } from '../context/authContext'
import axios from 'axios'
import moment from 'moment'

const Single = () => {

  const [post, setPosts] = useState([])

  {console.log(post)}
  const {currentUser} =  useContext(AuthContext)
  {console.log(currentUser)}
  const navigate = useNavigate()

  const postId  = useLocation().pathname.split('/')[2]
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/${postId}`)
        setPosts(res.data)
        
        
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[postId])

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.postImg} alt="" />
        <div className="user">
          <img src={post?.userImg} alt="" />
          <div className="info">
            <span>{post?.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          { currentUser?.username === post?.username &&  <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
            <img src={Edit} alt="" />
            </Link>
            
            <img onClick={handleDelete} src={Delete} alt="" />
            
          </div>}
        </div>
        <h1>{post.title}</h1>
        <p> {getText(post.desc)}</p>
        
      </div>
      <div className='menu'>
        <Menu cat={post.cat} />
      </div>
    </div>
  )
}

export default Single
