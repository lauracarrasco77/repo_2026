import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalEliminarProducto = ({
    mostrarModalEliminacion,
    setMostrarModalEliminacion,
    eliminarProducto,
    producto
}) =>{

    const [deshabilitado, setDeshabilitado] = useState(false);

    const handleEliminar = async () => {
        if (deshabilitado) return;
        setDeshabilitado(true);
        try {
            await eliminarProducto();
        } finally {
            setDeshabilitado(false);
        }
    };

    return(
    <Modal
        show={mostrarModalEliminacion}
        onHide={() => setMostrarModalEliminacion(false)}
        backdrop="static"
        keyboard={false}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>¿Está seguro que desea eliminar el producto <strong>{producto?.nombreProducto}</strong>?</p>
            <p className="text-danger">Esta acción no se puede deshacer.</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setMostrarModalEliminacion(false)}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={handleEliminar} disabled={deshabilitado}>
                {deshabilitado ? 'Eliminando...' : 'Eliminar'}
            </Button>
        </Modal.Footer>
    </Modal>    

    )

};

export default ModalEliminarProducto;