import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import InputField from "../components/InputField";
import ActionButtons from "../components/ActionButtons";
import { logo } from "../assets";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
	const navigation = useNavigation<any>();
	const toSignInHandler = () => {
		navigation.navigate("Login");
	};
	return (
		<View style={styles.container}>
			<Image
				source={logo}
				style={styles.image}
			/>
			<InputField placeholder="Họ tên" />
			<InputField
				placeholder="Điện thoại"
				keyboardType="number-pad"
			/>
			<InputField
				placeholder="Mật khẩu"
				secureTextEntry
			/>
			<InputField
				placeholder="Nhập lại mật khẩu"
				secureTextEntry
			/>
			<ActionButtons text="Đăng Ký" />
			<TouchableOpacity
				style={{ flexDirection: "row" }}
				onPress={toSignInHandler}
			>
				<Text style={{ fontSize: 12 }}>Bạn đã có tài khoản?</Text>
				<Text style={{ marginLeft: 8, color: "#0284C7", fontSize: 12 }}>Đăng Nhập</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "30%",
		height: 125,
		marginBottom: 48,
	},
});
