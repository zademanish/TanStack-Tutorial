import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../../Api/api';

const FetchOld = () => {
     const [posts,setPosts] = useState([]);
     const [loading, setLoading] = useState(true);
    const getPostData=async ()=>{
        try {
            const res= await fetchPosts();
            setLoading(false)
             setPosts(res) ;
        } catch (error) {
            console.log(error)
            setLoading(false);
            return [];
        }
    }
    useEffect(()=>{
        getPostData()
    },[])
    
     if(loading === true) return <h3>Loading....</h3>

  return (
    <div className='place-items-center'>
        {
           posts?.map((item,index)=>(
                 <div key={index} className='max-w-4xl my-4 text-xl  bg-amber-200 px-3 py-2 rounded-sm'>
                    <h2>ID: {item?.id}</h2>
                    <h2>Title: {item?.title}</h2>
                    <p>{item?.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default FetchOld