import { Modal,Dimensions , View, Text } from 'react-native'
import React from 'react'


const App = () => {
    
    show = () => {
        this.setState( { show:true } )
    }

    close = () =>{
        this.setState({ show:false })
    }

    return(

        <Modal
        animationType='fade'
        transparent={true}
        visible={true}
        onRequestClose={this.close}
        >

            <Text>hi</Text>
        </Modal>
    )

}
export default App;