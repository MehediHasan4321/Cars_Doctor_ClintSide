import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import Home from '../components/Layouts/Home/Home';
import Regeister from '../components/LogReg/Regeister/Regeister';
import Login from '../components/LogReg/Login/Login';
import LogReg from '../components/LogReg/LogReg';
import CheckOut from '../components/Layouts/CheckOut/CheckOut';

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
                element:<CheckOut/>,
                loader:({params})=>fetch(`http://localhost:8000/services/${params.id}`)
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