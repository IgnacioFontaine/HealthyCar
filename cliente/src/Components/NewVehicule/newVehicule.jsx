import './newVehicule.css';

const NewVehicules = () => {

  return (
    < div className=" d-flex flex-column justify-content-center align-items-center">
        <div >
        <div>
          <h1 className="titulo align-text-center" >Create your vehicule</h1>
        </div>
        <div className="container form-create">
          <div className="flex input-vehicule">
            <label htmlFor="vehiculeName" className="input-label">Name:</label>
            <input  id="vehiculeName" placeholder="Type name..."></input>
          </div>
          <div>
            <label htmlFor="exampleDataList" className="form-label">Select</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
            <datalist id="datalistOptions">
              <option name="Car" value="Car"></option>
              <option name="Motorcycle" value="Motorcycle"></option>
              <option name="Van" value="Van"></option>
              <option name="Other" value="Other"></option>
            </datalist>
          </div>
          <div className="flex input-vehicule">
            <label htmlFor="vehiculeTotalKm" className="input-label">Total Km:</label>
            <input  id="vehiculeTotalKm" placeholder=""></input>
          </div>
          <div className="flex input-vehicule">
            <label htmlFor="vehiculeOilKm" className="input-label">Oil Km:</label>
            <input  id="vehiculeOilKm" placeholder=""></input>
          </div>
          <div className="flex input-vehicule">
            <label htmlFor="vehiculeServiceKm" className="input-label">Service Km:</label>
            <input  id="vehiculeServiceKm" placeholder=""></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVehicules;