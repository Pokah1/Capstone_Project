// cumentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// export default function Component() {
//   return (
//     <div className="flex min-h-screen flex-col bg-background text-foreground">
//       <header className="bg-card py-4 shadow-sm">
//         <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
//           <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
//             <PenIcon className="h-6 w-6" />
//             <span>Chatter</span>
//           </Link>
//           <div className="flex items-center gap-4">
//             <Link
//               href="#"
//               className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
//               prefetch={false}
//             >
//               Write
//             </Link>
//             <Button variant="ghost" size="icon">
//               <UserIcon className="h-5 w-5" />
//               <span className="sr-only">Profile</span>
//             </Button>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto flex-1 px-4 py-8 md:px-6 md:py-12">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//           <div className="col-span-2 space-y-8">
//             <article className="rounded-md bg-card p-6 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <Avatar className="h-10 w-10 border">
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <p className="text-sm font-medium">John Doe</p>
//                     <p className="text-xs text-muted-foreground">@johndoe</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Button variant="ghost" size="icon">
//                     <HeartIcon className="h-5 w-5" />
//                     <span className="sr-only">Like</span>
//                   </Button>
//                   <Button variant="ghost" size="icon">
//                     <MessageCircleIcon className="h-5 w-5" />
//                     <span className="sr-only">Comment</span>
//                   </Button>
//                   <Button variant="ghost" size="icon">
//                     <ShareIcon className="h-5 w-5" />
//                     <span className="sr-only">Share</span>
//                   </Button>
//                 </div>
//               </div>
//               <div className="prose mt-6">
//                 <h1>The Art of Storytelling: Crafting Captivating Narratives</h1>
//                 <img
//                   src="/placeholder.svg"
//                   alt="Story Image"
//                   width={800}
//                   height={450}
//                   className="rounded-md object-cover"
//                 />
//                 <p>
//                   In the ever-evolving landscape of content creation, the art of storytelling has emerged as a powerful
//                   tool to engage and captivate audiences. Whether you're a seasoned writer or a budding creative,
//                   mastering the art of crafting captivating narratives can be the key to unlocking your true potential
//                   as a storyteller.
//                 </p>
//                 <p>
//                   In this article, we'll explore the fundamental elements of storytelling, delve into the strategies and
//                   techniques that can elevate your writing, and provide practical tips to help you harness the magic of
//                   storytelling in your own content.
//                 </p>
//                 <h2>The Foundations of Storytelling</h2>
//                 <p>
//                   At the heart of every great story lies a well-crafted narrative that resonates with the reader on an
//                   emotional level. Effective storytelling is not just about recounting a series of events; it's about
//                   creating a compelling journey that captivates the audience and leaves a lasting impression.
//                 </p>
//                 <p>
//                   The foundation of storytelling rests on three key pillars: character, conflict, and resolution. By
//                   weaving these elements together seamlessly, you can craft narratives that draw readers in and keep
//                   them engaged from start to finish.
//                 </p>
//                 <h2>Crafting Compelling Characters</h2>
//                 <p>
//                   The lifeblood of any great story is its characters. Readers connect with stories through the
//                   characters they encounter, and it's your job as a writer to bring these characters to life in a way
//                   that resonates with your audience.
//                 </p>
//                 <p>
//                   Develop your characters with depth and complexity, giving them unique personalities, backstories, and
//                   motivations. Ensure that your characters are relatable, flawed, and dynamic, allowing them to evolve
//                   and grow throughout the narrative.
//                 </p>
//                 <h2>Navigating Conflict and Tension</h2>
//                 <p>
//                   Conflict is the driving force that propels a story forward. It's the obstacle or challenge that your
//                   characters must overcome, and it's what keeps readers engaged and invested in the outcome.
//                 </p>
//                 <p>
//                   Introduce meaningful conflicts that challenge your characters and push them to their limits. Explore
//                   the emotional and psychological impact of these conflicts, and use them to reveal deeper truths about
//                   your characters and the themes of your story.
//                 </p>
//                 <h2>Crafting a Satisfying Resolution</h2>
//                 <p>
//                   The resolution of a story is the culmination of the journey you've taken your readers on. It's the
//                   moment where the conflict is resolved, and your characters find a sense of closure or transformation.
//                 </p>
//                 <p>
//                   Craft a resolution that is both satisfying and meaningful, one that leaves your readers with a sense
//                   of closure and a deeper understanding of the themes and messages you've woven throughout your
//                   narrative.
//                 </p>
//                 <h2>Conclusion</h2>
//                 <p>
//                   Storytelling is a powerful tool that can captivate and inspire audiences. By mastering the art of
//                   crafting compelling narratives, you can elevate your content and connect with your readers on a deeper
//                   level.
//                 </p>
//                 <p>
//                   Remember, the journey of storytelling is an ever-evolving one, and the more you practice and refine
//                   your craft, the more you'll be able to create content that truly resonates with your audience. So,
//                   embrace the power of storytelling and let your creative voice shine through.
//                 </p>
//               </div>
//             </article>
//             <article className="rounded-md bg-card p-6 shadow-sm">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <Avatar className="h-10 w-10 border">
//                     <AvatarImage src="/placeholder-user.jpg" />
//                     <AvatarFallback>JD</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <p className="text-sm font-medium">Jane Doe</p>
//                     <p className="text-xs text-muted-foreground">@janedoe</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Button variant="ghost" size="icon">
//                     <HeartIcon className="h-5 w-5" />
//                     <span className="sr-only">Like</span>
//                   </Button>
//                   <Button variant="ghost" size="icon">
//                     <MessageCircleIcon className="h-5 w-5" />
//                     <span className="sr-only">Comment</span>
//                   </Button>
//                   <Button variant="ghost" size="icon">
//                     <ShareIcon className="h-5 w-5" />
//                     <span className="sr-only">Share</span>
//                   </Button>
//                 </div>
//               </div>
//               <div className="prose mt-6">
//                 <h1>Unlocking the Power of Markdown: A Guide for Bloggers</h1>
//                 <img
//                   src="/placeholder.svg"
//                   alt="Markdown Image"
//                   width={800}
//                   height={450}
//                   className="rounded-md object-cover"
//                 />
//                 <p>
//                   In the ever-evolving landscape of content creation, the art of storytelling has emerged as a powerful
//                   tool to engage and captivate audiences. Whether you're a seasoned writer or a budding creative,
//                   mastering the art of crafting captivating narratives can be the key to unlocking your true potential
//                   as a storyteller.
//                 </p>
//                 <p>
//                   In this article, we'll explore the fundamental elements of storytelling, delve into the strategies and
//                   techniques that can elevate your writing, and provide practical tips to help you harness the magic of
//                   storytelling in your own content.
//                 </p>
//                 <h2>The Power of Markdown</h2>
//                 <p>
//                   Markdown is a lightweight markup language that has become increasingly popular among bloggers and
//                   content creators. Its simplicity and flexibility make it an attractive choice for those who want to
//                   focus on the content rather than the formatting.
//                 </p>
//                 <p>
//                   Markdown allows you to easily format your text, add headings, create lists, and even insert images and
//                   links without the need for complex HTML or rich text editors. This makes it an ideal choice for
//                   bloggers who want to streamline their writing and publishing process.
//                 </p>
//                 <h2>Mastering Markdown Syntax</h2>
//                 <p>
//                   To get started with Markdown, you'll need to familiarize yourself with the basic syntax. Here are some
//                   of the most common Markdown elements and how to use them:
//                 </p>
//                 <ul>
//                   <li>Headings: Use # for h1, ## for h2, and so on.</li>
//                   <li>Paragraphs: Simply type your text, and Markdown will handle the formatting.</li>
//                   <li>Lists: Use - or * for unordered lists, and 1. for ordered lists.</li>
//                   <li>Links: Enclose the link text in [] and the URL in ().</li>
//                   <li>Images: Use the same syntax as links, but start with an exclamation mark (!).</li>
//                   <li>Emphasis: Use * or _ for italics, and ** or __ for bold.</li>
//                 </ul>
//                 <p>
//                   By mastering these basic Markdown elements, you'll be able to create well-formatted and visually
//                   appealing blog posts with ease.
//                 </p>
//                 <h2>Integrating Markdown into Your Workflow</h2>
//                 <p>
//                   One of the great things about Markdown is that it can be integrated into a variety of content
//                   management systems and blogging platforms. Many popular platforms, such as Chatter, support Markdown
//                   natively, allowing you to write and publish your content seamlessly.
//                 </p>
//                 <p>
//                   If you're using a platform that doesn't have built-in Markdown support, you can still take advantage
//                   of it by using a Markdown editor or converter. These tools allow you to write your content in Markdown
//                   and then convert it to HTML or other formats for publishing.
//                 </p>
//                 <h2>Conclusion</h2>
//                 <p>
//                   Mastering Markdown can be a game-changer for bloggers and content creators. Its simplicity,
//                   flexibility, and widespread support make it an invaluable tool for streamlining your writing and
//                   publishing process.
//                 </p>
//                 <p>
//                   By embracing Markdown, you can focus on crafting compelling content without getting bogged down in the
//                   technicalities of formatting. So, why not give it a try and unlock the power of Markdown in your own
//                   blogging journey?
//                 </p>
//               </div>
//             </article>
//           </div>
//           <div className="space-y-8">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Featured Posts</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid gap-4">
//                   <Link
//                     href="#"
//                     className="flex items-center gap-4 rounded-md bg-muted/20 p-4 hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src="/placeholder.svg"
//                         alt="Featured Post"
//                         width={80}
//                         height={80}
//                         className="rounded-md object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-medium">Unlocking the Power of Markdown: A Guide for Bloggers</h3>
//                       <p className="text-xs text-muted-foreground">
//                         Explore the benefits of using Markdown for your blog.
//                       </p>
//                     </div>
//                   </Link>
//                   <Link
//                     href="#"
//                     className="flex items-center gap-4 rounded-md bg-muted/20 p-4 hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src="/placeholder.svg"
//                         alt="Featured Post"
//                         width={80}
//                         height={80}
//                         className="rounded-md object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-medium">The Art of Storytelling: Crafting Captivating Narratives</h3>
//                       <p className="text-xs text-muted-foreground">
//                         Learn how to create engaging stories that captivate your audience.
//                       </p>
//                     </div>
//                   </Link>
//                   <Link
//                     href="#"
//                     className="flex items-center gap-4 rounded-md bg-muted/20 p-4 hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     <div className="flex-shrink-0">
//                       <img
//                         src="/placeholder.svg"
//                         alt="Featured Post"
//                         width={80}
//                         height={80}
//                         className="rounded-md object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-medium">
//                         Mastering SEO: Strategies for Driving Traffic to Your Blog
//                       </h3>
//                       <p className="text-xs text-muted-foreground">
//                         Optimize your content for better search engine visibility.
//                       </p>
//                     </div>
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Popular Tags</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-3 gap-2">
//                   <Link
//                     href="#"
//                     className="rounded-md bg-muted/20 px-3 py-1 text-xs font-medium hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     Storytelling
//                   </Link>
//                   <Link
//                     href="#"
//                     className="rounded-md bg-muted/20 px-3 py-1 text-xs font-medium hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     Markdown
//                   </Link>
//                   <Link
//                     href="#"
//                     className="rounded-md bg-muted/20 px-3 py-1 text-xs font-medium hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     Content Creation
//                   </Link>
//                   <Link
//                     href="#"
//                     className="rounded-md bg-muted/20 px-3 py-1 text-xs font-medium hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     SEO
//                   </Link>
//                   <Link
//                     href="#"
//                     className="rounded-md bg-muted/20 px-3 py-1 text-xs font-medium hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     Blogging
//                   </Link>
//                   <Link
//                     href="#"
//                     className="rounded-md bg-muted/20 px-3 py-1 text-xs font-medium hover:bg-muted/50"
//                     prefetch={false}
//                   >
//                     Writing
//                   </Link>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </main>
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


// function UserIcon(props) {
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
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
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