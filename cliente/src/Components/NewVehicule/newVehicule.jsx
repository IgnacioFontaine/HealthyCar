const NewVehicules = () => {

  return (
    < div className=" d-flex flex-column justify-content-center align-items-center">
        <div >
        <div>
          <h1 >Create your vehicule</h1>
        </div>
        <div className="container">
          <div>
            <label htmlFor="vehiculeName" className="input-label">Name:</label>
            <input  id="vehiculeName" placeholder="Type name..."></input>
          </div>
          <div>
            <label htmlFor="exampleDataList" className="form-label">Type Vehicule</label>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
            <datalist id="datalistOptions">
              <option name="Car" value="Car"></option>
              <option name="Motorcycle" value="Motorcycle"></option>
              <option name="Van" value="Van"></option>
              <option name="Other" value="Other"></option>
            </datalist>
          </div>
          <div>
            <label htmlFor="vehiculeTotalKm" className="input-label">Total Km:</label>
            <input  id="vehiculeTotalKm" placeholder=""></input>
          </div>
          <div>
            <label htmlFor="vehiculeOilKm" className="input-label">Oil Km:</label>
            <input  id="vehiculeOilKm" placeholder=""></input>
          </div>
          <div>
            <label htmlFor="vehiculeServiceKm" className="input-label">Service Km:</label>
            <input  id="vehiculeServiceKm" placeholder=""></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVehicules;