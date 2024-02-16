import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate()

  return (
    < div>
        <div >
        <div>
          <h1 >Error 404</h1>
        </div>
        <div >
            <h3  color={"black"}>Return to Home</h3>
            <button onClick={()=>navigate("/")} > </button>
        </div>
      </div>
    </div>
  );
};

export default Error;