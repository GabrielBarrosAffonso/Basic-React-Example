import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])
    
  useEffect(()=> {
    fetch("https://api.github.com/orgs/rocketseat/repos")
    .then(res => res.json())
    .then(data => setRepositories(data))
  }, [])

  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {  
          repositories.map((item) => {
            return <RepositoryItem key={`${item.id}`} repository={item}/>
          })
        }
      </ul>
    </section>
  )
}