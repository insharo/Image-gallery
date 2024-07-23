import Image from "next/image";
import { useEffect, useState } from "react";
import ImgContainer from "./ImgContainer";


const Gallery = () => {

    const [images, setImages] = useState([]);
    console.log("images:", images);


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/fetchImages`);
                console.log("useEffect fetchImages response: ", response);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("useEffect fetchImages data: ", data);
                setImages(data);
            } catch (error) {
                console.error('Failed to fetch images:', error);
            }
        };
        fetchImages();
        const intervalId = setInterval(fetchImages, 4000); // Refetch every 4 seconds

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

    if (!images || images.length === 0) {
        return (
            <h2 className="m-4 text-2xl font-bold">No Images Found</h2>
        )
    }

    return (
        <section className="px-2 my-3 grid gap-4 grid-cols-gallery">
                {
                    images.map(image => (
                        <ImgContainer key={image.ID} photo={image}></ImgContainer>
                    ))
                }
        </section>
    );
};

export default Gallery;