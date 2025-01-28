import Navbar from "@/components/Navbar";
import HomeCarousel from "@/components/HomeCarousel";
import CoursesList from "@/components/CoursesList";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeCarousel />

      <main>
        <div className="container flex sm:flex-row flex-col py-6 sm:py-12 px-3 sm:p-0 mb-0 sm:mb-4">
          <div className="w-full sm:w-2/5 mb-3 sm:mb-0">
            <h1 className="text-3xl sm:text-5xl font-bold leading-[0.75] italic">All the skills you need in one place</h1>
          </div>
          <div className="w-full sm:w-3/5">
            Career progress isn`t always linear. So when your industry evolves or your plans change, edX is the education destination that works as hard as you. Explore thousands of job-relevant online courses that empower you to ramp up, reroute, or start fresh. We`ll be with you every step of the way.
          </div>
        </div>

        <CoursesList />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="container px-3 py-4 sm:py-6">
          &copy; Edusia 2023
        </div>
      </footer>
    </>
  );
}
