import React, {useState} from 'react';
import {Alert, Keyboard} from 'react-native'
import {useDispatch, useSelector, connect} from 'react-redux'


import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import Background from '../../components/Background'
import { 
  Container, 
  Title, 
  Form, 
  Input, 
  ButtonAdd, 
  ElementList, 
  ElementContainer, 
  Element, 
  ElementText, 
  ButtonDelete 
} from './styles';

export default function List() {
  const listElements = useSelector(state => state.setElementsList.listElements)
  const action = useDispatch()
  
  const [element, setElement] = useState([
    {element: 'Saco', id: 1}
  ])
  const [newElement, setNewElement] = useState('')

  const deleteHandle = (id) => {
    Alert.alert('Confirmer la suppression ?', '', [
      {text: 'Confirmer', onPress: ()=> 
        action({type: 'DELETE_ELEMENT', value: id})
      },
      {text: 'Anuller', onPress: () =>{}}
    ])
  }

  const addElementHandler = (newElement) => {
    console.log('state: ',listElements)
    if (newElement.trim()) {
      setElement((prevElements) => {
        action({type: 'ADD_ELEMENT', value: { element: newElement, id: Math.random().toString()} })
      })
    }
    setNewElement('')
    Keyboard.dismiss()
  }

  return (
   
    <Background>
      <Container disabled>
        <Title>OnePoint App Test: Walter</Title>
        <Form>
          <Input 
            placeholder="Ajoutez un element..."
            placeholderTextColor="#323232"
            onChangeText={(val) => setNewElement(val)} 
            value={newElement}
          />
          <ButtonAdd onPress={() => addElementHandler(newElement)} >
            <MaterialIcon name="add" color="#000000" size={46} />
          </ButtonAdd>
        </Form>
        <ElementList
          data={listElements}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ElementContainer>
              <Element>
                <ElementText numberOfLines={2} >{item.element}</ElementText>
              </Element>
              <ButtonDelete onPress={() => deleteHandle(item.id)}>
                <MaterialIcon name="delete-forever" color="#fe346e" size={38} />
              </ButtonDelete>
            </ElementContainer>
          )}
        />
      </Container>
    </Background>
  );
}

