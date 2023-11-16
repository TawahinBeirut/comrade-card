import { useEffect } from "react"
import { useProfile } from "../../hooks/useProfile"
import Loading_Page from "../Loading_Page"


export default function Sellor({id}){

    // On recupere le blaze du vendeur avec son id

    const Sellor =  useProfile(parseInt(id))
    
    return(
        <div>
        {Sellor.loading ? <p>Loading...</p> : null}
        {(Sellor.error != null) ? <p>{JSON.stringify(Sellor.error)}</p> : null}
        {Sellor.check ? <p className="font-bold text-xl">{Sellor.data.Name}</p> : null}
        </div>
    )
}