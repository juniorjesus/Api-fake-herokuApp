import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { url } from '../helpers/Url';
import '../styles/List.css';

export const List = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        axios.get(url)
        .then(response => {
            setEstudiantes(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const dataDelete = (id) =>{
        axios.delete(url + id)
        .then(response => {
            getData()
        }).catch(error => {
            console.log(error);
        })
    }
   
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre Completo</th>
                    <th>Tipo Documento</th>
                    <th>Número Documento</th>
                    <th>Teléfono</th>
                    <th>Celular</th>
                    <th>Dirección</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         estudiantes.map(estudiante => (
                            <tr key={estudiante.id}>
                                 <td>{estudiante.nombre}</td>
                                 <td>{estudiante.tipo}</td>
                                 <td>{estudiante.numero}</td>
                                 <td>{estudiante.telefono}</td>
                                 <td>{estudiante.celular}</td>
                                 <td>{estudiante.direccion}</td>
                                 <td><img src={estudiante.imagen} width="40" height="50" alt=""/></td>
                                 <td><button onClick={() => dataDelete(estudiante.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                   
                 </tbody>
            </table>
        </div>
    )
}
