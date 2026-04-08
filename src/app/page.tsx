import HomeClient from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikola Pajović — Software Engineer",
  description: "4th year Software Engineering student building full-stack web and mobile experiences.",
};

export default function Home() {
  return (
    <>
      <HomeClient />
    </>
  );
}