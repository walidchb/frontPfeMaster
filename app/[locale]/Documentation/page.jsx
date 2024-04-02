"use client";
// import TaskDetailsPage from "@/components/DescriptionTask";
import DocumentationComponent from "@/components/DocumentationComponent";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";

// import KanbanBoard from "@/components/Kanban";
import NavBar from "@/components/NavBar";
import React from "react";

const Documentation = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("To");
  return (
    <div>
      <NavBar />
      <DocumentationComponent scrollTo={scrollTo} />
      <Footer />
    </div>
  );
};

export default Documentation;
