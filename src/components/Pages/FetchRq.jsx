import { fetchPosts } from '../../Api/api';
import { useQuery } from '@tanstack/react-query';

const FetchRq = () => {

  

    const { data,isLoading, isError, error } = useQuery({
        queryKey: ["posts"], //useState
        queryFn:fetchPosts, //useEffect
    });
    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>Something went Wrong {error}</h2>

  return (
    <div className='place-items-center'>
        {
            data?.map((item,index)=>(
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

export default FetchRq