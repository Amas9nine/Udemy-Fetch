function Post(props) {
  const { id, imgUrl } = props
  return (
    <div className="square">
      {id}
      <img src={imgUrl} alt="i" />
    </div>
  )
}

export default Post;
