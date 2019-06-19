import React from 'react';
import { Text, View } from 'react-native';


//Make a component available to other parts of the app.

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
              <Text style={textStyle}>{props.headerText}</Text>
        </View>
        );
};


const styles = {

viewStyle: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
},
textStyle: {
    fontSize: 20    
}
};
export { Header };
