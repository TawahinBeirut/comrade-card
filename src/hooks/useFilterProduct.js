import { useMemo } from "react";

const useFilterProduct = (data,Name) => {

  return useMemo(() => {
    if (data != null){
    return data.filter((el) =>{      
        return el.Name.includes(Name) ;}
    );
    }
  }, [data,Name]);
};

export default useFilterProduct;