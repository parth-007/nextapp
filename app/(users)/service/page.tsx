import  styles from "./service.module.css";
import Image from "next/image";
import demoImg from "@/public/IMG_3070.jpg";


export const metadata = {
    icons: {
        icon: "/x.jpeg",
    },
    title: "Service page",
    description: "This is the service page",
    keywords: ["service", "page", "next.js", "react"],
    authors: [{name: "Parth", url: "https://www.parth.com"}, {name: "John", url: "https://www.john.com"}],
}

const Service = async () => {
    
    return <><h1 className={styles.common_header}>Service</h1>

<div>
    <Image blurDataURL="" placeholder="blur" src={demoImg} alt="demo" width={400} height={400} quality={100}/>
</div>
   </>
};

export default Service;