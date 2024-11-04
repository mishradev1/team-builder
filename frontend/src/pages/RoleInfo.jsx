import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function RoleInfo() {
  const roles = [
    {
      name: "Brimstone",
      role: "Controller",
      image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495039/brimstone_nvak8z.webp",
      logo: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730498224/controller_sx0ijx.png"
    },
    {
      name: "Phoenix",
      role: "Duelist",
      image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495793/phoenix_u0prmy.webp",
      logo: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730498348/duelist_rpdhoh.png"
    },
    {
      name: "Sage",
      role: "Sentinel",
      image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495842/Sage_m7xazw.webp",
      logo: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730498047/sentinal_atssnv.png"
    },
    {
      name: "Sova",
      role: "Initiator",
      image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495891/Sova_yxp6np.webp",
      logo: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730497886/no-b-initiator_isgwqw.png"
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
                  to={`/roles/${agent.role.toLowerCase()}`}
                >
                  <Card className="group relative h-[500px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-black/10 backdrop-blur-sm border-rounded">
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black/50 rounded-full flex items-center justify-center border-red-600 border-2">
                        <img
                          src={agent.logo}
                          alt={`${agent.role} logo`}
                          width={150}
                          height={150}
                          className="object-contain rounded-full hover:scale-110 hover:shadow-xl transition-transform duration-300 bg-black/10 backdrop-blur-sm "
                        />
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
                      style={{
                        backgroundImage: `url(${agent.image})`,
                      }}
                    />
                    <div className="absolute bottom-0 w-full p-4 text-white bg-black/50">
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