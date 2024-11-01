import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function RoleInfo() {
  const roles = [
    {
      name: "Brimstone",
      role: "Controller",
      image:
        "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495039/brimstone_nvak8z.webp",
    },
    {
      name: "Phoenix",
      role: "Duelist",
      image:
        "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495793/phoenix_u0prmy.webp",
    },
    {
      name: "Sage",
      role: "Sentinel",
      image:
        "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495842/Sage_m7xazw.webp",
    },
    {
      name: "Sova",
      role: "Initiator",
      image:
        "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495891/Sova_yxp6np.webp",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Header />
      <main>
        <div
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1728972095/Valorant_cqsvrm.png')`,
          }}
        >
          <div className="container mx-auto px-4 py-8">
            <h1 className="font-valorant mb-12 text-5xl text-white tracking-wider font-bold ml-12">
              ROLES
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((agent) => (
                <Link
                  key={agent.name}
                  href={`/agents/${agent.name.toLowerCase()}`}
                >
                  <Card className="group relative h-[500px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-black/10 backdrop-blur-sm border-0">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${agent.image})`,
                      }}
                    />
                    <div className="absolute bottom-0 w-full p-4 text-white">
                      <h2 className="text-2xl font-bold mb-2">{agent.role}</h2>
                      <p className="text-lg text-gray-300">{agent.name}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
