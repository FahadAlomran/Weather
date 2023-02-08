import React, { useState } from 'react'
import axios from 'axios';
import { Button,Image, Box, Container, Heading, Input, Select, SimpleGrid, Center, Flex } from "@chakra-ui/react";
import Nav from './Nav';
function Get() {
    const [data,setData]=useState<any>([]);
    
    
const getLondon=(c1:any)=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=95e688314dad46da8fc165950230702 &q=${c1}&aqi=no`
    ).then(res=>{
       
        setData(res.data)
        console.log(res.data) 
    })
}

  return (
    <div>
     
     <Flex justifyContent='center' gap={5} mt={50}>

        <Button onClick={()=>getLondon('London')} >London</Button>
        <Button onClick={()=>getLondon('Paris')} >Paris</Button>
        <Button onClick={()=>getLondon('Riyadh')} >Riyadh</Button>
        <Button onClick={()=>getLondon('Tokyo')} >Tokyo</Button>
        <Button onClick={()=>getLondon('Mecca')} >Mecca</Button>
        </Flex>
 <SimpleGrid justifyContent='center' spacingY={5} mt={2}mb={184}>

        <Box mt= '30px' textAlign="center" border='2px' width ="350px" color='#fff' bg = "blue.100" rounded='3xl' shadow='xl'p={10}>
        <Heading> {data && data.location && data.location.name}     
 </Heading>
 
  {data && <Image src = {data && data.current &&data.current.condition&&data.current.condition.icon} />}
 <p>{data && data.current && data.current.temp_c + " C" }  
 </p>
 <p>{ data && data.current && "Humidity: " + data.current.humidity + "%"  }  
 </p>
 <p>{data && data.current && "Wind Speed: "+  data.current.wind_kph
 +" km/h"}  
 </p>
  <p>{data && data.location && "Local Time: "+ data.location.localtime
 } 
 </p> </Box>
</SimpleGrid>
    </div>
  )
}

export default Get