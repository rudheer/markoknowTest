import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import Main from './Main'
import { Link } from 'react-router-dom'

const Home = () => {
    const [places,setplaces]=useState("");
    const handleInputs=(e)=>{
        setplaces(e.target.value);
        localStorage.setItem('places',e.target.value);
    }
    return (
        <Container>
            <Content>
                <label>Area he visited yesterday for marketing</label>
            </Content>
            <Takeinput>
                <form>
                    <Input>
                        <input type="text" 
                        name="places"
                        onChange={handleInputs}
                        ></input>
                    </Input>
                    <Button>
                        <Link to="/main"><button><b>NEXT</b></button></Link>
                    </Button>
                </form>
            </Takeinput>
        </Container>
    )
}

export default Home

const Container=styled.div`
text-align:center;
background-color:black;
margin-top:100px;
height:300px;
width:100%;
align-items:center;
justify-content:center;
font-size:30px;
padding-top:150px;
`
const Takeinput=styled.div`
align-items:center;
justify-content:center;
`
const Input=styled.div`
input{
    height:40px;
    width:400px;
}
`
const Button=styled.div`
button{
    height:40px;
    width:400px;
    background-color:rgb(92, 225, 230);
    cursor:pointer;

}
`
const Content=styled.div`
label{
    color:white;
}
`