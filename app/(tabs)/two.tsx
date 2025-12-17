import Navbar from "@/components/navbar/Navbar";
import CustomView from "@/components/customs/CustomView";
import CustomText from "@/components/customs/CustomText";

export default function TabTwoScreen() {
  const links = [
    { id: 4, url: "/first", text: "1°" },
    { id: 5, url: "/second", text: "2°" },
    { id: 6, url: "/third", text: "3°" },
    { id: 7, url: "/fourth", text: "4°" },
    { id: 8, url: "/fifth", text: "5°" },
  ];

  return (
    <CustomView>
      <Navbar links={links} />
      <CustomText value="Tab Two" big bold />
    </CustomView>
  );
}
