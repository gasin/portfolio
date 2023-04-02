
interface HomeTopicProps {
  title: string,
  contents: any,
}


function HomeTopic(props: HomeTopicProps) {
  const { title, contents } = props;
  return (
    <div className="card large">
      <h3> { title } </h3>
      { contents }
    </div>
  )
}

export default HomeTopic;
