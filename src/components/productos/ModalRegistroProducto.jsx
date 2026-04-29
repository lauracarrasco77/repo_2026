import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalRegistroProducto =({
    mostrarModal,
    setMostrarModal,
    nuevoProducto,
    manejoCambioInput,
    agregarProducto
}) => {
    const [desabilitado, setDesabilitado] = useState(false);

    const handleRegistrar = async () => {
        if (desabilitado) return;
        setDesabilitado(true);
        await agregarProducto();
        setDesabilitado(false);
    };

    return (
    <Modal
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
        backdrop="static"
        keyboard={false}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombreProducto"
                        value={nuevoProducto.nombreProducto}
                        onChange={manejoCambioInput}
                        placeholder="Ingresa el nombre del producto"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="descripcion"
                        value={nuevoProducto.descripcion}
                        onChange={manejoCambioInput}
                        placeholder="Ingresa la descripción del producto"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        name="precio"
                        value={nuevoProducto.precio}
                        onChange={manejoCambioInput}
                        placeholder="Ingresa el precio"
                        min="0"
                        step="0.01"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>URL de Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        name="imagen"
                        value={nuevoProducto.imagen}
                        onChange={manejoCambioInput}
                        placeholder="Ingresa la URL de la imagen"
                    />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={() => setMostrarModal(false)}>
                Cancelar
            </Button>
            <Button
                variant="primary"
                onClick={handleRegistrar}
                disabled={
                    nuevoProducto.nombreProducto?.trim() === "" ||
                    nuevoProducto.descripcion?.trim() === "" ||
                    !nuevoProducto.precio ||
                    desabilitado
                }
            >
                Guardar
            </Button>
        </Modal.Footer>
    </Modal>
);

};

export default ModalRegistroProducto;