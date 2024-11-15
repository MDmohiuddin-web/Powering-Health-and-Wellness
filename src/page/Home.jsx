import Content from "../components/Content";
import Hero from "../components/Hero";
import Weprovide from "../components/Weprovide";


const Home = () => {
  return (
    <div>

      <Hero></Hero>

      <div className="md:w-4/5 m-auto py-10">
        <h2 className="text-4xl font-bold">
          Our popular courses
        </h2>
        <p className="md:w-1/2">By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance</p>
      </div>
      {/* if i have more time and resources i wil do manual carousel */}
      <Content></Content>

      <Weprovide></Weprovide>
      <div className="md:w-1/2 m-auto py-10 text-center">
        <h2 className="lg:text-5xl md:text-3xl font-bold">
          Learners love EduPath. See why they rate us 4.9 out of 5
        </h2>

      </div>


    </div>
  );
};

export default Home;