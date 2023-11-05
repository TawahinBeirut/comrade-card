import { useMemo } from "react";

const useFilter = (data,Categorie) => {

  return useMemo(() => {
    if (data != null){
    return data.filter((el) =>{      
        return el.idCategorie == Categorie;}
    );
    }
  }, [data,Categorie]);
};

export default useFilter;