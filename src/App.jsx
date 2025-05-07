import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Product from "./pages/Product"
import Detail from "./pages/Detail"
import Category from "./pages/Category"
import Home from "./pages/Home"




const router =createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element:<Home/>},
            { path: "ürünler", element:<Product/>},
            { path: "detay/id", element:<Detail/>},  
            { path: "kategori", element:<Category/>,
                children: [
                    { path: "hikaye" , element: <h1>Hikaye</h1>},
                     { path: "roman" , element: <h1>Roman</h1>},
                ],
            },
        

        ],

        
    },
],
)





const App = () => {
  return <RouterProvider router= {router} /> 
}
    


export default App