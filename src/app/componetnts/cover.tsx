import React from "react";
import Image from "next/image";
import styles from './cover.module.css';
import { UploadButton } from "@/utils/uploadthing";

interface CoverProps {
    url?: string;
    setUrl: (_: string) => void;
}

const Cover: React.FC<CoverProps> = ({ url, setUrl}) => {
    return (
        <div className={`${styles.cover} ${!url ? 'hidden' : ''}`}>
            {!!url && (
                <>
  <Image 
  src={url} 
  alt="Image Cover" 
  fill 
  className={styles.image} 
  sizes="100vw" 
/>
<div className={styles.background}>
    <UploadButton 
    className={styles.uploadButton}  endpoint="imageUploader"
    onClientUploadComplete={(res) =>{
   setUrl(res[0].url);
    }}
    />
</div>
</>
            )}
          
        </div>
    );
}

export default Cover;
