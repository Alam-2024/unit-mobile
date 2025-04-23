import CustomButton from "@/components/customs/CustomButton";
import CustomIcon from "@/components/customs/CustomIcon";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";

type DynamicModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const DynamicModal: React.FC<DynamicModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <CustomButton
            onPress={onClose}
            style={styles.closeButton}
            shadowColor="#000000"
            shadowWidth={1}
            shadowHeight={2}
            shadowOpacity={0.025}
            shadowRadius={13.84}
          >
            <CustomIcon iconName="close" iconSize={30} iconColor="#ff0000" />
          </CustomButton>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7e7e7eda",
  },
  modalContent: {
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: "#ffffffd6",
    borderWidth: 1,
    borderColor: "#00000047",
    borderStyle: "solid",
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 10,
    elevation: 5,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    bottom: -196,
    right: 0,
    left: 0,
    marginHorizontal: "auto",
    borderWidth: 1,
    borderColor: "#ffffff50",
    borderStyle: "solid",
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#000000e8",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

export default DynamicModal;
