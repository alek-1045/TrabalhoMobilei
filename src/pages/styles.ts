import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: #70a1fcf6;
    padding-left: 35px;
    padding-top: 70px;
    padding-right: 30px;
`

export const Title = styled.Text`
    color: #ffbbbb;
    font-size: 26px;
    font-weight: bold;
`

export const Greeting = styled.Text`
    
    color: #ffbbbb;
    padding-left: 100px;
    padding-top: 20px; 
    
`

export const Input = styled.TextInput`
    background-color: #5990f5f6;
    color: #fff;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '12px'};
    margin-top: 10px;
    border-radius: 20px;
`
export const Input1 = styled.TextInput`
    background-color: #5990f5f6;
    color: #fff;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '12px'};
    margin-top: 10px;
    border-radius: 15px;
`
export const Input2 = styled.TextInput`
    background-color: #5990f5f6;
    color: #fff;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '12px'};
    margin-top: 10px;
    border-radius: 15px;
`
