import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';


function Exercisesadd() {
  
  let table  =useNavigate()
    const [exercisedata, setExercisedata] = useState({
        name: "",
        gif: "",
        description: "",
        focusArea: "",
        reps: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setExercisedata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://65a8f1e1219bfa371867fdbf.mockapi.io/:exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then(response => {
            if (response.ok) {
                alert("Exercise added");
            } else {
                alert("Exercise not added");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    const body={
        display:"flex",
        justifyContent:"center",
        AlignItems:"center",
        height:"90vh",
        flexDirection:"column",
        width:"100vw", 
        backgroundImage:"url('https://c1.wallpaperflare.com/preview/234/625/249/various-fit-fitness-gym.jpg')" ,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        color:"white" ,
        fontFamily:"'Helvetica Neue', Helvetica,Arial,sans-serif"     
    }

    return (
        <div>
            <AdminNav/>
        <div style={body}>
            <h1 className='mx-auto'>Adding Exercise Data</h1>
            <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="ProductsName">
                    <Form.Label>Name of Exercise</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={exercisedata.name} name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Productsimage">
                    <Form.Label>Gif of Exercise</Form.Label>
                    <Form.Control type="text" placeholder="Gif link" value={exercisedata.gif} name="gif" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsPrice">
                    <Form.Label>Reps</Form.Label>
                    <Form.Control type="text" placeholder="Reps" value={exercisedata.reps} name="reps" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsQuantity">
                    <Form.Label>Focus Areas</Form.Label>
                    <Form.Control type="text" placeholder="Focus Areas" value={exercisedata.focusArea} name="focusArea" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="description" value={exercisedata.description} name="description" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type={"submit"}><b>Submit</b></Button>
                <Button variant="warning" type= {"button"} onClick={()=>{return table('/exercisetable')}} className='ms-3'><b>View all details</b></Button>
            </Form>
        </div>
        </div>
    );
}

export default Exercisesadd
