import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
    const[gif,setGif] =useState("");
    const [loading,setLoading] = useState(false);

    // async function fetchData(tag){
      const fetchData = async (tag) => {
        setLoading(true);
        const {data}= await axios.get(tag?`${randomMemeUrl}&tag=${tag}`:randomMemeUrl);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
      setLoading(false);
    }
    useEffect(() => {
      fetchData(
        'car'
      );
    }, [])
    return({gif,loading,fetchData});
};

export default useGif;
