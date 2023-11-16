import { Link } from "react-router-dom";


export default function({el}){

    // Le but ici mettre un lien vers la page Product du meme nom, Mettre une police un peu stylée pour les textesZ

    return (
        <div className=" drop-shadow-2xl border border-gray-500 rounded-xl flex flex-col gap-2 text-center font-thin w-2/12">
            <p className='text-red-600 font-Profile text-3xl font-bold'>{el.Name}</p>
            <p className='font-Profile text-xl'>{el.Description}</p>
            <p>{(el.Statut == 1) ? "Disponible" : "Vendu"}</p>
            <Link className="text-xl text-blue-500 underline-offset-1 decoration-inherit"to={`/Product/${el.id}`}>Lien Produit</Link>
        </div>
    )
}