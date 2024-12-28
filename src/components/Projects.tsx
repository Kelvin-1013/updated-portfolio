import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const projects = [
  {
    id: 1,
    title: "Company Culture Analysis",
    description: "Data-driven analysis platform for company culture metrics",
    images: [
      "/lovable-uploads/6478ecc0-59de-4944-9468-a8134a6c2b7a.png",
      "/lovable-uploads/e5e77276-d7e7-4697-919a-9f8954d4472a.png",
      "/lovable-uploads/14891869-f04c-46e2-8547-3909fb490248.png"
    ],
    details: [
      "Developed a comprehensive data analytics platform focused on measuring and improving company culture through real-time metrics and insights.",
      "Implemented interactive dashboards using React and Recharts to visualize key performance indicators, employee satisfaction scores, and team engagement metrics.",
      "Integrated machine learning algorithms to identify trends and patterns in company culture data, enabling predictive analytics for workforce management.",
      "Built a robust backend system that processes large datasets from multiple sources, including surveys, feedback forms, and HR systems, providing actionable insights for management decisions."
    ]
  },
  {
    id: 2,
    title: "AI-Powered Chatbot Platform",
    description: "Advanced chatbot system using RAG technology",
    images: [
      "/lovable-uploads/b5fb0452-e6c2-48db-9099-1d6ca2cea2da.png",
      "/lovable-uploads/437f5bfb-d6e3-4c35-9093-cf30cf514853.png"
    ],
    details: [
      "Developed an innovative AI chatbot platform utilizing RAG (Retrieval-Augmented Generation) technology, integrating with Langchain, Pinecone, OpenAI, and other cutting-edge AI technologies.",
      "Implemented sophisticated technical features including custom knowledge integration, LLM configuration management, and advanced prompt engineering capabilities.",
      "Built robust security measures to encrypt sensitive data transmission to third-party APIs, ensuring complete data protection and compliance with privacy standards.",
      "Created an intuitive user interface that simplifies complex AI interactions while maintaining powerful functionality, resulting in enhanced user experience and accessibility.",
      "Integrated multiple AI technologies including Django, Together AI, and Anthropic to create a versatile and powerful chatbot solution."
    ]
  },
  {
    id: 3,
    title: "Reverse Image Search Engine",
    description: "Image and Text based online product search engine",
    images: [
      "/lovable-uploads/6c9b861b-03a6-4c3f-82e5-100aec646429.png",
      "/lovable-uploads/d05ef68c-a6ea-4518-a428-096b518f0420.png",
      "/lovable-uploads/1229429a-3239-429c-8c3c-d795c9085673.png"
    ],
    details: [
      "Developed an advanced image search engine that integrates with Google Search API and Amazon for comprehensive product discovery.",
      "Implemented sophisticated image processing features including Image Verification, Feature Extraction, and Image to Vector conversion using OpenCV and Python.",
      "Built robust fraud detection capabilities using TensorFlow and AWS SageMaker for enhanced security and reliability.",
      "Created a user-friendly interface that allows users to easily find similar product images and information from their own uploaded images.",
      "Integrated multiple technologies including Google Search API, AWS SageMaker, and TensorFlow for powerful image processing capabilities."
    ]
  },
  {
    id: 4,
    title: "Ollabot - AI Automation Platform",
    description: "New AI Tech for No-Code Chatbot Creation",
    images: [
      "/lovable-uploads/fba80981-c6f4-4c12-ac37-b3e4dd53a5ca.png",
      "/lovable-uploads/0e55af72-df45-4633-88f7-a94c7f12001c.png",
      "/lovable-uploads/16c92534-948a-472f-8fe2-4dcd1b8f8739.png",
      "/lovable-uploads/6fe2841e-1742-4e35-98bd-84f8dfc6e280.png",
      "/lovable-uploads/be6d1328-951a-44a9-9ad8-051dadeccfc7.png",
      "/lovable-uploads/de619038-f7b1-458e-be86-22e6efe4c0ea.png"
    ],
    details: [
      "Developed an innovative AI-powered chatbot platform that enables non-technical users to create and deploy sophisticated chatbots without coding skills.",
      "Implemented advanced AI capabilities using NLP, LangChain, and custom language models for natural conversations and understanding.",
      "Built a comprehensive tech stack including NextJS, TypeScript, MaterialUI for frontend, and Node.js/Express/Django for backend, with Supabase and PostgreSQL for database management.",
      "Created seamless integration capabilities across multiple communication channels, allowing chatbots to be deployed across websites and messaging apps.",
      "Designed an intuitive customization interface that enables users to personalize their chatbots with unique personalities and business-specific knowledge."
    ]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="card-hover cursor-pointer">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
                </DialogHeader>
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full rounded-lg object-cover aspect-video"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="mt-6 space-y-2">
                  {project.details.map((detail, index) => (
                    <p key={index} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
