import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalEdicionProducto = ({
    mostrarModalEdicion,
    setMostrarModalEdicion,
    productoEditar,
    manejoCambioInputEdicion,
    actualizarProducto
}) => {
    const [deshabilitar, setDeshabilitar] = useState(false);

    const handleActualizar = async () => {
        if (deshabilitar) return;
        setDeshabilitar(true);
        try {
            await actualizarProducto();
        } finally {
            setDeshabilitar(false);
        }
    };

    return (
        <Modal
            show={mostrarModalEdicion}
            onHide={() => setMostrarModalEdicion(false)}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formNombreProducto">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombreProducto"
                            placeholder="Ingrese el nombre del producto"
                            value={productoEditar.nombreProducto || ''}          
                            onChange={manejoCambioInputEdicion}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="descripcion"
                            placeholder="Ingrese la descripción del producto"
                            value={productoEditar.descripcion || ''}          
                            onChange={manejoCambioInputEdicion}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPrecio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            name="precio"
                            placeholder="Ingrese el precio"
                            value={productoEditar.precio || ''}          
                            onChange={manejoCambioInputEdicion}
                            min="0"
                            step="0.01"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formImagen">
                        <Form.Label>URL de Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            name="imagen"
                            placeholder="Ingrese la URL de la imagen"
                            value={productoEditar.imagen || ''}          
                            onChange={manejoCambioInputEdicion}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setMostrarModalEdicion(false)}>
                    Cancelar
                </Button>
                <Button 
                    variant="primary" 
                    onClick={handleActualizar} 
                    disabled={!productoEditar.nombreProducto?.trim() || deshabilitar}
                >
                    {deshabilitar ? 'Guardando...' : 'Actualizar'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEdicionProducto;