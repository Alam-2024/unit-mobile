import React from "react";
import CustomView from "@/components/customs/CustomView";
import Navbar from "@/components/navbar/Navbar";
import CustomText from "@/components/customs/CustomText";

const TabThirdScreen = () => {
  const links = [
    { id: 9, url: "/sixth", text: "6°" },
    { id: 10, url: "/seventh", text: "7°" },
    { id: 11, url: "/eighth", text: "8°" },
    { id: 12, url: "/ninth", text: "9°" },
    { id: 13, url: "/tenth", text: "10°" },
    { id: 14, url: "/eleventh", text: "11°" },
    { id: 15, url: "/twelfth", text: "12°" },
  ];
  return (
    <CustomView>
      <Navbar links={links} />
      <CustomText value="Tab Third" big bold />
    </CustomView>
  );
};

export default TabThirdScreen;
