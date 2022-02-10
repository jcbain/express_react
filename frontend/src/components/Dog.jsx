const Dog = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Details</h2>
      <p>the dog's name is: {props.name}</p>
      <p>they are {props.color}</p>
      {props.color === "golden" && <p>this is the best color pet</p>}
    </div> 
  )
};

export default Dog;