import React from 'react';
import CollectionsIcon from '@mui/icons-material/Collections';
import SunnySnowingIcon from '@mui/icons-material/SunnySnowing';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const sections = [
    {
      name: "Gallery",
      title: "Gallery",
      content: "This fish caught by *username*, during *month* in *year*",
      buttonDescription: "More photos",
      icon: <CollectionsIcon className='icon'/>,
    },
    {
      name: "Forecast",
      title: "Forecast",
      content:
        "The wethear today in {Default/Client Area} is {relevant parameters for diving such as wave height, wind, sun and more}",
      buttonDescription: "Full Forecast",
      icon: <SunnySnowingIcon className="icon"/>,
    },
    {
      name: "Visibility",
      title: "Visibility",
      content:
        "Last visibility update in {area} - {number in meters}, Current {Very-strong to None} {Current-direction`}",
      buttonDescription: "See more",
      icon: <VisibilityIcon className="icon"/>,
    },
    {
      name: "AliExpress",
      title: "AliExpress",
      content: "Link for random product",
      buttonDescription: "More Products",
      icon: <ProductionQuantityLimitsIcon className="icon"/>

    },
  ];

  export default sections;