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

  text_hyper:{
    fontSize:14,
    fontWeight:'bold',
    color:'#1A75BC'
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
  },


  container2: {
    flexDirection: "row",
    marginLeft:15
  },

// Card Styles
  flex_row3: {
    flexDirection:'row',
    marginLeft:'21%',
    alignContent:'flex-start'
   
    
  },
  
  flex_row4: {
    flexDirection:'row',
    alignItems:'center'
    
  },
  flex_column: {
    flexDirection:'column',
    marginLeft:'2%',
    marginRight:'2%',
    backgroundColor:'white',
    
    
  },

  card_text:{
    
    width:'50%',
    fontSize:14,
    fontWeight:"bold",
    color:'black'
    
  },
  card_title:{
    width:'40%',
    fontSize:16,
    color:'black',
    fontWeight:'bold',
    marginBottom:5,
    alignSelf:'flex-start',
    marginLeft:'3%'
  },
  
  card_text_upper:{
    marginLeft:'15%',
    width:'40%',
    fontSize:14,
    fontWeight:"bold",
    color:'black',
  },
  card_text_reg:{
    width:'40%',
    fontSize:12,
    color:'black',
    
  },
  card_label:{
    width:'40%',
    fontSize:14,
    color:'black',
    marginLeft:'15%',
  },

  card_frame:{
      marginTop:'1%',
      marginLeft:'5%'    
  },

  cardlogo: {
    paddingTop:5,
    width: 61,
    height: 61,
    borderRadius:76/2,
    marginTop:5,
    marginBottom:10,
    
  },
 

  homecard:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    margin:5,
    paddingVertical: 16,
    width:200,
    height:200,
    borderRadius: 4,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    backgroundColor:'white',
    borderColor:'#1A75BC',
    elevation: 3,
    
  },

  cardicon: {
    width: 87,
    height: 87,
    borderRadius:76/2,
    borderColor:"#1A75BC",
    padding:25,
    resizeMode: 'contain',
    
  },




  // Elder homepage
  home_container: {
    flex: 1,
    margin:5,
    backgroundColor: '#F3F2F2',
    alignItems: 'center',
    flexDirection:'column'
  },


  home_container2: {
    flex:1,
    flexDirection: "column",
  },

  flex_homerow2: {
    flexDirection:'row',
  },
  card_hometext:{
    marginTop:15,
    fontSize:14,
    fontWeight:"bold",
    color:'black'
    
  },


  flex_sender:{
    
    width:'80%',
    flexDirection:'column',
    marginLeft:'15%',
    marginRight:'2%',
    backgroundColor:'#1A75BC',
    borderRadius:13,
    height:100,
    padding:15,
    
  },

  
  sender:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    width:'80%'
  },
  sent_time:{
    color:'white',
    fontSize:12,
    width:'20%',
  },
  sender_text:{
    marginTop:15,
    color:'white',
    fontSize:14,
  
  },

  flex_row_sender:{
    flexDirection:'row',
    alignContent:'flex-start',
    justifyContent:'flex-start'
  },

  flex_row_received:{
    flexDirection:'row',
    alignContent:'flex-start',
    justifyContent:'flex-start'
  },

  received_text:{
    marginTop:15,
    color:'black',
    fontSize:14,
  
  },

  received_time:{
    color:'black',
    fontSize:12,
    width:'20%',
  },

  received:{
    color:'black',
    fontSize:14,
    fontWeight:'bold',
    width:'80%'
  },


  flex_received:{
    marginTop:15,
    width:'80%',
    flexDirection:'column',
    marginLeft:'2%',
    marginRight:'15%',
    backgroundColor:'white',
    borderColor:'#1A75BC',
    borderRadius:13,
    borderWidth:1,
    height:100,
    padding:15,
    
  },


  chat_subtitle:{
    fontSize:20,
    fontWeight:"bold",
    width:'70%',
    marginLeft:5,
    marginRight:10,
  },
  flex_row_subtitle:{
    marginTop:20,
    marginBottom:20,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignContent:'flex-start',
  },
  flex_column_chat: {
    flexDirection:'column',
    width:'95%',
    marginLeft:'2%',
    marginRight:'2%',
    marginBottom:'2%',
    backgroundColor:'white',

    
  },

  subtitle_button:{
    justifyContent: 'center',
    alignItems:'center',
    width:'25%',
    height: 30,
    borderRadius: 23,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    backgroundColor:'white',
    borderColor:'#1A75BC',
    color:'white',
    fontWeight:'bold',
    elevation: 3,
    
  },

  chathead: {
    width: 59,
    height: 59,
    borderRadius:59/2, 
    marginBottom:5,
    marginRight:5
  },

  // flex_row_scroll:{

  //   flex:1,
  //   flexDirection:'row'
  // }


  flex_column_schedule: {
    flexDirection:'column',
    marginLeft:'2%',
    marginRight:'2%',
    marginBottom:5,
    backgroundColor:'white',
    
    
  },

  flex_row_scroll:{
    flex:1,
    flexDirection:'column',
    width:'90%',
    
    
  },


  card_text_elder:{
    
    fontSize:14,
    fontWeight:"bold",
    color:'black'
    
  },
  card_title_sched:{
    width:'40%',
    fontSize:16,
    color:'black',
    fontWeight:'bold',
    marginBottom:5,
    marginTop:5,
    alignSelf:'flex-start',
    marginLeft:'10%'
  },

  centerloading:{
    flex: 1,
        alignItems: "center",
        justifyContent: "center",
  },

});
