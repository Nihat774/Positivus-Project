import Slider from "../../components/Comments"

function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-20">
       <div className="flex xl:flex-row flex-col gap-5 xl:gap-10 items-center">
        <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
          Testimonials
        </p>
        <p className="w-full xl:w-[31vw] xl:text-start text-center sm:text-lg md:text-xl xl:text-lg">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className="xl:h-[625px] h-fit bg-deepgray rounded-[45px] ">
        <Slider />
      </div>
    </section>
  )
}

export default TestimonialsSection
