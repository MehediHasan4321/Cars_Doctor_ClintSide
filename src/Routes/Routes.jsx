import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main/Main';
import Home from '../components/Layouts/Home/Home';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])

export default Routes;