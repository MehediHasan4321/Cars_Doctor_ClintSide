import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import Home from '../components/Layouts/Home/Home';
import Regeister from '../components/LogReg/Regeister/Regeister';
import Login from '../components/LogReg/Login/Login';
import LogReg from '../components/LogReg/LogReg';
import CheckOut from '../components/Layouts/CheckOut/CheckOut';
import Orders from '../components/Layouts/Orders/Orders';
import PrivetRoute from './PrivetRoute';
import Services from '../components/Layouts/Services/Services';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/checkout/:id',
                element:<PrivetRoute><CheckOut/></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:8000/services/${params.id}`)
            },
            {
                path:'/myOrders',
                element:<PrivetRoute><Orders/></PrivetRoute>
            },
            {
                path:'/services',
                element:<Services/>
            }
        ],
        
    },
    {
        path:'/logreg',
        element:<LogReg/>,
        children:[
            {
                path:'/logreg/login',
                element:<Login/>
            },
            {
                path:'/logreg/regeister',
                element:<Regeister/>
            }
        ]
    }
])

export default Routes;