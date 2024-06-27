import ibgroup from "/src/assets/images/Chat_With_CSV.png";
import memento from "/src/assets/images/LLM_With_Custom_Data.png";
import acc from "/src/assets/images/Fine_Tunning_LLMS.png";
import daddy from "/src/assets/images/Traffic_Congestion_Ratio.png";
// import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://csvdialogue.streamlit.app/"
            img={ibgroup}
            alt="Chat With CSV"
            name="chat with csv"
            type="Large Language Model • Deep Learning"
            year="2024"
            tools="PandasAI • Palm2 • Langchain • VectorDB"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://github.com/Aremstrom/LLM-Custom-Data"
            img={memento}
            alt="LLM With Custom Data"
            name="LLM With Custom Data"
            type="Large Language Model • Deep Learning"
            year="2024"
            tools="llama3 • Python"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/Aremstrom/FineTunning-LLM-Prompt-Engineering"
            img={acc}
            alt="Fine Tunning LLM And Prompt Engineering"
            name="Fine Tunning LLM And Prompt Engineering"
            type="Fine Tunning • Prompt Engineering"
            year="2023"
            tools="Gemini • Langchain • Prompt Engineering"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://github.com/Aremstrom/Traffic-Congestion-Ratio-Estimation"
            img={daddy}
            alt="Traffic Congestion Ratio Estimation"
            name="Traffic Congestion Ratio Estimation"
            type="Machine Learning"
            year="2023"
            tools="Google Maps API • DeepLearning"
          />
        </div>
        {/* <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div> */}
      </div>
    </section>
  );
}
