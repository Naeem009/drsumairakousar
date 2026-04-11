"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site";

function extractGoogleDriveFileId(input: string): string | null {
  // Supports common share URL formats:
  // - https://drive.google.com/file/d/<FILE_ID>/view?...
  // - https://drive.google.com/uc?id=<FILE_ID>&export=download
  const url = input.trim();
  if (!url) return null;

  const fileIdFromFilePath = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1];
  if (fileIdFromFilePath) return fileIdFromFilePath;

  const fileIdFromUcParam = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1];
  if (fileIdFromUcParam) return fileIdFromUcParam;

  return null;
}

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

  // Paste your Google Drive folder links here (one per section).
  // Tip: open Drive -> right click your folder -> "Share" -> copy link.
  const driveUploadLinks: Record<string, string> = {
    courses: "PASTE_COURSES_GOOGLE_DRIVE_FOLDER_LINK_HERE",
    blogs: "PASTE_BLOGS_GOOGLE_DRIVE_FOLDER_LINK_HERE",
    mcqs: "PASTE_MCQS_GOOGLE_DRIVE_FOLDER_LINK_HERE",
    resources: "PASTE_RESOURCES_GOOGLE_DRIVE_FOLDER_LINK_HERE",
  };

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <div>
          <h1 className="font-display text-4xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-slate-300">
            Manage {SITE_NAME} ({SITE_DOMAIN}) content — courses, blogs, articles, MCQs, and downloadable resources for
            your students (mentorship by Dr. Sumaira Kousar). You can also edit and delete existing content.
          </p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("admin-auth");
              router.push("/admin/login");
            }}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
          >
            Logout
          </button>
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
                  const formData = new FormData(e.currentTarget);
                  const title = String(formData.get("title") ?? "");
                  const shortDescription = String(formData.get("shortDescription") ?? "");
                  const fileUrl = String(formData.get("downloadUrl") ?? "");

                  const fileId = extractGoogleDriveFileId(fileUrl);
                  const generatedDownloadUrl = fileId
                    ? `https://drive.google.com/uc?export=download&id=${fileId}`
                    : null;

                  alert(
                    `Demo only (no backend saved yet).\n\n` +
                      `Next steps for '${section.title}':\n` +
                      `1) Upload the selected file to your Google Drive folder (button above).\n` +
                      `2) Copy the Google Drive share URL of the uploaded file.\n` +
                      `3) Paste it into 'Google Drive file share URL' and then submit.\n\n` +
                      `Generated payload (copy this into your CMS later):\n` +
                      JSON.stringify(
                        {
                          sectionId: section.id,
                          title,
                          shortDescription,
                          downloadUrl: fileUrl || null,
                          generatedDriveDownloadUrl: generatedDownloadUrl,
                        },
                        null,
                        2
                      )
                  );
                 }}
               >
                 <div>
                   <label className="block text-sm font-medium text-slate-700">
                     Title / Name
                   </label>
                   <input
                    name="title"
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
                    name="shortDescription"
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
                    name="file"
                     type="file"
                     className="mt-1 w-full cursor-pointer rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-accent file:px-3 file:py-1 file:text-sm file:font-semibold file:text-white hover:border-accent"
                   />
                   <p className="mt-1 text-xs text-slate-500">
                    Manual mode: upload the file yourself using the Google Drive button below. This file picker is
                    only for selecting the file name during your workflow.
                   </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={driveUploadLinks[section.id]}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      Upload to Google Drive
                    </a>
                    <span className="text-xs text-slate-500">
                      Use the folder link for '{section.title}'.
                    </span>
                  </div>
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700">
                    Google Drive file share URL (or any direct download URL)
                   </label>
                   <input
                    name="downloadUrl"
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

