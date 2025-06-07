import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchDataByID } from "../../Api/api";

const FetchDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["post",id],
    queryFn: () => fetchDataByID(id),
  });

 
  return (
    <div className="place-items-center">
      <h2 className="text-2xl font-bold my-4">Post Details No-{data?.id}</h2>
    <div
      className="max-w-4xl my-4 text-xl  bg-amber-200 px-3 py-2 rounded-sm"
    >
        <h2>ID: {data?.id}</h2>
        <h2>Title: {data?.title}</h2>
        <p className="text-sm text-slate-800">{data?.body}</p>
    </div>
    </div>
  );
};

export default FetchDetail;
