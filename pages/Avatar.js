import Image from "next/image";
import Vercel from "../public/vercel.svg"
const Avatar = ({imageURL}) => {
  return (
    <div className=" w-[120px] h-[120px] ml-8 ring-[5px] ring-[#3b52d4] rounded-full ">
    {imageURL ? (
      <Image 
        src={imageURL ? imageURL : Vercel}
        width="120"
        height="120"
        objectFit="cover"
        className="rounded-full "
    />
    ): (
      <p className="text-lg font-bold font-mono text-center pt-8 text-gray-800">No Image Found</p>
    )
    
    }
    </div>
  )
}

export default Avatar