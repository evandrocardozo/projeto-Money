import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    despesa: {
        width: "100%",
        backgroundColor: COLORS.gray,
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    despesaIcon: {
        width: 35,
        height: 35
    },

    containerIcon: {
        flex: 4

    },

    containerCategoria: {
        flex:11

    },

    containerValor: {
        flex:5

    },

    despesaCategoria:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold"

    },

    despesaValor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold",
        textAlign: "right"

    },

    despesaDescricao:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        

    }
}