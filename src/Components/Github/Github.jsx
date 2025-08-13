import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData()


  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Sahil8629')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })

  // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github name : {data.id}
    <img  src={data.avatar_url} alt="github picture" width={300} />
    </div>

  )
}

export default Github

export const GithubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/Sahil8629')
  return (response).json()
  
}