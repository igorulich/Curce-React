function Articles(props) {
  const definitions = props.data;
  return (
    <>
      {definitions.map((item,idx)=>
        <section key={idx}>
          <h2>{item.title}</h2>
          <div>{item.body }</div>
      </section>)}
    </>
  )
}
export default Articles;
