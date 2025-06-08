import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { fetchUsers } from '../../Api/api'

const InfiniteScroll = () => {

  const {data, hasNextPage, fetchNextPage,status, isFetchingNextPage} = useInfiniteQuery({
    queryKey:["users"],
    queryFn:fetchUsers,
    getNextPageParam:(lastPage, allPages) =>{
      return lastPage.length===10 ? allPages.length + 1: undefined;
    }
  });

  const handleScroll = ()=>{
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -1;

    if(bottom && hasNextPage){
      fetchNextPage();
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll", handleScroll);
  },[hasNextPage])

  if(status === "loading") return <h2>Loading</h2>
  console.log(data);
  return (
    <>
      <div className='container '>
        <h2 className='text-2xl font-bold text-center'>Infinite-Scroll</h2>
        {data?.pages?.map((page,index)=>(
          <div key={index}>
            {
              page?.map((user)=>(
                <div className='border flex items-center gap-10 my-10 p-4' key={user.id}>
                  <img className='w-[10vw] md:w-[7vw] rounded-full h-[15vh]' src={user?.avatar_url} />
                  <h2 className='text-xl font-bold'>{user.login}</h2>
                </div>
              ))
            }
          </div>
        ))}
        {isFetchingNextPage && <div className='text-2xl font-bold'>Loading more...</div>}
      </div>
    </>
  )
}

export default InfiniteScroll