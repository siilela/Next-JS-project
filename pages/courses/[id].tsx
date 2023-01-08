export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const coursedata = await res.json();

  const paths = coursedata.map((course) => {
    return {
      params: { id: course.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { course: data },
  };
};

const details = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.email}</p>
      <p>{course.website}</p>
    </div>
  );
};

export default details;
