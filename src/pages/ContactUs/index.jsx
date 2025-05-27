function ContactUsSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-14">
      <div className="flex md:flex-row flex-col gap-8 md:gap-10 items-center">
        <p className="font-semibold my-green p-1 rounded-[7px] text-2xl">
          Contact Us
        </p>
        <p className="w-full md:w-[23vw] text-center md:text-start">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="bg-white md:bg-[#F3F3F3] h-fit md:h-[753px] flex md:gap-0 gap-5 justify-between md:py-[60px]  md:px-0 md:pl-[100px] rounded-[45px] w-full">
        <form className="flex flex-col gap-8 w-full">
          <div className="w-full md:w-[556px] flex flex-col gap-6 bg-[#F3F3F3] py-10 px-8 rounded-[45px]">
            
            <div className="flex md:justify-start gap-0 justify-between md:gap-6">
              <label className="flex items-center gap-1">
                <input type="radio" name="example" />
                <span className="custom-radio"></span>
                Say Hi
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="example" />
                <span className="custom-radio"></span>
                Get a Quote
              </label>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border rounded-[14px] py-[14px] md:px-[30px] px-5 bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email*</label>
              <input
                required
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border rounded-[14px] py-[14px] md:px-[30px] px-5 bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="msg">Message*</label>
              <textarea
                id="msg"
                placeholder="Message"
                required
                className="outline-0 w-full h-[130px] md:h-[190px] border rounded-[14px] py-[14px] md:px-[30px] px-5 bg-white resize-none"
              ></textarea>
            </div>
          </div>
          <button className="bg-black text-white rounded-[14px] w-full py-5 flex justify-center cursor-pointer">
            Send Message
          </button>
        </form>

        <div className="md:block hidden">
          <img src="/contact-image.png" alt="contact-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
