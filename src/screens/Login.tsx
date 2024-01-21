import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { logo } from "../assets";
import InputField from "../components/InputField";
import ActionButtons from "../components/ActionButtons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
	const navigation = useNavigation<any>();
	const toSignUpHandler = () => {
		navigation.navigate("Signup");
	};
	return (
		<View style={styles.container}>
			<Image
				source={logo}
				style={styles.image}
			/>
			<InputField
				placeholder="Điện thoại"
				keyboardType="number-pad"
			/>
			<InputField
				placeholder="Mật khẩu"
				secureTextEntry
			/>
			<ActionButtons text="Đăng nhập" />
			<TouchableOpacity
				style={{ flexDirection: "row" }}
				onPress={toSignUpHandler}
			>
				<Text style={{ fontSize: 12 }}>Bạn chưa có tài khoản?</Text>
				<Text style={{ marginLeft: 8, color: "#0284C7", fontSize: 12 }}>Đăng Ký</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

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
