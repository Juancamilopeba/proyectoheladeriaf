<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import "./orders.css";
import { useEffect, useState } from "react";
import { getOrdersData, updateStatePedido } from "../../utils/appwriteConfig";
import { Accordion, Badge, Button } from "react-bootstrap";
import { numberFormat } from "../../utils/numberFormat";

const Orders = () => {
  const [pedido, setPedido] = useState([]);

  const getOrders = async () => {
    const response = await getOrdersData();
    if (response) setPedido(response.documents);
  };

=======
import "./orders.css";
import { useEffect, useState } from "react";
import { numberFormat } from "../../utils/numberFormat";
import { getOrdersData } from "../../utils/appwriteConfig";

const Orders = () => {
  const [product, setProduc] = useState([]);
  const getOrders = async () => {
    const response = await getOrdersData();
    if (response) setProduc(response.documents);
  };
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)
  useEffect(() => {
    getOrders();
  }, []);

<<<<<<< HEAD
  const printDiv = async (nombreDiv, documentId) => {
    const ficha = document.getElementById(nombreDiv);
    const ventanaImpresion = window.open(" ", "popUp");
    ventanaImpresion.document.write(ficha.innerHTML);
    ventanaImpresion.document.close();

    ventanaImpresion.onafterprint = async function () {
      console.log(ventanaImpresion.self !== ventanaImpresion.top);
      if (ventanaImpresion.self !== ventanaImpresion.top) {
        const pedidoUp = await updateStatePedido("impreso", documentId);
        console.log(pedidoUp);
      } else {
        console.log("Impresión cancelada, no se actualizan datos");
      }

      // Verifica si la ventana de impresión está cerrada antes de recargar la página
      if (ventanaImpresion.closed) {
        window.location.reload();
      }
    };

    ventanaImpresion.print();

    const pedidoUp = await updateStatePedido("impreso", documentId);
    console.log(pedidoUp);
  };
  let allTotal = 0;
  return (
    <div className="wrapper fadeInDown col-12">
      <section className="orders-container">
        <h1>Tus pedidos</h1>
        {pedido.length === 0 ? (
=======
  return (
    <div className="wrapper fadeInDown">
      <section className="orders-container">
        <h1>Tus pedidos</h1>
        {product.length === 0 ? (
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)
          <>
            <h3 className="text-body-tertiary">Vacio</h3>
          </>
        ) : (
<<<<<<< HEAD
          <Accordion style={{ width: "100%" }}>
            {pedido.map((product, index) => {
              const items = JSON.parse(product.products);
              return (
                <Accordion.Item
                  eventKey={index}
                  key={index}
                  id={`areaImprimir-${index}`}
                >
                  <Accordion.Header>
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        width: "70%",
                        justifyContent: "space-between",
                      }}
                    >
                      <span scope="row">
                        # {index + 1}{" "}
                        <Badge
                          bg={
                            product.estado === "impreso" ? "success" : "danger"
                          }
                        >
                          {product.estado}
                        </Badge>
                      </span>
                      <span scope="row">id: {product.cedula}</span>
                      <span scope="row">nombre: {product.username}</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p scope="row">id: {product.cedula}</p>
                    <p scope="row">nombre: {product.username}</p>
                    <p scope="row">direccion: {product.direccion}</p>

                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">producto</th>
                          <th scope="col">precio</th>
                          <th scope="col">cantidad</th>
                          <th scope="col">subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          const itemTotal = item.price * item.quantity;
                          allTotal += itemTotal;
                          return (
                            <>
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{numberFormat(item.price)}</td>
                                <td>{item.quantity}</td>
                                <th>
                                  {numberFormat(item.price * item.quantity)}
                                </th>
                              </tr>
                            </>
                          );
                        })}
                        <tr key={index}>
                          <th scope="row"></th>
                          <td></td>
                          <td></td>
                          <td>total</td>
                          <th>
                            {numberFormat(
                              items.reduce(
                                (total, item) =>
                                  total + item.price * item.quantity,
                                0
                              )
                            )}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <Button
                      onClick={() =>
                        printDiv(`areaImprimir-${index}`, product.$id)
                      }
                    >
                      imprimir
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
=======
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">cliente</th>
                <th scope="col">price</th>
                <th scope="col">cantidad</th>
                <th scope="col">total</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.username}</td>
                    <td>{numberFormat(product.price)}</td>
                    <td>{product.cantidad}</td>
                    <th>{numberFormat(product.price * product.cantidad)}</th>
                    <td>enviar</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)
        )}
      </section>
    </div>
  );
};

export default Orders;
