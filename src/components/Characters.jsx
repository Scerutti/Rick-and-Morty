

export default function Characters(props) {
    const {characters,setCharacters} = props;

    const handdleBack = () =>{
        setCharacters(null)
    }

  return (
    <div className="characters" >
        <h1>Characters</h1>
        <span  className="back-home" onClick={handdleBack} >Return to Landing Page</span>
        <div className="container-characters" >
            {characters.map((character,i) =>(
                <div className="character-container" key={i}>
                    <div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === 'Alive'?<><span className="alive"/>Alive</>
                            :<><span className="dead" />Dead</> }
                        </h6>
                        <p>
                            <span className="text-grey">Episodes: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Specie: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={handdleBack}> Return to Landing Page </span>
    </div>
  )
}