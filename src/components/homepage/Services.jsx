import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Large Language Models",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "AI Chatbots",
  ];

  const toolBoxItems = [
    "Python",
    "Pandas",
    "Numpy",
    "Django",
    "Tensorflow",
    "Docker",
    "TailwindCSS",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I specialize in data science, machine learning, and artificial intelligence. My goal is to transform data into actionable insights and innovative solutions, delivering high-impact results for every project.

"
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my essential tools and technologies for bringing projects to life. I am always eager to learn more about my current stack and explore new technologies to enhance my capabilities."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
