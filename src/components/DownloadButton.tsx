"use client"
import Image from "next/image";

type Props = {
    className: string;
    link?: string;
    imageSrc: string;
}

const DownloadButton = (props: Props) => {
    return (
        <a className={props.className} href={props.link} target="_blank" rel="noopener noreferrer">
            <Image src={props.imageSrc} alt="DownloadButton" height={24} width={24} />
            <h4 className="text-black font-semibold">Download</h4>
        </a>
    );
}

export default DownloadButton;