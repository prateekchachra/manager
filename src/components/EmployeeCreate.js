import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
class EmployeeCreate extends Component{


    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }
    render(){

 
            return(
                <Card>
                    <CardSection>
                        <Input label="Name" placeholder="Raj"
                        value={this.props.name}
                        onChangeText={ text=> this.props.employeeUpdate(
                            {prop: 'name', value: text}
                        )}></Input>
                    </CardSection>
                    <CardSection>
                        <Input label="Phone" placeholder="987-585-1023"
                        value={this.props.phone} 
                        onChangeText={text =>this.props.employeeUpdate(
                            {prop: 'phone', value: text}

                        )}></Input>
                    </CardSection>
                    <CardSection style={{flexDirection: 'column',}}><Text style={styles.pickerTextStyle}>Shift</Text>
                        <Picker selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}>
                            <Picker.Item label="Monday" value="Monday"></Picker.Item>
                            <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
                            <Picker.Item label="Wednesday" value="Wednesday"></Picker.Item>
                            <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
                            <Picker.Item label="Friday" value="Friday"></Picker.Item>
                            <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
                            <Picker.Item label="Sunday" value="Sunday"></Picker.Item>
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Create
                            </Button></CardSection>

                </Card>
            );
    }
}
const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}
const styles={

    pickerTextStyle:{
        fontSize:18,
        padding:5,
        paddingLeft: 25,
        color: '#000'

    }

}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);