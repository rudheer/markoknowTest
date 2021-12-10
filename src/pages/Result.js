import React from 'react'
import styled from 'styled-components'

const Result = () => {
    const places=localStorage.getItem('places');
    const number=localStorage.getItem('number');
    return (
        <Container>
            <Answer1>
                <li><b>Area he visited yesterday for marketing</b></li>
                <li>{places}</li>
            </Answer1>
            <Answe2>
                <li><b>Total person he approached</b></li>
                <li>{number}</li>
            </Answe2>
        </Container>
    )
}

export default Result

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
color:white;
text-decoration:none;
`
const Answer1=styled.div`
li{
    list-style-type:none;
    font-size:25px;
}
`
const Answe2=styled.div`
li{
    list-style-type:none;
    font-size:25px;
}
`
