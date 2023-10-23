function GlitchImageWrapper(props) {
  return (
    <div className=" relative flex h-[25vw] w-[25vw] sm:h-[20vw] sm:w-[20vw] md:h-[15vw] md:w-[15vw] lg:h-[15vw] lg:w-[15vw] xl:h-[12vw] xl:w-[12vw] ">
      {...props.children}
    </div>
  );
}

export default GlitchImageWrapper;
