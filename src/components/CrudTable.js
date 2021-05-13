import React from 'react'
import CrudTableRow from './CrudTableRow'
import styled from 'styled-components';
import { animations } from 'react-animation';

    const FadeTable = styled.div`
      animation: ${animations.fadeIn};
      animation-duration: 0.5s;
    `;
const CrudTable = ({data, setDataToEdit, deleteData, isLoading}) => {
         

    return (
        <>
            {!isLoading && <FadeTable>
                <h3>Tabla de Elementos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Simbolo</th>
                            <th>Masa atomica</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>    
                    <tbody>
                        {data.length > 0 
                            ? data.map((element) => <CrudTableRow key={element.id} element={element} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                            : <tr><td colSpan="3">Sin datos</td></tr> 
                        }
                    </tbody>
                </table>            
            </FadeTable>}
        </>
    )
}


export default CrudTable
