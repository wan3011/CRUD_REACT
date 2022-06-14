import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddPegawai = () => {
  const [nama, setNama] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [id, setId] = useState("");

  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = { nama, provinsi, kabupaten, kecamatan, kelurahan, id };
    await fetch("https://61601920faa03600179fb8d2.mockapi.io/pegawai", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  return (
    <div className="shadow-lg px-5 py-3 mb-5 mt-5 bg-body rounded text-center">
      <form class="form-group form-control-lg   " onSubmit={saveProduct}>
        <div class="form-group mt-3">
          <div className="control">
            <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Nama" />
          </div>
        </div>
        <div class="form-group mt-3">
          <div className="control">
            <input className="input" value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="Id" />
          </div>
        </div>

        <label for="exampleDataList" class="form-label  mt-3">
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={provinsi} onChange={(e) => setProvinsi(e.target.value)} type="text" />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Bali" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </label>
        <label for="exampleDataList" class="form-label  mt-3">
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={kabupaten} onChange={(e) => setKabupaten(e.target.value)} type="text" />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </label>
        <label for="exampleDataList" class="form-label  mt-3">
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} type="text" />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </label>
        <label for="exampleDataList" class="form-label  mt-3">
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} type="text" />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
        </label>

        <div class="form-group mt-3">
          <div className="control">
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPegawai;
