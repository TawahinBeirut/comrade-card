
import Cookies from 'js-cookie'
import dataJson from '../data.json'
import { useQuery} from "@apollo/client";
import { VerifyUser } from "../Utils/queries";

const useAuth = () => {
const [isAuth,setIsAuth] = useState({
    error : null,
    loading : false,
    data : null,
    check : false,
    userId : ""
})

// On récupere le cookie de la page
var cookie = Cookies.get(dataJson.Cookie_Name);
if (cookie === undefined){
    cookie = "";
}

const {loading,error,data} = useQuery(VerifyUser,{variables : {cookie: cookie}})

useEffect(() => {
if(error){
    setIsAuth({
        ...isAuth,
        error : error
    })
}
else if(loading){
    setIsAuth({
        ...isAuth,
        loading: true
    })
}
else if(data){
    if (data.Statut === 200 ){
        setIsAuth({
            ...isAuth,
            data: data,
            check: true,
            userId: data.data.id
        })
}
else setIsAuth({...isAuth})
}
},[])

    return isAuth;
}
export {useAuth}