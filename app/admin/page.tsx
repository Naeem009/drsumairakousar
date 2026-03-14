 "use client";

 import { useEffect, useState } from "react";
 import { useRouter } from "next/navigation";

 const sections = [
   {
     id: "courses",
     title: "Courses",
     description: "Upload or update course outlines, lecture PDFs, and video links.",
     placeholder: "e.g. BS Biochemistry – Metabolism Module",
   },
   {
     id: "blogs",
     title: "Blogs & Articles",
     description: "Post latest research articles, molecular techniques, and biotechnology trends.",
     placeholder: "e.g. CRISPR in clinical diagnostics",
   },
   {
     id: "mcqs",
     title: "MCQs Bank",
     description: "Add new MCQs sets for genetics, biochemistry, molecular biology, and more.",
     placeholder: "e.g. 100 MCQs – Enzyme Kinetics",
   },
   {
     id: "resources",
     title: "Downloadable Resources",
     description: "Upload practical manuals, lab protocols, PPTs, and other files.",
     placeholder: "e.g. DNA Extraction Protocol (PDF)",
   },
 ];

 export default function AdminDashboardPage() {
   const router = useRouter();
   const [ready, setReady] = useState(false);

   useEffect(() => {
     const token = typeof window !== "undefined" ? window.localStorage.getItem("admin-auth") : null;
     if (!token) {
       router.replace("/admin/login");
       return;
     }
     setReady(true);
   }, [router]);

   if (!ready) {
     return (
       <div className="bg-slate-50">
         <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
           <p className="text-center text-slate-500">Checking admin access…</p>
         </div>
       </div>
     );
   }

   return (
     <div className="bg-slate-50">
       <div className="bg-primary py-16 text-white">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <h1 className="font-display text-4xl font-bold">Admin Content Manager</h1>
           <p className="mt-2 text-slate-300">
             Upload courses, blogs, articles, MCQs, and downloadable content for your students.
           </p>
         </div>
       </div>

       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
         <div className="grid gap-8 lg:grid-cols-2">
           {sections.map((section) => (
             <section key={section.id} className="card">
               <h2 className="font-display text-xl font-bold text-primary">{section.title}</h2>
               <p className="mt-2 text-slate-600">{section.description}</p>
               <form
                 className="mt-4 space-y-3"
                 onSubmit={(e) => {
                   e.preventDefault();
                   alert(`This demo form does not yet save data.\nConnect it to a backend or storage service to store ${section.title}.`);
                 }}
               >
                 <div>
                   <label className="block text-sm font-medium text-slate-700">
                     Title / Name
                   </label>
                   <input
                     type="text"
                     className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:ring-1 focus:ring-accent"
                     placeholder={section.placeholder}
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700">
                     Short Description
                   </label>
                   <textarea
                     rows={3}
                     className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:ring-1 focus:ring-accent"
                     placeholder="Describe what students will get in this content."
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700">
                     File (PDF, PPT, DOCX, etc.)
                   </label>
                   <input
                     type="file"
                     className="mt-1 w-full cursor-pointer rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-accent file:px-3 file:py-1 file:text-sm file:font-semibold file:text-white hover:border-accent"
                   />
                   <p className="mt-1 text-xs text-slate-500">
                     This is a visual placeholder. Connect it to storage (e.g. Firebase, Supabase, or your server) to
                     actually upload files.
                   </p>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700">
                     Optional Download URL (Google Drive, YouTube, etc.)
                   </label>
                   <input
                     type="url"
                     className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:ring-1 focus:ring-accent"
                     placeholder="https://drive.google.com/..."
                   />
                 </div>
                 <button type="submit" className="btn-primary">
                   Save (demo)
                 </button>
               </form>
             </section>
           ))}
         </div>

         <p className="mt-10 text-sm text-slate-500">
           Note: This admin area currently works as a front-end demo only. To make uploads real, connect these forms
           to a backend API and a database or file storage (e.g. Supabase, Firebase, or a custom Node/Express server).
         </p>
       </div>
     </div>
   );
 }

