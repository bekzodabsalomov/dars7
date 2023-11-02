import { useState } from "react";
import Gallery from "../components/Gallery";
import SearchSection from "../components/SearchSection";
import { useFetch } from "../hooks/useFetch";
const API =
  "https://api.unsplash.com/search/photos?client_id=fgtelVfpmKPYzdqfkKtlwJy7n7AtYvfEP91IW2vsGrA&page=1&query=";

function Main() {
  const [url, setUrl] = useState(API + "features");
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };
  return (
    <div>
      <h1>Search Any Image: </h1>
      <SearchSection setNewUrl={setNewUrl} />
      {data && <Gallery data={data} />}
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default Main;