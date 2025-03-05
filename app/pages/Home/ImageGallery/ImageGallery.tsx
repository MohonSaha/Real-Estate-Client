import { useState } from "react";
import "./ImageGallery.css";
import { X } from "lucide-react";
const ImageGallery = () => {
  let images = [
    {
      id: 1,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Griya Asri Tamansari",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Permata Indah Residence",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co.com/zh76TJdv/image-2.jpg",
      title: "Griya Tamansari",
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Griya Asri Tamansari",
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co.com/zh76TJdv/image-2.jpg",
      title: "Permata Indah Residence",
    },
    {
      id: 6,
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1734549547994-accfd76f626e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Griya Tamansari",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc: string) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="w-full  mx-auto  py-8">
      <h1 className="text-4xl font-bold text-center mb-2">
        Explore Our Moments
      </h1>
      <p className="text-center text-gray-600 mb-8">
        From cozy apartments to spacious family homes, our diverse listings
        cater to various needs and preferences.
      </p>
      <div className="gallery">
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => getImg(image.imgSrc)}
            >
              <img
                src={image.imgSrc}
                alt={image.title}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>

      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="img" />
        <X onClick={() => setModel(false)} />
      </div>
    </div>
  );
};

export default ImageGallery;
