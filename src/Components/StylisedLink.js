import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function StylisedLink({Style}) {
  
    let style;

    switch(Style.theme){
        case 'HomeLogo': style = "text-white text-7xl font-Logo";
                         break;
        case 'HomeExplore': style="text-white text-5xl font-Logo";
                            break;
        case 'HomeLogin' : style="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-4xl font-Logo";
                            break;
        case 'HomeProfile' : style="";
                            break;
        default : style = "";
            break;
    }


    return(
        <Link className={style} to={Style.toLink}>{Style.text}</Link>
    )
}
