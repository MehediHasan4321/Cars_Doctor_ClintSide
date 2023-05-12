import{ useContext } from 'react';
import { AutnContextProvider } from '../AuthProvider/AuthPrivider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {currentUser,isLoading} = useContext(AutnContextProvider)
    if(isLoading){
        return <div className='container mx-auto my-24 bg-[#ff3811] text-white font-semibold px-4 py-1 text-center'>Loading.....</div>
    }
    if(currentUser){
        return children
    }
    return <Navigate to='/logreg/login' replace></Navigate>
};

export default PrivetRoute;