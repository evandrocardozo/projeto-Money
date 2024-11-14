import {COLORS, FONT_SIZE} from "../../constants/theme.js";

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 15,
        //marginTop: 20,

    },

    logo: {
        width: 100,
        height:30,
        marginTop: 15,
    },

    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        marginTop: 10

    },

    dashboardText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm,
        //fontWeight: "bold"

    },

    dashboardImg: {
        width: 35,
        height: 64
    },

    despesasTitulo: {
        fontSize:  FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginTop: 15,
        fontWeight:"bold",
        textAlign: "center"
    },

    btnAddImage:{
        width: 50,
        height: 55,
        
        
    },

    btnAdd:{
        position: "absolute",
        bottom: 12,
        
        
    }

}