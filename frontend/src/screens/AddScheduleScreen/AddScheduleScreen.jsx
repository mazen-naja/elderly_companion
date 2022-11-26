import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import { Text, View ,TouchableOpacity,Pressable,Button, TextInput ,Image,StyleSheet  } from 'react-native';
import styles from "../../../styles";
// import DatePickerApp from '../../../Components/Cards/calendar_card';
import { useUserStore } from '../../store/UserStore';
import axios from "axios";
// import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown'
// import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { LoadingIcon } from '../../../Components/Cards/LoadingIcon';



const baseUrl = 'http://192.168.1.6:8000/';


<StatusBar style="auto" />

const AddScheduleScreen=({navigation})=>{
  
  const user_id = useUserStore((state) => state.user_id);
  const setDroplist = useUserStore((state) => state.setDroplist);
  const droplist = useUserStore((state) => state.droplist);
 

  const [sendtime, setsendTime] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState(0);
  const [visiblemedicine, setvisiblemedicine] = useState(false);

  const [medicine_id, setid] = useState("");
  const [medicine, setName] = useState("");
  const [medicinelist, setMedicineList] = useState({});



  const [list, setlist] = useState([]);
  const [keys, setkeys] = useState([]);



  const [chosenDate, setChosenDate] = useState("");


  const [isLoading, setIsLoading] = useState(true);


  const scheduletype = ["Bed time", "Walk" ,"Medicine"]
  

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);





  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (datetime) => {
    setDatePickerVisibility(false);
    setChosenDate(moment(datetime).format('YYYY-MM-DD HH:mm:ss'))
    
    console.log(chosenDate);
    
  };



  const handleConfirm = (date) => {
    setTime(moment(date).format('HH:mm DD-MM-YYYY'));
    hideDatePicker();
  };



  const addSchedule= async data=>{
  
    try{      
        const response= await axios({
            method: 'post',
            url: baseUrl+'api/v0.1/elder-create-schedule',
            headers:{'Content-Type': 'application/json'},
            data,
            }).then(function (response) {
                    response.data
                
            }) 
    } 
    catch(error){
        return error.response.data;
    };  
};




// Get Medicines - Call API
const getmedicines= async data=>{
  
    try{      
        const response= await axios({
            method: 'post',
            url: baseUrl+'api/v0.1/medicines',
            headers:{'Content-Type': 'application/json'},
            data,
            }).then(function (response) {
                    response.data
                    setMedicineList(response.data.data)
                    setIsLoading(false)
            }) 
    } 
    catch(error){
        return error.response.data;
    };  
};





    // Whenever the textinput value changes
    const onenamechange = (enteredname) => {
      setName(enteredname);
    };
  
    const ontimechange = (enteredtime) => {
        setChosenDate(enteredtime);
    };

    const ontypechange = (enteredtype) => {
        setType(enteredtype);
      };



// Handlers

  const addschedulehandler = () => {
    if(type=='Medicine'){
        const data = {
            name: medicine,
            time_created: time,
            elder_id: user_id,
            item_id: medicine_id,
            is_visible:1,
            careataker_id:10,
          };
    }
    else if(type=='Walk'){
        const data = {
            name: medicine,
            time_created: time,
            elder_id: user_id,
            item_type_id: 4,
            is_visible:1,
            careataker_id:10,
          };

    }

    else if(type=='Bed time'){
        const data = {
            name: medicine,
            time_created: time,
            elder_id: user_id,
            item_type_id: 5,
            is_visible:1,
            careataker_id:10,
          };

    }


  

     addSchedule(data) 

      // clear the text field
      setName('');
      setTime('');
      setType('');
    
    };


    useEffect(() => {

    const medicinedata = {
        elder_id: user_id,
      };

        getmedicines(medicinedata)
      }, []);
  

    

        

           
 
            
   
      
    if (isLoading) {
        return <LoadingIcon/>
      }
         
else{

  return (

    <View style={styles.Medicinecontainer}>
      <Text style={styles.role_text_subtitle}>Add to Schedule</Text>

      <View style={styles.scheduleaddcontainer}>
     
      <Text style={[styles.addschedulelabel, {marginLeft:'0%'}]}>Type</Text>
          <SelectDropdown
            data={scheduletype}
            buttonStyle={{backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#1A75BC',width:'50%'}}
            buttonTextStyle={{fontSize:20}}
            onSelect={(selectedItem, index) => {
                selectedItem, index
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                if(selectedItem=='Medicine')
                  setvisiblemedicine(true)
                  else setvisiblemedicine(false)
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                setType(item)
                return item
            }}
        />

     
      <Text style={styles.addschedulelabel} >Date</Text>
      
      <Pressable style={styles.input_addschedule} onPress={showDatePicker}>
        <View pointerEvents="none">
         <TextInput key={'timescheduled'}  value={time} placeholder="Date" style={styles.input_font}  onChangeText={ontimechange}/>
       </View>


        </Pressable>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'datetime'}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour={false}
      />


        {visiblemedicine &&
        <View>
        <Text style={styles.addschedulelabel}>Medicine Name</Text> 
        
        <SelectDropdown
               key={medicinelist.map(
                value=>value.id)}
              data=  {medicinelist.map(
                value=>value.name)}
              buttonStyle={{backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#1A75BC',width:'50%'}}
              buttonTextStyle={{fontSize:20}}
              onSelect={(selectedItem, index) => {
                  selectedItem, index
                 
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                  
                  return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                 
                  setType(item)
                  return item
              }}
          />  
          </View>
            }
      
        

       
 
 </View>

   
      <TouchableOpacity style={styles.sign_button} onPress={addschedulehandler}>
                  <Text style={styles.sign_text}>Add</Text>
      </TouchableOpacity>
      
    </View>
  );
        }
};

export default AddScheduleScreen;