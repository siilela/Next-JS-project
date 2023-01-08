import styles from "../../styles/Courses.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const coursedata = await res.json();

  return {
    props: { courses: coursedata },
  };
};

const courses = ({ courses }) => {
  return (
    <div className="content">
      <h1>Courses</h1>
      {courses.map((course) => (
        <Link href={"/courses/"+course.id} key={course.id}>
          <div className={styles.single}>
            <h3>{course.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default courses;
