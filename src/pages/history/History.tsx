import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './history_styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Cycle } from '../../reducers/cycles/reducer'
function getStatusColor(cycle: Cycle): 'red' | 'yellow' | 'green' {
  if (cycle.interruptedDate) return 'red'
  if (!cycle.finishDate) return 'yellow'

  return 'green'
}

function getStatus(cycle: Cycle): string {
  if (cycle.interruptedDate) return 'Interrompido'
  if (!cycle.finishDate) return 'Em andamento'
  return 'Concluído'
}

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} min</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    <Status statusColor={getStatusColor(cycle)}>
                      {getStatus(cycle)}
                    </Status>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
