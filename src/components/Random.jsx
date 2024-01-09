import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { fetchData, loading, gif } = useGif()


  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
      {
        loading? (<Spinner/>):(<img src={gif} width="450"/>)
      }
      
      <button onClick={()=>fetchData()} className="w-10/12 bg-white opacity-30 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  );
}
