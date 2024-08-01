import { useEffect, useState } from "react";
import ImgContainer from "./ImgContainer";
import CircularProgress from "@mui/material/CircularProgress";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [images, setImages] = useState([]);
  // console.log("images:", images);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      // setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/fetchImages`);
        // console.log("useEffect fetchImages response: ", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log("useEffect fetchImages data: ", data);
        setImages(data);
      } catch (error) {
        setError("Failed to fetch images");
        // console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
    const intervalId = setInterval(fetchImages, 4000); // Refetch every 4 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  // if (!images || images.length === 0) {
  //     return (
  //         <h2 className="m-4 text-2xl font-bold">No Images Found</h2>
  //     )
  // }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <h2 className="m-4 text-2xl font-bold text-red-500">{error}</h2>;
  }

  return (
    <>
      <section className="px-2 my-3 grid gap-4 grid-cols-gallery">
        {images.map((image) => (
          <ImgContainer
            key={image.ID}
            photo={image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </section>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default Gallery;
