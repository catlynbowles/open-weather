import Subline from "../Components/Subline/Subline"

const InfoBox = ({ caption, statistics }) => {
  const generateSublines = () => {
    return statistics.map(stat => {
      return (
        <Subline
          description={stat.description}
          measure={stat.measure}
          key={stat.description}
        />
      )
    })
  }
  return (
    <>
      <h3 tabIndex='0'>{caption}</h3>
      {generateSublines()}
    </>
  )
}

export default InfoBox