
export const getGifApi= async(category)=>{
    
    const urll=`https://api.giphy.com/v1/gifs/search?api_key=qd5tBsgGRzNcayChUwScEKF5Cgk4bAtd&q=${encodeURI(category)}&limit=10`;
    const resp= await fetch(urll)
    const {data}= await resp.json()

    const gifs=data.map(gif=>{
        return {
            id:gif.id,
            title:gif.title,
            url:gif.images.downsized_medium.url
        }
       
    })
    return gifs
    
}
