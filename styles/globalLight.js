import { StyleSheet, StatusBar } from 'react-native';

export const globalStylesLight = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'NotoSansJP_400Regular'
    },
    text: {
        color: '#000',
        fontFamily: 'NotoSansJP_400Regular'

    },
    title: {
        fontSize: 18,
        color: "#000",
        paddingLeft: 5,
        fontFamily: 'NotoSansJP_700Bold',
        borderBottomWidth: 1,
        borderColor: "#a3a3a3", 
    },
    itemText: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'NotoSansJP_400Regular'

    },
    copyright: {
        color: 'black',
        fontSize: 11,
        fontFamily: 'NotoSansJP_900Black',
        paddingTop: 4,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    header: {
        fontSize: 32,
        paddingTop: 10,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#4285f4',
        color: 'black',
        fontFamily: 'NotoSansJP_300Light',

    },
    logoHeader:{
        backgroundColor: 'white',
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderColor: '#d8d8d8',
    },
    postEntry: {
        color: "#000",
        padding: 5,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: "#cccccc", 
    },
    postTitle:{
        fontSize: 18,
        fontFamily: 'NotoSansJP_700Bold',

    },
    postText: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'NotoSansJP_400Regular',

    },
    commentCount:{
        color: '#000',
        paddingLeft: 3
    },
    contactItem: {
        fontSize: 14,
        fontFamily: 'NotoSansJP_500Medium',
        color: "#000",
        paddingVertical: 10,
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: "#a3a3a3",
    },   
    contactItemText:{
        fontSize: 14,
        color: "#000",
        fontFamily: 'NotoSansJP_400Regular',

    },
    panicBtn:{
        backgroundColor: '#ff4040',
        color: 'white',
        borderWidth: 1.5,
        borderColor: '#d8d8d8',
        borderRadius: 100,
        width: 200,
        height: 200,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        margin: 15,
    },
    panicBtnText: {
        fontSize: 48,
        fontFamily: 'NotoSansJP_900Black',
        color: 'white',
    },
    locationTitle: {
        fontSize: 18,
        color: "#000",
        padding: 10,
        marginTop: 5,
        fontFamily: 'NotoSansJP_700Bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonDisclaimer: {
        color: 'grey',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'NotoSansJP_300Light',

    },
    chatItem: {
        color: "#000",
        padding: 10,
        borderWidth: 1.5,
        borderColor: "#cccccc",  
    },
    chatBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: 'grey',
        margin: 10,
        padding: 8,
        alignItems: 'center',

    },
    chatInput: {
        width: '70%',
        fontFamily: 'NotoSansJP_400Regular',
        paddingLeft: 5

    },
    chatSpace: {
        height: '80%',
    },
    flair: {
        backgroundColor: '#e3e3e3',
        borderColor: '#a3a3a3',
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 6,
        alignSelf: 'center'
    },
    postContent: {
        textAlign: 'justify',
        padding: 15,
    },
    commentText: {
        borderTopWidth: 2,
        fontSize: 14,
        fontFamily: 'NotoSansJP_700Bold',
        padding: 5,
        marginVertical: 10 
    },
    modal:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    closeBtn: {
        fontFamily: 'NotoSansJP_500Medium',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    openBtn: {
        fontFamily: 'NotoSansJP_500Medium',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#2196f3',
        borderRadius: 10,

    }
});