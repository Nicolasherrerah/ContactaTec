import { StyleSheet, StatusBar } from 'react-native';

export const globalStylesDark = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#292929',
        fontFamily: 'NotoSansJP_400Regular'

    },
    text:{
        color: '#fff',
        fontFamily: 'NotoSansJP_400Regular'

    },
    title: {
        fontSize: 18,
        color: "#fff",
        paddingLeft: 5,
        fontFamily: 'NotoSansJP_700Bold',
        borderBottomWidth: 1,
        borderColor: "#a3a3a3", 
    },
    itemText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'NotoSansJP_400Regular'

    },
    copyright: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'NotoSansJP_900Black',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 4,

    },
    header: {
        fontSize: 32,
        paddingTop: 10,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#1c1b1b',
        color: 'white',
        fontFamily: 'NotoSansJP_300Light',

    },
    logoHeader:{
        paddingBottom: 4,
        backgroundColor: 'black',  
    },
    postEntry: {
        padding: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#1c1b1b", 
    },
    postTitle:{
        color: "#fff",
        fontSize: 18,
        fontFamily: 'NotoSansJP_700Bold',

    },
    postText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'NotoSansJP_400Regular'
    },
    commentCount:{
        color: '#fff',
        paddingLeft: 3
    },
    contactItem: {
        paddingVertical: 10,
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: "#a3a3a3",
        fontFamily: 'NotoSansJP_500Medium',

    },  
    contactItemText:{
        fontSize: 14,
        color: "#fff",
        fontFamily: 'NotoSansJP_400Regular',

    },
    panicBtn:{
        backgroundColor: '#ff0000',
        color: 'white',
        borderWidth: 2,
        borderColor: '#000',
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
        color: 'white'
    },
    locationTitle: {
        fontSize: 18,
        color: "#fff",
        padding: 10,
        marginTop: 5,
        fontFamily: 'NotoSansJP_700Bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonDisclaimer: {
        color: '#d8d8d8',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'NotoSansJP_300Light',
    },
    chatItem: {
        color: "#000",
        padding: 10,
        borderWidth: 1.5,
        borderColor: "#1c1b1b",  
    },
    chatBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: '#a3a3a3',
        margin: 10,
        padding: 8,
        alignItems: 'center',
    },
    chatInput: {
        width: '80%',
        fontSize: 14,
        color: 'white',
        fontFamily: 'NotoSansJP_400Regular',

    },
    chatSpace: {
        height: '80%',
    },
    flair: {
        color: '#e3e3e3',
        backgroundColor: 'grey',
        borderColor: '#a3a3a3',
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 6,
        alignSelf: 'center'
    },
    postContent: {
        textAlign: 'justify',
        padding: 15,
        color: '#fff'

    },
    commentText: {
        borderTopWidth: 2,
        fontSize: 14,
        fontFamily: 'NotoSansJP_700Bold',
        padding: 5,
        marginVertical: 10,
        color: '#fff'
        
    },
    modal:{
        margin: 20,
        backgroundColor: "grey",
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