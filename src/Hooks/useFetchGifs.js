import { useEffect, useState } from "react"
import { getGifApi } from "../Services/getGifsApi"

export const useFetchGifs = (category) => {
    const [imgs, setImgs] = useState({data:[],loading:true})

    useEffect(() => {
        getGifApi(category).then(res=>{
            setImgs({data:res,loading:false})
        
            console.log(`DESDE USEFETCH ${res[0].title}`)
        }).catch(e=>console.log(e))
    }, [category])
    
    return imgs;
}
