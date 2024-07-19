
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// export default function Component() {
//   return (
//     <div className="flex min-h-screen flex-col bg-background">
//       <header className="flex items-center justify-between border-b bg-card px-4 py-3 md:px-6 md:py-4">
//         <Link href="#" className="flex items-center gap-2 text-lg font-bold" prefetch={false}>
//           <PenIcon className="h-6 w-6" />
//           Chatter
//         </Link>
//         <div className="flex items-center gap-4">
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Explore
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
//             Write
//           </Link>
//           <Button variant="secondary" size="sm">
//             Sign In
//           </Button>
//           <Button size="sm">Sign Up</Button>
//         </div>
//       </header>
//       <main className="container mx-auto my-12 px-4 md:my-16 md:px-6 lg:my-20">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <Card className="group">
//             <Link href="#" prefetch={false}>
//               <CardContent>
//                 <div className="relative h-48 w-full overflow-hidden rounded-md">
//                   <img
//                     src="/placeholder.svg"
//                     alt="Blog Post Image"
//                     width={340}
//                     height={192}
//                     className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="mt-4 space-y-2">
//                   <h3 className="text-lg font-semibold text-card-foreground">Mastering Markdown: A Beginner's Guide</h3>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Discover the power of Markdown and how it can streamline your content creation process. In this
//                     comprehensive guide, we'll cover the basics of Markdown syntax and explore advanced techniques to
//                     elevate your writing.
//                   </p>
//                 </div>
//               </CardContent>
//             </Link>
//             <CardFooter className="mt-4 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>JD</AvatarFallback>
//                 </Avatar>
//                 <div className="text-sm text-muted-foreground">
//                   <div className="font-medium">John Doe</div>
//                   <div>May 15, 2023</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button variant="ghost" size="icon">
//                   <HeartIcon className="h-5 w-5" />
//                   <span className="sr-only">Like</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <MessageCircleIcon className="h-5 w-5" />
//                   <span className="sr-only">Comment</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <ShareIcon className="h-5 w-5" />
//                   <span className="sr-only">Share</span>
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//           <Card className="group">
//             <Link href="#" prefetch={false}>
//               <CardContent>
//                 <div className="relative h-48 w-full overflow-hidden rounded-md">
//                   <img
//                     src="/placeholder.svg"
//                     alt="Blog Post Image"
//                     width={340}
//                     height={192}
//                     className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="mt-4 space-y-2">
//                   <h3 className="text-lg font-semibold text-card-foreground">
//                     Unleash Your Creativity: Tips for Effective Blogging
//                   </h3>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Discover the secrets to crafting engaging and impactful blog posts that captivate your audience. In
//                     this article, we'll share practical tips and strategies to help you become a more effective blogger
//                     and grow your online presence.
//                   </p>
//                 </div>
//               </CardContent>
//             </Link>
//             <CardFooter className="mt-4 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>SA</AvatarFallback>
//                 </Avatar>
//                 <div className="text-sm text-muted-foreground">
//                   <div className="font-medium">Sarah Anderson</div>
//                   <div>June 1, 2023</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button variant="ghost" size="icon">
//                   <HeartIcon className="h-5 w-5" />
//                   <span className="sr-only">Like</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <MessageCircleIcon className="h-5 w-5" />
//                   <span className="sr-only">Comment</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <ShareIcon className="h-5 w-5" />
//                   <span className="sr-only">Share</span>
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//           <Card className="group">
//             <Link href="#" prefetch={false}>
//               <CardContent>
//                 <div className="relative h-48 w-full overflow-hidden rounded-md">
//                   <img
//                     src="/placeholder.svg"
//                     alt="Blog Post Image"
//                     width={340}
//                     height={192}
//                     className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="mt-4 space-y-2">
//                   <h3 className="text-lg font-semibold text-card-foreground">
//                     Embracing the Power of Video: Elevating Your Content
//                   </h3>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Discover how incorporating video content can take your blogging to new heights. In this guide, we'll
//                     explore practical tips and techniques to create engaging video content that captivates your audience
//                     and drives meaningful engagement.
//                   </p>
//                 </div>
//               </CardContent>
//             </Link>
//             <CardFooter className="mt-4 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/placeholder-user.jpg" />
//                   <AvatarFallback>MG</AvatarFallback>
//                 </Avatar>
//                 <div className="text-sm text-muted-foreground">
//                   <div className="font-medium">Maria Gonzalez</div>
//                   <div>June 15, 2023</div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button variant="ghost" size="icon">
//                   <HeartIcon className="h-5 w-5" />
//                   <span className="sr-only">Like</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <MessageCircleIcon className="h-5 w-5" />
//                   <span className="sr-only">Comment</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <ShareIcon className="h-5 w-5" />
//                   <span className="sr-only">Share</span>
//                 </Button>
//               </div>
//             </CardFooter>
//           </Card>
//         </div>
//       </main>
//       <footer className="border-t bg-card px-4 py-6 text-center text-sm text-muted-foreground md:px-6 md:py-8">
//         <div className="container mx-auto">&copy; 2023 Chatter. All rights reserved.</div>
//       </footer>
//     </div>
//   )
// }

// function HeartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//     </svg>
//   )
// }


// function MessageCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
//     </svg>
//   )
// }


// function PenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//     </svg>
//   )
// }


// function ShareIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
//       <polyline points="16 6 12 2 8 6" />
//       <line x1="12" x2="12" y1="2" y2="15" />
//     </svg>
//   )
// }


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }