import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row,Col,Container,Card } from 'react-bootstrap'
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [age,setAge]=useState('')
  const [name,setName]=useState('')
  const [editIndex, setEditIndex]=useState(null)

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(editIndex!==null){
      const newStudents=[...students]
      newStudents[editIndex]={name, age}
      setStudents(newStudents)
      setEditIndex(null)
    }else{
      setStudents([...students,{name,age}])
    }
    
    setName('')
    setAge('')
  }

  const handleDelete=(index)=>{
     const newStudent=[...students]
     newStudent.splice(index,1)
     setStudents(newStudent)
  }

  const handleEdit=(index)=>{
    setName(students[index].name)
    setAge(students[index].age)
    setEditIndex(index)

  }


  return (
    <Container>

    
    <Row>
    <Form onSubmit={handleSubmit}>
   
   <Form.Group className="mb-3">
     <Form.Label >Nombre :</Form.Label>
     <Form.Control  placeholder="Ingrese Nombre Alumno" value={name} onChange={(e)=>setName(e.target.value)}/>
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Label >Edad :</Form.Label>
     <Form.Control  placeholder="Ingrese Edad Alumno" value={age} onChange={(e)=>setAge(e.target.value)}/>
   </Form.Group>
  
   <Button type="submit">
    {
      editIndex!==null ?'Actualizar Datos':'Agregar datos'
    }
      </Button>

 </Form>
    
    </Row>
     <Row>
      {
        students.map((student,index)=>(
     <Col sm={6} key={index}>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Datos Alumno</Card.Title>
        <Card.Text>{student.name} </Card.Text>
        <Card.Text>Edad:{student.age} </Card.Text>
        <Button variant="danger" onClick={()=>handleDelete(index)}>Eliminar</Button>
        <Button variant="warning" onClick={()=>handleEdit(index)}>Modificar</Button>
      </Card.Body>
    </Card>
    </Col> 
        ))
      }
     </Row>
    </Container>
  )
}

export default App
