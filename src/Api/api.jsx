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