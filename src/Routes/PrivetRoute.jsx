import{ useContext } from 'react';
import { AutnContextProvider } from '../AuthProvider/AuthPrivider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/ShareCompo/Loading/Loading';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {currentUser,isLoading} = useContext(AutnContextProvider)
    if(isLoading){
        return <Loading/>
    }
    if(currentUser){
        return children
    }
    return <Navigate to='/logreg/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;