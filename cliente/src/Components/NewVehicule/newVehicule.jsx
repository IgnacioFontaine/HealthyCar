const NewVehicules = () => {

  return (
    < div>
        <div >
        <div>
          <h1 >Create your vehicule</h1>
        </div>
        <div>
          <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default NewVehicules;