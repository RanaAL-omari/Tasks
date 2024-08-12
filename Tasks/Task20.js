import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyClassPage from '../Components/MyClassComponent_Task19';



const Task20 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show" onPress={handlePress} />
      {showPage && <MyClassPage />}
    </View>
  );

  function handlePress ()  { 
    setShowPage(!showPage);
    if(showPage == true){
      console.log('MyClassPage loaded');
    }else {
      console.log('MyClassPage unloaded');

    }

  };

};

export default Task20;
