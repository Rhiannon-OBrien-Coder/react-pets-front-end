const PetDetail = (props) => {
    if (!props.selected)
      return (
        <>
          <h3>There are no details</h3>
        </>
      )
  
    return (
      <div>
        <h1>{props.selected.name}</h1>
        <h2>Breed: {props.selected.breed}</h2>
        <h2>
          Age: {props.selected.age} year{props.selected.age > 1 ? 's' : ''} old
        </h2>
        <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
        <button onClick={() => props.handleRemovePet(props.selected._id)}>Delete Pet</button>
      </div>
    )
  }
  
  export default PetDetail