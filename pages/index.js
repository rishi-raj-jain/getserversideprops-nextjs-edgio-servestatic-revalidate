const Home = ({ date }) => {
  return <>{date}</>;
};

export default Home;

export async function getServerSideProps() {
  return {
    props: {
      date: new Date().toString(),
    },
  };
}
