import React, { useState } from 'react'
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {

    //Definindo estados:
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    //Enviando dados para a API:
    const postData = () => {
        axios.post('https://6171afc0c20f3a001705fe7f.mockapi.io/fakeAPI', {
            firstName,
            lastName,
            checkbox
        }) 
    }
     
    // Dessa maneira os dados aparecem no console:
    // const postData = () => {
    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(checkbox);
    // }

    return(

        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
               <label>Last Name</label>
               <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
               <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    )
}