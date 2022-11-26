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

 
  input2: {
    width:'1%',
    height: 40,
    // paddingLeft:15,
    borderColor: '#1A75BC',
    backgroundColor:'white',
    borderRadius:25,
    borderWidth: 0.5,
     marginRight:'5%',
     marginLeft:'5%'
 },

 flex_row2: {
  flexDirection:'row',
  marginBottom:15
},


  

  sign_text:{
    fontSize:16,
    fontWeight:"bold",
    color:'white'
  },

  sign_button:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:10,
    width:'90%',
    height: 50,
    borderRadius: 10,
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


  text_title:{
    fontSize:26,
    fontWeight:"bold",
    marginBottom:10,
    color:'#1A75BC'
  },

  text_subtitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:50
  },


  //Role screen

  begincontainer: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#F3F2F2',
    alignItems: 'center',
    
  },
  centercontainer:{
    marginTop:30,
    flex: 1,
    backgroundColor: '#F3F2F2',
    alignItems: 'center',
    justifyContent:'center'
  },
  role_text_subtitle:{
    fontSize:20,
    marginBottom:50,
    color:'#1A75BC',
    opacity:0.5
  },


  role_text:{
    fontSize:28,
    fontWeight:"bold",
    opacity:0.2,
    position: 'absolute',
  },

  role_text_box:{
    top: 0,
    left:0,
    right:0,
    bottom:0,
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },

  background_image:{
      width:'100%',
      height:'100%',
      opacity:0.5,
      resizeMode: "cover",   
      position: 'absolute', 
      padding:5 ,
      top:5 
  },

  role_button:{
    justifyContent: 'center',
    alignItems:'center',
    marginTop:5,
    marginBottom:45,
    width:'60%',
    height:'25%',
    // overflow : "hidden",

    backgroundColor:'white',
    // borderColor:'#1A75BC',
    elevation: 3,
    
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



  loglabel:{
    width:'90%',
    fontSize:12,
    marginBottom:5,
    marginLeft:5,
    
  },

  text_label2:{
    marginLeft:0,
    width:'50%',
    fontSize:12,
    marginBottom:5,
    // marginRight:'5%'
  },

  text_label3:{
    marginLeft:0,
    width:'40%',
    fontSize:12,
    marginBottom:5,
    // marginRight:'5%'

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
    width:'90%',
    height: 45,
    paddingLeft:15,
    borderColor: '#1A75BC',
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    marginBottom:10
 },

//  Medicines
Medicinecontainer: {
  marginTop:'40%',
  flex: 1,
  backgroundColor: '#F3F2F2',
  alignItems: 'center',
  
},


flex_row_items:{
flexDirection:'row',
// justifyContent:'center',
// alignContent:'center',
// width:'50%'

},

scheduleaddcontainer:{
flexDirection:'column',
width:'100%',
marginLeft:'5%',
justifyContent:'center',
alignContent:'center'

},

addschedulelabel:{
  width:'40%',
  fontSize:12,
  marginBottom:5,
  // marginLeft:'15%',
  
},

flex_col_items:{
  marginTop:5,
  flexDirection:'column',
  // marginRight:'60%',
  width:'90%',
  marginLeft:'10%'

},

medicinelabel:{
  width:'40%',
  fontSize:12,
  marginBottom:5,
  marginLeft:'15%',
  
},
medicinetimelabel:{
  width:'40%',
  fontSize:12,
  marginBottom:5,
  marginLeft:'15%',
  
},

input_font:{
  fontSize:15
},
 input_times_needed: {
  width:'25%',
  height: 45,
  paddingLeft:15,
  borderColor: '#1A75BC',
  backgroundColor:'white',
  borderRadius:10,
  borderWidth: 1,
  marginBottom:10,
  // marginRight:'15%',
  marginLeft:"15%"
},

input_medicinename: {
  width:'40%',
  height: 45,
  paddingLeft:15,
  borderColor: '#1A75BC',
  backgroundColor:'white',
  borderRadius:10,
  borderWidth: 1,
  marginBottom:10,

},


input_addschedule: {
  width:'40%',
  height: 45,
  paddingLeft:15,
  borderColor: '#1A75BC',
  backgroundColor:'white',
  borderRadius:10,
  borderWidth: 1,
  marginBottom:10,
  justifyContent:'center',
  fontSize:18
},

input_addschedule_name: {
  width:'80%',
  height: 45,
  paddingLeft:15,
  borderColor: '#1A75BC',
  backgroundColor:'white',
  borderRadius:10,
  borderWidth: 1,
  marginBottom:10,
  justifyContent:'center'
},


press_input: {
  width:'50%',
  height: 45,
  paddingLeft:15,
  borderColor: '#1A75BC',
  backgroundColor:'white',
  borderRadius:10,
  borderWidth: 1,
  marginBottom:10,
  alignContent:'center',
  justifyContent:'center',
  marginLeft:"15%"
},

  tinyLogo: {
    width: 59,
    height: 59,
    borderRadius:76/2,
    borderColor:"#1A75BC",
    // borderWidth:1,
    marginTop:40,
    marginBottom:20,

  },


  loginLogo: {
    width: 76,
    height: 76,
    borderRadius:76/2,
    borderColor:"#1A75BC",
    borderWidth:1,
    marginTop:10,
    marginBottom:20
  },

  role_logo: {
    width: 120,
    height: 120,
    borderRadius:120/2,
    borderColor:"#1A75BC",
    borderWidth:1,
    marginTop:20,
    marginBottom:20
  },
  signuplogo:{
    width: 200,
    height: 200,
    borderRadius:200/2,
  },


  container2: {
    flexDirection: "row",
    marginLeft:15
  },

// Card Styles
  flex_row3: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:35
    // alignContent:'flex-start',
   
    
  },
  
  flex_row4: {
    flexDirection:'row',
    alignItems:'center'
    
  },
  flex_column: {
    flexDirection:'column',
    marginLeft:'10%',
    marginRight:'10%',
    marginBottom:10,
    backgroundColor:'white',
    
    
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
  card_text:{  
    width:'50%',
    fontSize:14,
    fontWeight:"bold",
    color:'black' ,
    paddingTop:'2%',
    
  },


  flex_column_medicines: {
    flexDirection:'column',
    // marginLeft:'5%',
    // marginRight:'5%',
    marginBottom:10,
    backgroundColor:'white',
    width:'95%',
    height:120
    
  },
  card_text_medicines:{  
    width:'90%',
    fontSize:18,
    fontWeight:"bold",
    color:'black' ,
    paddingTop:'2%',
    marginBottom:30,
    marginLeft:20,
    
  },

  card_text_reg_med:{
    width:'90%',
    fontSize:16,
    color:'black',
    marginLeft:20,
    marginBottom:30
    // paddingBottom:30
    
  },


  
  card_text_upper:{
    // marginLeft:'15%',
    width:'50%',
    fontSize:14,
    fontWeight:"bold",
    color:'black',
    paddingTop:'2%',
  
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
    // paddingVertical: 16,
    width:200,
    height:200,
    borderRadius: 20,
    backgroundColor:'white',
    borderColor:'#1A75BC',
    elevation: 3,
    
  },

  cardicon: {
    width: 87,
    height: 87,
    borderColor:"#1A75BC",
    padding:50,
    resizeMode: 'contain',
    
    
  },




  // Elder homepage
  home_container: {
    flex: 1,
    // margin:5,
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
    padding:5
  },

  flex_schedule_row:{
    flexDirection:'row',
    padding:10
  },

  card_hometext:{
    marginTop:15,
    fontSize:16,
    // fontWeight:"bold",
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
    padding:7,
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

  flex_column_schedule:{
    padding:5,
    flexDirection:'column',
    flex:1

  },

  scheduleview:{
    padding:5,


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
    backgroundColor:'#1A75BC',
    borderColor:'#1A75BC',
    color:'white',
    fontWeight:'bold',
    elevation: 3,
    
    
  },

  buttontext:{
    
    color:'white'
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





  flex_column_notifications: {
    flexDirection:'column',
    marginLeft:'2%',
    // marginRight:'2%',
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
    color:'black',
    marginTop:15
    
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


  // Notifications 
  notfication_subtitle:{
    fontSize:20,
    fontWeight:"bold",
    width:'100%',
    marginLeft:'5%',
  },

  card_label_notifications:{
    width:'40%',
    fontSize:14,
    color:'black',
    marginLeft:'5%',
  },
});
