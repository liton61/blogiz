import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="lg:w-[60%] lg:h-[60%] rounded text-center bg-white lg:px-16 px-5 lg:py-20 py-5">
          <p className="w-40 mx-auto rounded-full p-2 my-5 bg-cyan-100 text-accent">
            29 January 2024
          </p>
          <h1 className="text-4xl">The Rise of Quantum Computing</h1>
          <p className="text-gray-400 mt-3 lg:w-3/4 mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
