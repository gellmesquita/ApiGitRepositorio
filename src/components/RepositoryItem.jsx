import {useState} from 'preact/hooks';
import '../style/RepositoryItem.css'

export default function RepositoryItem({repo}) {

  return (
    <div className="repository-item-global">
        <h4>{repo?.name ?? 'Sem Nome do Repositorio'}</h4>
        <p>{repo?.description ?? 'Sem Descrição'}</p>
        <a href={repo?.html_url ?? '#'}>link do Repositorio</a>
    </div>
  )
}
