import Image from "next/image";

export default function Page() {
  return (
    <section>
      <a href="https://github.com/klnswamy1702" target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Swamy - Data Scientist
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello there, This is Swamy and I am a driven Data Scientist, Machine Learning Engineer, and DevOps
          Specialist passionate about leveraging Artificial Intelligence (AI) and Generative AI
          to solve complex problems and create innovative solutions. With nearly 2 years of experience in
          Data Science and hands-on exposure to DevOps practices, I bring a unique blend of expertise in
          building scalable AI systems and automating workflows.
        </p>
        {/* <p>
          During my tenure with the AI and Emerging Technologies groups at ineuron and PW Skills,
          I mentored students in Machine Learning, Natural Language Processing (NLP), and practical
          applications of Generative AI like text generation, chatbots, and creative AI models. My passion lies
          in exploring cutting-edge technologies, including Deep Learning, DevOps, and Generative AI, to
          deliver impactful solutions for real-world challenges.
        </p> */}
        {/* <p>
          I am now actively seeking full-time opportunities in the fields of Artificial Intelligence, Deep
          Learning, Generative AI, and DevOps, where I can contribute to meaningful projects and
          continue to grow as a tech professional.
        </p>
        <h2>Skills & Expertise</h2>
        <ul>
          <li>Data Science and AI</li>
          <ul>
            <li>Programming Languages: Python, R, SQL</li>
            <li>Frameworks: NumPy, Pandas, Scikit-learn, Matplotlib, SpaCy, Keras, PyTorch, TensorFlow</li>
            <li>
              Generative AI Tools: Hugging Face, OpenAI API, LangChain, GPT Models, DALL-E, MidJourney
            </li>
            <li>
              Functional Expertise: Machine Learning, Deep Learning, NLP, Data Mining, Statistical
              Modeling, Big Data Analysis
            </li>
          </ul>
          <li>DevOps</li>
          <ul>
            <li>Cloud Platforms: AWS (EC2, S3, Lambda), Google Cloud, Azure</li>
            <li>Containerization and Orchestration: Docker, Kubernetes</li>
            <li>CI/CD Pipelines: Jenkins, GitHub Actions, GitLab CI/CD</li>
            <li>Infrastructure as Code (IaC): Terraform, Ansible</li>
            <li>Monitoring & Logging: Prometheus, Grafana, ELK Stack</li>
            <li>Big Data Technologies: Apache Spark, Hadoop</li>
          </ul>
        </ul>
        <h2>Soft Skills</h2>
        <ul>
          <li>Teaching & Mentoring</li>
          <li>Problem-Solving and Analytical Thinking</li>
          <li>Team Collaboration and Agile Practices</li>
        </ul>
        <h2>Career Goals</h2>
        <p>
          I aim to work at the intersection of AI, Generative AI, Data Science, and DevOps, enabling
          businesses to unlock the full potential of their data while building robust, scalable, and automated
          systems. My vision includes contributing to cutting-edge AI systems, enhancing productivity
          through DevOps automation, and shaping the future of Generative AI applications in diverse industries.
        </p>
        <h2>Contact Information</h2>
        <ul>
          <li>📧 Email: <a href="mailto:lnswamykarampuri@gmail.com">lnswamykarampuri@gmail.com</a></li>
          <li>🌐 GitHub: <a href="https://github.com/klnswamy1702" target="_blank">klnswamy1702</a></li>
          <li>💼 Portfolio: <a href="https://techfuze.solutions" target="_blank">Techfuze Solutions</a></li>
        </ul> */}
        <p>Let’s connect to collaborate on transformative AI solutions, DevOps automation, or Generative AI innovations!</p>
      </div>
    </section>
  );
}
