import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>My Home | about </Head>
      <div className="content">
        <h1>About Us</h1>
        <p>
          Use microfrontends to architect an app that dozens of teams can work
          on at the same time
        </p>
        <p>Structure your apps to scale to millions of users</p>
      </div>
    </>
  );
};

export default about;
