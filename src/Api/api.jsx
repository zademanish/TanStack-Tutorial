import axios from "axios";

const api =axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
});

// To fetch the data

export const fetchPosts = async(pageNumber)=>{
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=4`);
    return res.status === 200 ? res.data : [];
};

export const fetchDataByID = async(id)=>{
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
};

export const deletePost =async(id)=>{
    return api.delete(`/posts/${id}`);
}

export const updatePost =async(id)=>{
    return api.patch(`/posts/${id}`, {title:"I  have updated"});
}

export const fetchUsers =async({pageParam = 1})=>{
   try {
    const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);

    return res.data;
   } catch (error) {
    console.log(error);
   }
}