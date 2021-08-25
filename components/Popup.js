const Popup = ({ show, content }) => {
  return (
    <div className={`${show ? "" : "hidden"} bg-black absolute top-0 transform -translate-y-full`}>
      <p>{content}</p>
    </div>
  )
}

export default Popup
