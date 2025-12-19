import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import CustomButton from "../customs/CustomButton";
import CustomText from "../customs/CustomText";

type NavbarProps = {
  id: number;
  url: string;
  text: string;
};

const Navbar = ({ links }: { links: NavbarProps[] }) => {
  if (!links) {
    return null;
  }
  return (
    <View style={styles.container}>
      {links.map((link) => (
        <CustomButton
          key={link.id}
          onPress={() =>
            router.push({
              pathname: "/data",
              params: { grade: link.text },
            })
          }
          id={link.id}
          shadowColor="#3d3d3d"
          shadowWidth={1}
          shadowHeight={2}
          shadowOpacity={0.25}
          shadowRadius={3.84}
        >
          <CustomText value={link.text} medium center bold />
        </CustomButton>
      ))}
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
