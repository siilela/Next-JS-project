import Link from "next/link";
import Image from "next/image";

const header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Image src="/logo.png" alt="college" width={128} height={77} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
      </nav>
    </>
  );
};

export default header;
