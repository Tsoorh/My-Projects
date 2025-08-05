import React, {useEffect, useState} from "react";
import Header from "./Header"
import NavigationBar from "./NavigationBar";
import Gallery from "./Gallery";
import Welcome from "./Welcome";
import galleryData from "../data/gallery-catches";


function App(){
  const [isOpen,setIsOpen] = useState(false);
  const [photoCounter,setPhotoCounter] = useState(0);

  useEffect(()=>{
    const intervalId = setInterval(() => {   
        setPhotoCounter((prevPhoto)=>{  
          if (prevPhoto === galleryData.length-1){
            return 0;
          }else{
            return prevPhoto + 1 ;
          }
        });
    }, 5000);

    return()=>clearInterval(intervalId);
  },[]);

  function onOpen(){
    setIsOpen(prev=>!prev);
  }



  return(
    <div>
      
      <Header
      onOpen={onOpen}
      />
      <NavigationBar
      isOpen={isOpen}
      />
    <div className="grid-container">
      <Welcome />
    </div>
      <Gallery
      id={galleryData[photoCounter].id}
      name={galleryData[photoCounter].name}
      date={galleryData[photoCounter].date}
      imgSrc={galleryData[photoCounter].imgSrc}
      />
    </div>
    )
}

export default App
