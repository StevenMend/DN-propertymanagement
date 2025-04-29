// import Image from "next/image";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export function PropertyGallery() {
//   return (
//     <section id="gallery" className="w-full py-20 md:py-32">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2 max-w-3xl">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">PROPERTY GALLERY</h2>
//             <p className="text-zinc-400 md:text-xl/relaxed">
//               Examples of properties we manage and transformations we have made.
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto py-12">
//           <Tabs defaultValue="all" className="w-full">
//             <TabsList className="w-full max-w-md mx-auto bg-zinc-900/50 border border-white/5 rounded-full p-1">
//               <TabsTrigger
//                 value="all"
//                 className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black"
//               >
//                 All
//               </TabsTrigger>
//               <TabsTrigger
//                 value="houses"
//                 className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black"
//               >
//                 Houses
//               </TabsTrigger>
//               <TabsTrigger
//                 value="apartments"
//                 className="rounded-full text-white data-[state=active]:bg-white data-[state=active]:text-black"
//               >
//                 Apartments
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="all">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//                 {Array.from({ length: 6 }).map((_, i) => (
//                   <div key={i} className="group relative">
//                     <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="relative overflow-hidden rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5">
//                       <Image
//                         src={`/opulent-living-room.png?height=300&width=400&query=luxury ${i % 2 === 0 ? "house" : "apartment"} property management`}
//                         alt={`Property ${i + 1}`}
//                         width={400}
//                         height={300}
//                         className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="p-4">
//                         <h3 className="text-lg font-medium text-white">
//                           Luxury {i % 2 === 0 ? "House" : "Apartment"} {i + 1}
//                         </h3>
//                         <p className="text-zinc-400 text-sm mt-1">
//                           Complete management with {i % 2 === 0 ? "Elite" : "Signature"} service
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//             <TabsContent value="houses">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//                 {(() => {
//                   const houseImages = [
//                     "/house2.JPG",
//                     "/catalinas.JPG",
//                     "/beachhome.JPG",
//                   ];
//                   return houseImages.map((img, i) => (
//                     <div key={i} className="group relative">
//                       <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="relative overflow-hidden rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5">
//                         <Image
//                           src={img}
//                           alt={`House ${i + 1}`}
//                           width={400}
//                           height={300}
//                           className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                         />
//                         <div className="p-4">
//                           <h3 className="text-lg font-medium text-white">Luxury House {i + 1}</h3>
//                           <p className="text-zinc-400 text-sm mt-1">Complete management with Elite service</p>
//                         </div>
//                       </div>
//                     </div>
//                   ));
//                 })()}
//               </div>
//             </TabsContent>
//             <TabsContent value="apartments">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//                 {Array.from({ length: 3 }).map((_, i) => (
//                   <div key={i} className="group relative">
//                     <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-600/10 to-zinc-800/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="relative overflow-hidden rounded-xl bg-zinc-900/30 backdrop-blur-sm border border-white/5">
//                       <Image
//                         src={`/placeholder.svg?height=300&width=400&query=luxury apartment property management`}
//                         alt={`Apartment ${i + 1}`}
//                         width={400}
//                         height={300}
//                         className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="p-4">
//                         <h3 className="text-lg font-medium text-white">Luxury Apartment {i + 1}</h3>
//                         <p className="text-zinc-400 text-sm mt-1">Complete management with Signature service</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// }