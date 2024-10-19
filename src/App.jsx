import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [posts,setPosts] = useState([])
  const [comments,setComments] = useState([])
  const [userId,setUserId] = useState(null)
  const [postId,setPostId] = useState(null)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
      setUsers(data)
    })
  },[])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json()).then(data => {
      setPosts(data)
    })
  },[userId])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => res.json()).then(data => {
      setComments(data)
    })
  },[postId])
  return (
    <>
      <div className='m-3'>
        <div className='flex items-center mb-5'>
          <h1 className='ml-[12%] text-[24px]'>Users</h1>
          <h3 className='ml-[30%] text-[24px]'>Posts</h3>
          <h2 className='ml-[27%] text-[24px]'>Comments</h2>
        </div>
        <div className='flex items-center gap-10'>
          <ul className='w-[400px] border-[3px] border-slate-700 ml-[20px] h-[90vh] rounded-lg bg-slate-300 p-3 gap-5 flex flex-col overflow-y-auto shadow-lg'>
              {users.map(item => (
                  <li key={item.id} className='bg-white mx-auto bg-antiquewhite w-[370px] p-3 rounded-md shadow-lg hover:scale-[1.05] duration-300'> 
                    <div className='p-1 space-y-3'>
                        <strong><strong>Id: </strong>{item.id}</strong>
                        <h2><strong>Name: </strong>{item.name}</h2>
                        <p><strong>Email: </strong>{item.email}</p>
                        <p><strong>Phone: </strong>+{item.phone}</p>
                        <button onClick={() => setUserId(item.id)} className='w-full font-semibold bg-green-600 text-white py-[10px] block mt-2 hover:opacity-[60%] rounded-md'>SHow Posts</button>
                    </div>
                </li>
              ))}
          </ul>
          <ul className='w-[400px] border-[3px] border-slate-700 ml-[20px] h-[90vh] rounded-lg bg-slate-300 p-2 gap-5 flex flex-col overflow-y-auto shadow-lg'>
              {posts.map(item => (
                  <li key={item.id} className='bg-white mx-auto bg-antiquewhite w-[370px] p-2 rounded-md shadow-lg hover:scale-[1.05] duration-300'> 
                    <div className='p-1 flex flex-col gap-3 '>
                        <strong><strong>Id: </strong>{item.id}</strong>
                        <strong><strong>userId: </strong>{item.userId}</strong>
                        <h2><strong>Title: </strong>{item.title}</h2>
                        <p><strong>Body: </strong>{item.body}</p>
                        <button onClick={()=> setPostId(item.id)} className='w-full font-semibold bg-green-600 text-white py-[10px] block mt-2 hover:opacity-[60%] rounded-md'>SHow Comments</button>
                    </div>
                </li>
              ))}
          </ul>
          <ul className='w-[400px] border-[3px] border-slate-700 ml-[20px] h-[90vh] rounded-lg bg-slate-300 p-3 gap-5 flex flex-col overflow-y-auto shadow-lg'>
              {comments.map(item => (
                  <li key={item.id} className='bg-white mx-auto bg-antiquewhite w-[370px] p-3 rounded-md shadow-lg hover:scale-[1.05] duration-300'> 
                    <div className='p-1 flex flex-col gap-3'>
                        <strong><strong>Id: </strong>{item.id}</strong>
                        <strong><strong>PostId: </strong>{item.PostId}</strong>
                        <h2><strong>Name: </strong>{item.name}</h2>
                        <p><strong>Email: </strong>{item.email}</p>
                        <p><strong>Body:</strong>{item.body}</p>
                        <button className='w-full font-semibold bg-green-600 text-white py-[10px] block mt-2 hover:opacity-[60%] rounded-md'>SHow Posts</button>
                    </div>
                </li>
              ))}
          </ul>
        </div>
     </div>
    </>
  )
}

export default App
