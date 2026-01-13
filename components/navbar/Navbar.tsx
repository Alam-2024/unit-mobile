import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import CustomButton from "../customs/CustomButton";
import CustomText from "../customs/CustomText";

type NavbarProps = {
  id: number;
  url: string;
  text: string;
};

const Navbar = ({ links }: { links: NavbarProps[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  if (!links) return null;

  return (
    <View style={styles.container}>
      {links.map((link) => {
        const isSelected = selectedId === link.id;

        return (
          <CustomButton
            key={link.id}
            onPress={() => {
              setSelectedId(link.id);
              router.push({
                pathname: "/data",
                params: { grade: link.text },
              });
            }}
            id={link.id}
            shadowColor="#3d3d3d"
            shadowWidth={1}
            shadowHeight={2}
            shadowOpacity={0.25}
            shadowRadius={3.84}
            borderColor={isSelected ? "#000000" : "#f0f0f0"}
            style={{
              backgroundColor: isSelected ? "#000000" : "#ffffff",
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginHorizontal: 5,
              marginVertical: 5,
            }}
          >
            <CustomText
              value={link.text}
              medium
              center
              bold
              color={isSelected ? "#ffffff" : "#000000"}
            />
          </CustomButton>
        );
      })}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minWidth: 350,
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 20,
    flexWrap: "wrap",
  },
});
