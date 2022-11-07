import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    alignItems: 'center',
  },

  flex_row: {
    flexDirection:'row',
    justifyContent: 'center',
  },

  text_label2:{
    marginLeft:50,
    width:'35%',
    fontSize:12,
    marginBottom:5
  },

  input2: {
    width:'15%',
    height: 40,
    paddingLeft:15,
    borderColor: '#1A75BC',
    backgroundColor:'white',
    borderRadius:25,
    borderWidth: 1,
    marginRight:'20%',
    marginLeft:'10%'
 },

 flex_row2: {
  flexDirection:'row',
  marginBottom:15
},

  button:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop:5,
    marginBottom:45,
    paddingVertical: 45,
    paddingHorizontal: 40,
    width:'50%',
    height:'20%',
    borderRadius: 4,
    borderBottomWidth:3,
    borderRightWidth:3,
    borderLeftWidth:3,
    borderTopWidth:3,
    backgroundColor:'white',
    borderColor:'#1A75BC',
    elevation: 3,
    
  },

  sign_text:{
    fontSize:16,
    fontWeight:"bold",
    color:'white'
  },

  sign_button:{
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:25,
    width:'70%',
    height: 40,
    borderRadius: 23,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    backgroundColor:'#1A75BC',
    borderColor:'#1A75BC',
    color:'white',
    fontWeight:'bold',
    elevation: 3,
    
  },

  role_text:{
    fontSize:16,
    fontWeight:"bold"
  },

  text_title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:16
  },

  text_subtitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:50
  },

  text_label:{
    width:'70%',
    fontSize:12,
    marginBottom:5
  },



  text_body:{
    fontSize:14
  },

  input: {
    width:'70%',
    height: 40,
    paddingLeft:15,
    borderColor: '#1A75BC',
    backgroundColor:'white',
    borderRadius:25,
    borderWidth: 1,
    marginBottom:25
 },

  tinyLogo: {
    width: 59,
    height: 59,
    borderRadius:76/2,
    borderColor:"#1A75BC",
    borderWidth:1,
    marginTop:10,
    marginBottom:20
  }

});