import Subline from "../Components/Subline/Subline"

const InfoBox = ({ caption, statistics }) => {
  const generateSublines = () => {
    return statistics.length && statistics.map(stat => {
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
    <div>
      <h3 tabIndex='0'>{caption}</h3>
      {generateSublines()}
    </div>
  )
}

export default InfoBox