
const Square = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[50rem] aspect-square border border-n-2/10 rotate-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[35rem] aspect-square border border-n-2/10 rotate-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[20rem] aspect-square border border-n-2/10 rotate-0 -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[6rem] left-16 w-2 h-2 bg-n-6 border border-color-primary rotate-[46deg]"></div>
      <div className="absolute top-[20rem] right-[50px] w-2 h-2 bg-n-6 border border-color-primary rotate-[46deg]"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-n-6 border border-color-primary rotate-[20deg] "></div>
      <div className="absolute top-[10.6rem] right-[200px] w-3 h-3 bg-n-6 border border-color-primary rotate-[10deg]"></div>
      <div className="absolute top-[7rem] left-[300px] w-4 h-4 bg-n-6 border border-color-primary rotate-[20deg]"></div>
      <div className="absolute bottom-[7rem] left-[250px] w-4 h-4 bg-n-6 border border-color-primary rotate-[20deg]"></div>
      <div className="absolute top-[20.8rem] left-[200px] w-4 h-4 bg-n-6 border border-color-primary rotate-[20deg]"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-n-6 border border-color-primary rotate-[40deg]"></div>
      <div className="absolute top-[40.8rem] right-[100px] w-6 h-6 bg-n-6 border border-color-primary rotate-[50deg]"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">

      <Square />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
