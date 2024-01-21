import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";

type Props = {} & TextInputProps;

const InputField = (props: Props) => {
	return (
		<TextInput
			{...props}
			style={styles.input}
			placeholderTextColor="#A3A3A3"
		/>
	);
};

export default InputField;

const styles = StyleSheet.create({
	input: {
		width: "100%",
		gap: 4,
		borderRadius: 4,
		backgroundColor: "#F5F5F5",
		marginBottom: 16,
	},
});
