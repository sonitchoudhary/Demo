import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    card: {
        height: 160,
        width: 339,
        backgroundColor: 'white',
        alignSelf: 'center',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 40,
        marginRight: 40,



    },
    carBackground: {

        width: 362,
        height: 120,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,






    },
    circle: {
        width: 31,
        height: 31,
        borderRadius: 150 / 2,
        backgroundColor: '#FF9800',
        marginLeft: 7,
    },
    firsthree: {
        alignSelf: "center", 
        marginTop: 7, 
        color: "white", 
        fontFamily: "Montserrat", 
        fontSize: 12,
    },
    checkin:{
        width:"95%",
        height:37,
        backgroundColor:"#EDEDEF",
        borderRadius:17,
        marginTop:22,
        alignSelf:"center",
        
    },
    card2:{
        height: 119,
        width: 339,
        backgroundColor: '#F5F6F8',
        alignSelf: 'center',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        flexDirection:"column"


    },

    Text1View:{
        width:206,
        height:22,
        marginLeft:20,

    },
    Text2View:{
        width:192,
        height:15,
        marginLeft:20,

    },

    fiveCoins:{
        width:100,
        height:28,
        marginLeft:20,
        marginTop:20,
        backgroundColor:"#CC583B7D",
        borderRadius:90,
        marginBottom:19,
        flexDirection:"row"


    },

    claimbutton:{
        width:89,
        height:27,
        borderRadius:17,
        backgroundColor:"#640000",
        marginLeft:110

    },
    claimText:{
     alignSelf:"center",
     marginTop:2,
     color:"#FFFFFF"
    }



})
export default styles;