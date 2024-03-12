import  {useState, useEffect} from "react";
import axios from "axios";

const User = ({dataUsers}) => {
  
  return (
    <div>
      <h1>User</h1>
      {dataUsers.map(({ body, id, title }) => (
        <ul>
          <li key={id}>{id}: {title} {body}</li>
        </ul>
        
      ))}
    </div>
  );
};

const App = () => {
  const [data, setDataUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setDataUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <User dataUsers={data}/>
      </div>
    </>
  );
};

export default App;