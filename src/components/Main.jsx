import ImageSvg from "./ImageSvg";
import { useEffect, useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setMeme((oldMeme) => ({
      ...oldMeme,
      [name]: value,
    }));
  };

  //generate random image
  const handleImage = () => {
    const randomIdx = Math.floor(Math.random() * allMemes.length);
    const memeImg = allMemes[randomIdx].url;
    setMeme((oldMeme) => ({
      ...oldMeme,
      imageUrl:memeImg
    }));
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button onClick={handleImage} className="getImageBtn">
          Get a new meme image
          <ImageSvg color={"white"} />
        </button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
