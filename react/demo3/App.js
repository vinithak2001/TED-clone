import * as React from 'react';
import Mainstack  from './src/navigation/mainstack'
import Tabs from "./src/navigation/bottombar";
import { NavigationContainer } from '@react-navigation/native';
 const App = () => {
   return(    
     <NavigationContainer>
        <Mainstack />
     </NavigationContainer>
      
   )
 }

 export default App;