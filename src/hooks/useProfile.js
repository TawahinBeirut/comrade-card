import { useEffect, useState } from "react"
import { Profile } from "../Utils/queries"
import { useQuery } from "@apollo/client"

const useProfile = (id) => {
    const [Result,setResult] = useState({
        loading : false,
        error : null,
        check : false,
        data : {
            Name: "",
            Email :"",
            Score: "",
        }
    })

    const {loading,error,data} = useQuery(Profile,{variables: {userId: id}})

    useEffect(() => {
        if (error !== undefined){
            setResult({
                ...Result,
                loading: false,
                error: error,
            })
        }
        else if (loading){
            setResult({
                ...Result,
                error : null,
                loading: true
            })
        }
        else if (data !== undefined){
            const data2 = data.User;
            if (data2.Statut === 200){
                setResult({
                    ...Result,
                    loading: false,
                    error : null,
                    check: true,
                    data:{
                        Name : data2.data[0].Name,
                        Email: data2.data[0].Email,
                        Score: data2.data[0].Score
                    }
                })  
            }
            else {
                setResult({
                    ...Result,
                    loading: false,
                    error: null,
                    check: false
                })
            }
        }
        else setResult(...Result)
    },[data,loading,error])
    
    return Result;
}

export {useProfile}