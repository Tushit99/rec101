import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersPage = () => {
  const [data, setData] = useState([]); 
  const params = useParams()

  useEffect(() => {
    axios({
      url: `https://reqres.in/api/users/${params.id}`,
      method: "GET",
    })
      .then((res) => {
        console.log(res);
         setData(res.data.data);
      })
      .catch((err) => {   
        console.log(err.message);
      });
  }, [params.id]);  


  return (  
    <div>  
      User Info : 
      <div key={data.id}>
        <img src={data.avatar} width="100px" alt={data.email} />
        <h3> Name: {data.first_name} </h3>
        <div> Last Name: {data.last_name} </div>
        <div> Email: {data.email} </div>
       </div>
    </div>
  );
};

export default UsersPage;
