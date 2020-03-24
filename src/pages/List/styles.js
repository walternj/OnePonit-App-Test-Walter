import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #000;
  text-align: center;
  
`;

export const Form = styled.SafeAreaView`
  flex-direction: row;
  margin:  20px 5px 5px 5px;
  padding-right: 5px;
`;

export const Input = styled.TextInput.attrs({
  width: Dimensions.get('window').width - 61
})`
  font-size: 18px;
  color: #000;
  height: 46px;
  padding: 0 10px;
  margin-right: 5px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  background: #ffac41;
  border-radius: 4px;
`;

export const ElementList = styled.FlatList`
  
  margin: 10px 5px;
  border-radius: 4px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 1);
  padding: 5px 0;
  
`;

export const ElementContainer = styled.View`
  
  flex-direction: row;
  height: 46px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 0;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Element = styled.View.attrs({
  width: Dimensions.get('window').width - 66,
})`
  border-radius: 4px;
`;

export const ElementText = styled.Text`
  font-size: 18px;
  
  border-radius: 4px;
  margin-right: 5px;
  color: #fff;
`;

export const ButtonDelete = styled.TouchableOpacity`
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  background: #323232;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

