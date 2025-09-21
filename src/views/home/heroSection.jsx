const HeroSection = () => {
  return (
    <div className="mx-2 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-[12px] text-[#41CB47] font-normal">
            Best way to learn from anywhere
          </span>
          <h2 className="text-[45px] md:text-[55px] lg:text-[65px] xl:text-[70px] font-medium leading-snug">
            Learn on your schedule from any device
          </h2>
          <p className="text-[14px]">
            Unlock the freedom to learn anytime, anywhere. Our e-learning
            platform offers flexible, self-paced courses that fit into your busy
            life—whether you're at home, at work, or on the go. Access
            high-quality content from your laptop, tablet, or phone, and take
            control of your learning journey with interactive lessons, expert
            instructors, and real-world skills. Start learning today—on your
            terms.
          </p>
        </div>
        <div className="flex gap-[20px]">
          <button className="py-3 px-[13px] bg-[#FE7558] text-white text-[12px] rounded-xl ">
            Start Learning
          </button>
          <button className="px-[11px] py-[13px] border-2 border-black text-[12px] rounded-xl ">
            Descover
          </button>
        </div>
      </div>
      <div>
        <div className="relative flex flex-col justify-end">
          <div className="bg-[#CEEBE4] w-[368px] h-[368px] absolute z-0 rounded-lg rotate-12"></div>
          <div className="bg-[#F8775B] w-[368px] h-[368px] absolute z-1 rounded-lg"></div>
          <div className="absolute z-1 w-[350px]">
            <img
              src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1757776499/73a9c03aadc019ba3468c832f506b15a70dbd6cb_d6jeqy.png"
              alt="promotion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
