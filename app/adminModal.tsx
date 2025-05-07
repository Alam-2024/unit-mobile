import { View, Text } from "react-native";
import React from "react";
import Admin from "@/views/admin/admin";

/**
 * AdminModal is a modal that displays the admin view.
 * It is used by the button in the navigation bar.
 */
const AdminModal = () => {
  return (
    <View>
      <Admin />
    </View>
  );
};

export default AdminModal;
