import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Branches() {
    const [ branches, setBranches ] = useState();
    const location = useLocation();
    const { username } = location.state;
    const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${id}/branches`)
        .then((response) => response.json())
        .then((data) => setBranches(data));
  }, [username, id]);
  return (
    <div className="branches-container">
        <h4 style={{marginBottom: "20px"}}>Repo contains following branches</h4>
        <ul className="list">
            {branches?.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}
