import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
const EditPegawai = () => {
  const [nama, setNama] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [nomor, setNomor] = useState("");
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    getProductById();
  }, []);
  const getProductById = async () => {
    const response = await fetch(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`);
    const data = await response.json();
    setNama(data.nama);
    setProvinsi(data.provinsi);
    setKabupaten(data.kabupaten);
    setKecamatan(data.kecamatan);
    setKelurahan(data.kelurahan);
    // setId(data.id);
  };
  const updateProduct = async (e) => {
    e.preventDefault();
    const product = { nama, provinsi, kabupaten, kecamatan, kelurahan, id };
    await fetch(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };
  return (
    <div className="shadow-lg px-5 py-3 mb-5 mt-5 bg-body rounded text-center">
      <form onSubmit={updateProduct}>
        <button class="delete  btn btn-danger">X</button>
        <div className="form-group mt-3">
          <label className="label">Nama</label>
          <div className="control">
            <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Nama" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label className="label">Provinsi</label>
          <div className="control">
            <input className="input" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} type="text" placeholder="Provinsi" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label className="label">Kabupaten</label>
          <div className="control">
            <input className="input" value={kabupaten} onChange={(e) => setKabupaten(e.target.value)} type="text" placeholder="Kabupaten" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label className="label">Kecamatan</label>
          <div className="control">
            <input className="input" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} type="text" placeholder="Kecamatan" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label className="label">Kelurahan</label>
          <div className="control">
            <input className="input" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} type="text" placeholder="Kelurahan" />
          </div>
        </div>
        <div className="form-group mt-3">
          <label className="label">ID</label>
          <div className="control">
            <input className="input" value={id} onChange={(e) => setNomor(e.target.value)} type="number" placeholder="Id" />
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="control">
            <button class="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditPegawai;
