import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { authStyles } from "../../auth/authStyles";
import CustomIcon from "../CustomIcon";
import { IBtn } from "@/interfaces/user/IUser";
import { userProfileStyles } from "@/styles/profile";
import CustomText from "../CustomText";

export const CustomRenderButtons = (btnArray: IBtn[]) => {
  return (
    <View style={authStyles.inputGroupRow}>
      {btnArray?.map((button: IBtn) => (
        <TouchableOpacity
          key={button.iconName}
          onPress={button.action}
          style={authStyles.inputGroupRowButtons}
        >
          <CustomIcon
            iconName={button.iconName as any}
            iconSize={24}
            iconColor={button.iconName !== "close" ? "#259200" : "#ff0000"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const CustomRenderMsg = (
  msg: string,
  loading: boolean,
  msgColor: string
) => {
  if (!msg) return null;
  return (
    <View style={[userProfileStyles.renderMsg, { borderColor: msgColor }]}>
      <CustomText value={msg} color={msgColor} />
      {loading ? <ActivityIndicator size="small" color={msgColor} /> : null}
    </View>
  );
};
