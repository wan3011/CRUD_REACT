import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PegawaiList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://61601920faa03600179fb8d2.mockapi.io/pegawai`);
    const data = await response.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    await fetch(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  };

  return (
    <div>
      <div className="crud shadow-lg p-5 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class=" text-center  mt-2  text-gred ">
            <h2>
              <b>Data Pegawai</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Link to="/add" class="bi bi-person-plus-fill fs-2 text-success  "></Link>
          </div>
        </div>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr className="bg-secondary text-light">
              <th>No.</th>
              <th>Nama </th>
              <th>Provinsi</th>
              <th>Kabupaten/Kota </th>
              <th>Kecamatan </th>
              <th>Kelurahan</th>
              <th>id</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.nama}</td>
                <td>{product.provinsi}</td>
                <td>{product.kabupaten}</td>
                <td>{product.kecamatan}</td>
                <td>{product.kelurahan}</td>
                <td>{product.id}</td>
                <td className="text-center">
                  <Link to={`/edit/${product.id}`} class="bi bi-pencil-fill m-3"></Link>
                  <Link onClick={() => deleteProduct(product.id)} class="bi bi-trash3-fill text-danger"></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PegawaiList;
