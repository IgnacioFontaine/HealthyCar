const NewVehicules = () => {

  return (
    < div>
        <div >
        <div>
          <h1 >Create your vehicule</h1>
        </div>
        <div>
          <label htmlFor="exampleDataList" className="form-label">Type Vehicule</label>
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
          <datalist id="datalistOptions">
            <option name="Car" value="Car"></option>
            <option name="Motorcycle" value="Motorcycle"></option>
            <option name="Van" value="Van"></option>
            <option name="Another" value="Another"></option>
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default NewVehicules;