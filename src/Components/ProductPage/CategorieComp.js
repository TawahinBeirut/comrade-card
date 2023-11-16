import { useProductsCat } from "../../hooks/useProductsCat"
import Categories from '../../Categories.json'


export default function CategorieComp({id}){

    // On récupere le blaze de la catégorie avec son id
    let Categorie;
    Categories.map(cat => {
        if(cat.id == id){
            Categorie = cat
        }
    })

    return (
        <div className=" font-light text-xl">
            {Categorie.Name}
        </div>
    )
}