"use client"
import Image from "next/image";
import mockup from "../../public/assets/mockup.png";

type Props = {
    height?: number,
    width?: number,
}

const Mockup = (props: Props) => {
    return (
        <Image quality={100} src={mockup} alt="preview" height={props.height} width={props.width} className="h-auto w-3/4 lg:w-1/2 sm:w-2/3 pb-16 lg:pb-0" />
    );
}

export default Mockup;