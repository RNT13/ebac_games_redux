import { useEffect } from 'react'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'
import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading, error } = useGetJogosQuery()

  useEffect(() => {
    console.log('isLoading:', isLoading)
    console.log('jogos:', jogos)
    console.log('error:', error)
  }, [isLoading, jogos, error])

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {jogos?.map((game) => (
        <Produto key={game.id} game={game} />
      ))}
    </S.Produtos>
  )
}

export default Produtos
