import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import FetchOld from "./components/Pages/FetchOld"
import Home from "./components/Pages/Home"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import FetchRq from "./components/Pages/FetchRq"

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/trad",
        element:<FetchOld/>
      },
     {
      path:"/rq",
      element:<FetchRq/>
     }
    ]
  }
])

function App() {
  const queryClient = new QueryClient()
 return (
  <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}>
   </RouterProvider>
  </QueryClientProvider>
  )
}

export default App
