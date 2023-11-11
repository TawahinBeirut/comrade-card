

export default function({el}){

    // Le but ici mettre un lien vers la page Product du meme nom, Mettre une police un peu stylée pour les textes

    return (
        <div className="border border-black flex flex-col gap-2 text-center font-thin w-2/12">
            <p>{el.Name}</p>
            <p>{el.Description}</p>
            <p>{el.Statut}</p>
            <p>{el.NbBaskets}</p>
        </div>
    )
}