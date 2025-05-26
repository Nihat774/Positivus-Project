import CustomSlider from "../../components/Comments"


function TestimonialsSection() {
  return (
    <section className="flex flex-col gap-8">
       <div className="flex md:flex-row flex-col gap-5 md:gap-10 items-center">
        <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
          Testimonials
        </p>
        <p className="w-full md:w-[31vw] md:text-start text-center">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className="md:h-[625px] h-fit bg-deepgray rounded-[45px] ">
        <CustomSlider />
      </div>
    </section>
  )
}

export default TestimonialsSection
