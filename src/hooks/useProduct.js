import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { Product } from "../Utils/queries"


const useProduct = (id) => {

    const [Result,setResult] = useState({
        loading : false,
        error : null,
        check : false,
        data : null
    })

    const {loading,error,data} = useQuery(Product,{variables: {productId: id}})

    useEffect(() => {

        if (error != undefined){
            setResult({
                ...Result,
                error: error,
                loading: false
            })
        }
        else if (loading == true){
            setResult({
                ...Result,
                loading: true
            })
        }
        else if (data != undefined){
            const data2 = data.Product
            if (data2.Statut == 200){
                setResult({
                    ...Result,
                    loading: false,
                    error : null,
                    check: true,
                    data : data2.data
                })
            }
            else{
                setResult({
                    ...Result,
                    loading : false,
                    error : null,
                })
            }
        }
        else setResult({...Result})
    },[data,loading,error])

    return Result;
    
}
export{useProduct}