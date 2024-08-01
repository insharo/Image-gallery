import Image from "next/image";

const ImgContainer = ({ photo, onClick }) => {
  return (
    <div
      key={photo.ID}
      className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={photo.URL}
        fill={true}
        alt="Not found"
        className="object-cover group-hover:opacity-75 transition duration-300 ease-in-out group-hover:border-black group-hover:border group-hover:shadow-custom"
      ></Image>
    </div>
  );
};

export default ImgContainer;
