import {COLORS, FONT_SIZE} from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20
    },

    containerField: {
        marginBottom: 15
    },

    inputLabel: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray
    },

    inputValor: {
        fontSize:FONT_SIZE.xl,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5,
        fontWeight: "bold"
    },
    inputText: {
        fontSize:FONT_SIZE.lg,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5,
        color: COLORS.medium_gray,
        
    },

    containerBtn: {
        alignItems: "flex-end"
        
    },

    btn: {
        backgroundColor: COLORS.blue,
        padding: 10,
        borderRadius: 6,
        width: 150
    },

    btnText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textAlign:"center"
    },

    containerDelete: {
        alignItems:"center",
        marginTop: 50
    },

    btnDelete:{
        width: 50,
        height: 50
    },

    inputPicker:{
        fontSize: FONT_SIZE.xlg,
        borderBottomColor:COLORS.gray,
        borderBottomWidth:2
    },
    inputTextPicker:{
        
        fontSize:FONT_SIZE.lg,
        borderBottomColor: COLORS.gray,
        //borderBottomWidth: 2,
        padding: 5,

        //fontSize: 22, // increase font size for iOS
        //paddingVertical: 12,
        //paddingHorizontal: 10,
        //borderWidth: 1,
        //borderColor: 'gray',
        borderRadius: 4,
        color: COLORS.medium_gray,
    }

}