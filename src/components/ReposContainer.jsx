import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function ReposContainer() {
  const [ repos, setRepos ] = useState([]);
  const location = useLocation();
  const { username } = location.state;

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data));
  }, [username]);

  return (
    <div className='table-container'>
        <h4>Repositories for the following username: {username}</h4>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                {repos?.map((item, index) => {
                    const date = new Date(item.created_at).toString().split(" ");
                    return (
                        <tr key={index}>
                            <td>
                                <Link className='repo-link' to={`/branches/${item.name}`} state={{ username }}>{item.name}</Link>
                            </td>
                            <td>Repo Owner is {username} for more details visit <a style={{ color: "white" }} href={item.owner.html_url} target="_blank" rel="noreferrer">{item.owner.html_url}</a></td>
                            <td>{date[2] + " " + date[1] + " " + date[3]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
