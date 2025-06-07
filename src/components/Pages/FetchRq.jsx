import { fetchPosts } from '../../Api/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FetchRq = () => {
  const [pageNumber,setPageNumber] = useState(0);

    const { data,isPending, isError, error } = useQuery({
        queryKey: ["posts",pageNumber], //useState
        queryFn:()=>fetchPosts(pageNumber), //useEffect
       // gcTime:1000,
    //    staleTime:10000,
    // refetchInterval:1000,
    // refetchIntervalInBackground:true,
    });
    if(isPending) return <h2>Loading...</h2>
    if(isError) return <h2>Something went Wrong {error.message}</h2>

  return (
    <div className='place-items-center'>
        {
            data?.map((item,index)=>(
                <div key={index} className='max-w-4xl my-4 text-xl  bg-amber-200 px-3 py-2 rounded-sm'>
                  <NavLink to={`/rq/${item.id}`}>
                    <h2>ID: {item?.id}</h2>
                    <h2>Title: {item?.title}</h2>
                    <p>{item?.body}</p>
                </NavLink>
                </div>
               
            ))
        }
        <div className='flex gap-2 mb-3 items-center'>
          <button disabled={pageNumber === 0 ? true : false} onClick={()=>setPageNumber((prev)=>prev-4)} className=" bg-green-600 px-3 py-2 rounded-md text-lg uppercase">Prev</button>
          <p className='text-lg px-3'>{(pageNumber/4)+1}</p>
          <button onClick={()=>setPageNumber((prev)=>prev+4)} className='bg-green-600 px-3 py-2 rounded-md text-lg uppercase'>Next</button>
        </div>
    </div>
   
  )
}

export default FetchRq