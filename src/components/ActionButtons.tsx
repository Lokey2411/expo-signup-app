import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";

type Props = {
	text: string;
} & TouchableOpacityProps;

const ActionButtons = (props: Props) => {
	return (
		<TouchableOpacity
			style={styles.button}
			{...props}
		>
			<Text style={styles.buttonText}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default ActionButtons;

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 12,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#50B0C8",
	},
	buttonText: {
		fontWeight: "600",
		color: "#FAFAFA",
	},
});
