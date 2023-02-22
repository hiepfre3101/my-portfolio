const Hero = () => {
  return (
    <div className="w-full mt-[100px]">
      <p className="text-primary tracking-widest">Hi, my name is</p>
      <span className="text-textWhiter text-[4rem] font-bold">HIEP</span>
      <p className="text-textWhite text-[4rem] font-bold">
        I am Front-end Developer.
      </p>
      <p className="text-textWhite text-[1rem] mb-4">
        Now, I am studying Web developer in FPT Polytechnic. 
       <p>
          Currently, I am
          looking for a career oppotunity.
       </p>
      </p>
      <button className="border p-2 rounded-md text-primary border-primary hover:bg-primaryOpc1 hover:ease-in-out hover:duration-300">
        <span className="text-md tracking-widest">My Résumé</span>
      </button>
    </div>
  );
};

export default Hero;
