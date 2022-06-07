import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

const Users = () => {
  const [data, setData] = useState([]);  
  const [searchParams,setSearchParams] = useSearchParams();  
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));  

  useEffect(() => {   
      setSearchParams({
          page
      })
    axios({   
      url: "https://reqres.in/api/users",   
      method: "GET",   
      params: {
          page 
      }
    })   
      .then((res) => {   
        setData(res.data.data);   
      })   
      .catch((err) => {   
        console.log(err.message);   
      });   
  }, [page]);   

  // if(!isAuth){
  //     return <Navigate to="/login" />
  // }

  return (
    <div>
      Users
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.avatar} width="100px" alt={item.email} />
          <h3> Name: {item.first_name} </h3>
          <Link to={`/users/${item.id}`}> See More </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
