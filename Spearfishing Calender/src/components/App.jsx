import React, {useEffect, useState} from "react";
import Header from "./Header"
import NavigationBar from "./NavigationBar";
import Welcome from "./Welcome";
import Gallery from "./Gallery";
import Visibility from "./Visibility";
import Aliexpress from "./Aliexpress";
import Forecast from "./Forecast";
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
    <div className="grid-sub-container">
      <Gallery
      id={galleryData[photoCounter].id}
      name={galleryData[photoCounter].name}
      date={galleryData[photoCounter].date}
      imgSrc={galleryData[photoCounter].imgSrc}
      />
      <Visibility/>
      <Forecast/>
      <Aliexpress/>
      </div>
    </div>
    )
}

export default App
