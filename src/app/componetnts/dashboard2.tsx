
// import Link from "next/link"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// export default function Component() {
//   return (
//     <div className="flex min-h-screen flex-col bg-background">
//       <header className="border-b border-muted">
//         <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
//           <Link href="#" className="text-2xl font-bold" prefetch={false}>
//             Chatter
//           </Link>
//           <div className="flex items-center gap-4">
//             <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
//               Blog
//             </Link>
//             <Link href="#" className="text-primary hover:text-primary-foreground" prefetch={false}>
//               New Post
//             </Link>
//             <Avatar>
//               <AvatarImage src="/placeholder-user.jpg" />
//               <AvatarFallback>AC</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto flex-1 px-4 py-12 md:px-6 md:py-16">
//         <div className="mx-auto max-w-3xl">
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-4xl font-bold tracking-tight">Welcome to Chatter</h1>
//               <p className="mt-2 text-muted-foreground">A blogging platform for text-focused audiences.</p>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Create a new post</CardTitle>
//                   <CardDescription>Use our rich text editor to craft your blog post.</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Link
//                     href="#"
//                     className="flex h-full w-full items-center justify-center rounded-md border border-muted hover:border-foreground"
//                     prefetch={false}
//                   >
//                     <PlusIcon className="h-6 w-6 text-muted-foreground" />
//                   </Link>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Browse recent posts</CardTitle>
//                   <CardDescription>Check out the latest blog posts from our community.</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Link
//                     href="#"
//                     className="flex h-full w-full items-center justify-center rounded-md border border-muted hover:border-foreground"
//                     prefetch={false}
//                   >
//                     <BookOpenIcon className="h-6 w-6 text-muted-foreground" />
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold">Featured Posts</h2>
//               <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Mastering Markdown for Blogging</CardTitle>
//                     <CardDescription>Learn how to use Markdown to create beautiful blog posts.</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <img
//                       src="/placeholder.svg"
//                       alt="Markdown"
//                       width={300}
//                       height={200}
//                       className="rounded-md object-cover"
//                     />
//                   </CardContent>
//                   <CardFooter>
//                     <Link href="#" className="text-primary hover:text-primary-foreground" prefetch={false}>
//                       Read more
//                     </Link>
//                   </CardFooter>
//                 </Card>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Optimizing Images for the Web</CardTitle>
//                     <CardDescription>Tips and tricks to improve the performance of your blog.</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <img
//                       src="/placeholder.svg"
//                       alt="Image optimization"
//                       width={300}
//                       height={200}
//                       className="rounded-md object-cover"
//                     />
//                   </CardContent>
//                   <CardFooter>
//                     <Link href="#" className="text-primary hover:text-primary-foreground" prefetch={false}>
//                       Read more
//                     </Link>
//                   </CardFooter>
//                 </Card>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Building a Successful Blog</CardTitle>
//                     <CardDescription>Strategies to grow your audience and monetize your blog.</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <img
//                       src="/placeholder.svg"
//                       alt="Successful blogging"
//                       width={300}
//                       height={200}
//                       className="rounded-md object-cover"
//                     />
//                   </CardContent>
//                   <CardFooter>
//                     <Link href="#" className="text-primary hover:text-primary-foreground" prefetch={false}>
//                       Read more
//                     </Link>
//                   </CardFooter>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <footer className="border-t border-muted">
//         <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
//           <p className="text-sm text-muted-foreground">&copy; 2023 Chatter. All rights reserved.</p>
//           <div className="flex items-center gap-4">
//             <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
//               About
//             </Link>
//             <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
//               Contact
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function BookOpenIcon(props) {
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
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>
//   )
// }


// function PlusIcon(props) {
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
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
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