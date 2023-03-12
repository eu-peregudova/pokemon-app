export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p.name}>
          <p>{p.name}</p>
        </div>
      ))}
    </div>
  )
}
