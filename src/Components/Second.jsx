import React from 'react'

const Second = () => {
    const books = [
        "El silencio de los corderos de Thomas Harris",
        "El pájaro espino de Mary Higgins Clark",
        "La chica del tren de Paula Hawkins",
        "Perdida de Gillian Flynn",
        "El asesinato de Roger Ackroyd de Agatha Christie",
        "La carretera de Cormac McCarthy",
        "El guardián invisible de Dolores Redondo",
        "La trilogía de Bill Hodges de Stephen King",
        "Los hombres que no amaban a las mujeres de Stieg Larsson",
        "El psicoanalista de John Katzenbach"

    ];

    //const books = [];

  return (
    <div>
        <h2>Listado de libros</h2>
        <ul>
            {
                books.length >= 1 ?
                (
                        books.map((book, index) => {
                            return <li key={index}>{book}</li>
                        })
                ) : "No existen libros."
            }
        </ul>
    </div>
  )
}

export default Second