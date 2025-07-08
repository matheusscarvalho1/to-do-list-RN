import { colors } from '@/constants/color'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    // Aqui teremos nossas 'classes' de estilo
	image1: {
		width: 50,
		height: 50,
	},

    image2: {
        width: "100%",
        height: "50%"
    },

    title: {
        fontSize: 30,
        fontFamily: "Calibri",
        fontWeight: 600,
        textAlign: "center",
        color: colors.secondary,
    },

    headerContainer: {
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        paddingTop: 40,
        paddingVertical: 10,
        
    },

    mainContainer: {
        boxSizing: "border-box",
        backgroundColor: colors.background,
        height: "100%",
    },

    input: {
        height: 40,
        paddingHorizontal: 16,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        margin: 5,
        flexGrow: 1,
        backgroundColor: colors.surface,
    },

    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: "bold",
    },

    taskWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        borderRadius: 10,
        gap: 10,
        padding: 10,
        elevation: 3, // Android
        shadowColor: "#000000", // iOS
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: "#FFFFFF"
    }

})