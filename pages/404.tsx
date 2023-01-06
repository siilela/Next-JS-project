import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const pagenotfound = () => {

const router = useRouter();

useEffect(() => {
    console.log("Felicity");
    (setTimeout(() => {
        router.push("/")
    }, 3000))
},[])

  return (
    <div className="not-found">
      <h2>Ooops</h2>
      <h3>Page Not Found </h3>
      <p>go back to home page &#128512; &#128516;   <Link href="/">Home</Link></p>
    </div>
  );
};

export default pagenotfound;
