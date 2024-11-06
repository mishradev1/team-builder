// import React from 'react'
// import Header from "@/components/Header"
// import { Card } from "@/components/ui/card"
// import { Shield, Eye, Users, Map, Zap, AlertTriangle, Crosshair, Timer } from 'lucide-react'
// import ValorantNav from '@/components/Nav'

// export default function ControllerPage() {
//   return (
//     <div className="min-h-screen flex flex-col text-white bg-white bg-opacity-40" 
//     // style={{
//     //   backgroundImage:
//     //     "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729529714/lobby_hmamhg.png')",
//     // }}
//     >
//       <Header />
//       <ValorantNav/>
//       <main className="flex-grow">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex items-center mb-8">
//             <img 
//               src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730498224/controller_sx0ijx.png" 
//               alt="Controller logo" 
//               className="w-24 h-24 mr-4"
//             />
//             <h1 className="font-valorant text-5xl text-white tracking-wider font-bold">CONTROLLER</h1>
//           </div>
          
//           <p className="text-xl mb-8">Controllers are the masters of battlefield manipulation, expertly slicing up dangerous territory to set their team up for success. These agents are the backbone of any well-coordinated team, providing crucial support through their ability to control sightlines, deny areas, and manipulate the flow of combat.</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             <Card className="bg-blue-800 bg-opacity-50 p-6 border-blue-500 border-2">
//               <h2 className="text-2xl font-bold mb-4 flex items-center"><Shield className="mr-2" /> Advantages</h2>
//               <ul className="list-disc list-inside">
//                 <li className="mb-2">Unparalleled area denial capabilities</li>
//                 <li className="mb-2">Expert smoke deployment for vision control</li>
//                 <li className="mb-2">Crucial team utility support</li>
//                 <li className="mb-2">Ability to reshape the battlefield</li>
//                 <li className="mb-2">Strong post-plant control</li>
//               </ul>
//             </Card>
            
//             <Card className="bg-blue-800 bg-opacity-50 p-6 border-blue-500 border-2">
//               <h2 className="text-2xl font-bold mb-4 flex items-center"><Crosshair className="mr-2" /> Use Cases</h2>
//               <ul className="list-disc list-inside">
//                 <li className="mb-2">Blocking off key sightlines during site executes</li>
//                 <li className="mb-2">Providing cover for team pushes and rotations</li>
//                 <li className="mb-2">Post-plant control and defuse denial</li>
//                 <li className="mb-2">Retake assistance and site control</li>
//                 <li className="mb-2">Creating one-way smokes for advantageous peeks</li>
//               </ul>
//             </Card>
//           </div>
          
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold mb-4">Key Controller Agents</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//               {[
//                 { name: "Brimstone", image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495039/brimstone_nvak8z.webp" },
//                 { name: "Viper", image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495039/viper_aqxmqx.webp" },
//                 { name: "Omen", image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495039/omen_aqxmqx.webp" },
//                 { name: "Astra", image: "https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730495039/astra_aqxmqx.webp" }
//               ].map((agent) => (
//                 <Card key={agent.name} className="bg-blue-800 bg-opacity-50 overflow-hidden">
//                   <img src={agent.image} alt={agent.name} className="w-full h-48 object-cover" />
//                   <div className="p-4">
//                     <h3 className="text-xl font-bold">{agent.name}</h3>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
          
//           <Card className="bg-blue-800 bg-opacity-50 p-6 mt-8 border-blue-500 border-2">
//             <h2 className="text-2xl font-bold mb-4 flex items-center"><Eye className="mr-2" /> SWOT Analysis</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 flex items-center"><Zap className="mr-2" /> Strengths</h3>
//                 <ul className="list-disc list-inside">
//                   <li>Unmatched map control capabilities</li>
//                   <li>Essential team support through utility</li>
//                   <li>Versatility in both attack and defense</li>
//                   <li>Ability to dictate the pace of the game</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 flex items-center"><AlertTriangle className="mr-2" /> Weaknesses</h3>
//                 <ul className="list-disc list-inside">
//                   <li>Limited direct combat abilities</li>
//                   <li>Heavy reliance on team coordination</li>
//                   <li>Vulnerability while deploying utility</li>
//                   <li>Potential for friendly fire with misplaced utility</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 flex items-center"><Users className="mr-2" /> Opportunities</h3>
//                 <ul className="list-disc list-inside">
//                   <li>Synergy with other roles for powerful combinations</li>
//                   <li>Strategic depth in gameplay and team compositions</li>
//                   <li>Potential to completely shut down enemy strategies</li>
//                   <li>Crucial in executing complex team plays</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 flex items-center"><Timer className="mr-2" /> Threats</h3>
//                 <ul className="list-disc list-inside">
//                   <li>Aggressive playstyles can disrupt setup time</li>
//                   <li>Utility-heavy enemy teams may counter smoke strategies</li>
//                   <li>Reliance on abilities can be exploited if predicted</li>
//                   <li>Risk of being outsmarted by adaptive opponents</li>
//                 </ul>
//               </div>
//             </div>
//           </Card>
          
//           <div className="mt-8">
//             <h2 className="text-3xl font-bold mb-4 flex items-center"><Map className="mr-2" /> Controller's Impact on the Battlefield</h2>
//             <p className="mb-4">
//               Controllers are the unsung heroes of Valorant, shaping the battlefield to their team's advantage. Their ability to deploy smokes, walls, and other vision-blocking utilities is crucial in executing strategies and denying information to the enemy team. A well-played Controller can single-handedly change the outcome of a round by creating safe paths for their team to move through or by cutting off crucial sightlines that the enemy relies on.
//             </p>
//             <p className="mb-4">
//               One of the most significant impacts a Controller has is during site executes and retakes. By strategically placing smokes, they can isolate angles and create safe spaces for their team to plant the spike or defuse it. This level of control over the battlefield often forces the enemy team to make difficult decisions, either pushing through smoke blindly or giving up advantageous positions.
//             </p>
//             <p className="mb-4">
//               Controllers also excel in post-plant situations. Their utility can delay enemy retakes, buying precious seconds for the spike to detonate. Moreover, their ability to refresh smokes or deploy new ones mid-round allows for dynamic play and adaptation to the enemy's strategies.
//             </p>
//             <p>
//               However, the true power of a Controller lies in their ability to enable their teammates. By creating space and denying information, Controllers allow Duelists to entry more safely, give Sentinels better positions to hold, and provide Initiators with the cover they need to gather information. In essence, a skilled Controller is the linchpin that holds a team's strategy together, facilitating smooth executions and providing the foundation for victory.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }