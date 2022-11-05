import RepositoryItem from './RepositoryItem'
import {useState, useEffect} from 'preact/hooks'



export default function RepositoryList() { 
  const [repository, setRepository] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/gellmesquita/repos').then(res =>res.json()).then(res1 => {
        setRepository(res1)
        console.log(res1);
    })
  }, [])
  



  return (
    <div>
        <h1 style={{ margin:'20px 15px'}}>Lista de Repositórios</h1>
        {repository.map(r1=>{
            return <RepositoryItem repo={r1} key={r1.id}/>
        })}
        
    </div>
  )
}
