import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Button, Checkbox, Form, FormField } from 'semantic-ui-react';

export default function Update() {

    let history = useHistory();

    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))

    }, []);


    const updateAPIData = () => {
        axios.put(`https://6171afc0c20f3a001705fe7f.mockapi.io/fakeAPI/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    

    return (
        <div>
            <Form className="create-form">
                
                <FormField>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </FormField>
                
                <FormField>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />        
                </FormField>

                <FormField>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </FormField>

                <Button type='submit' onClick={updateAPIData}>Update</Button>


            </Form>
        </div>
    )
}