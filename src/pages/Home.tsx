import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Container, Title, Greeting, Input, Input1, Input2 } from './styles';
import { Button } from '../components/button/Button';
import { SkillCard } from '../components/skillCards/SkillCard';
 
//cd trab1

interface ISkData {
  id: string;
  name: string;
  gmail: string;
  telefone: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [newSkill1, setNewSkill1] = useState('')
  const [newSkill2, setNewSkill2] = useState('')
  const [myAlo, setMySkills] = useState<ISkData[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
      gmail: newSkill1,
      telefone: newSkill2,
     
    }

    setMySkills([...myAlo, data])
    setNewSkill('')
    setNewSkill1('')
    setNewSkill2('')
  }
  function handleRemoveAlo(id: string) {
    setMySkills(myAlo => myAlo.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if(currentHour < 12) {
      setGreeting('Bom dia camarada')
    }
    else if (currentHour >= 12 && currentHour < 18){
      setGreeting('Boa tarde consagrado')
    } else {
      setGreeting('Boa noite abençoado ')
    }
  }, [])


  useEffect (() => {
    async function loadData() {
      const storagedSkills = await AsyncStorage.getItem('@myskills:skills')
      if (storagedSkills) {
        setMySkills(JSON.parse(storagedSkills))
      }
    }
    loadData()
    async function removeAll() {
      await AsyncStorage.removeItem('@myskills:skills')
    }
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myskills:skills', JSON.stringify(myAlo))
    }
    saveData()
  }, [myAlo])


  return (
    <>
    <Container>
      <Title>Alek Produções</Title>
      <Title>Cadastro</Title>

      <Greeting>
        {greeting}
      </Greeting>
      
      <Input
        placeholder= 'Nome'
        placeholderTextColor= '#555'
        value={newSkill}
        onChangeText={value => setNewSkill(value)}
      />

      <Input1
        placeholder= 'Gmail'
        placeholderTextColor= '#555'
        value={newSkill1}
        onChangeText={value => setNewSkill1(value)}
      />

      <Input2
        placeholder= 'Telefone'
        placeholderTextColor= '#555'
        value={newSkill2}
        onChangeText={value => setNewSkill2(value)}
      />

        <Button
          title="Cadastro"
          onPress={handleAddNewSkill}
        />
        

        <Title>
          Registrado
        </Title>

        <FlatList showsVerticalScrollIndicator={true}
          data={myAlo}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard
              skill={item.name}
              skill1={item.gmail}
              skill2={item.telefone}
              onPress={() => handleRemoveAlo(item.id)}
            />

          )}
        />

        {/* <FlatList showsVerticalScrollIndicator={true}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard
              skill={item.gmail}
            />

          )}
        /> */}
        
      </Container>
    </>
  );
}

