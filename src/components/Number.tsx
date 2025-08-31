const Number = ({ number }: { number: number }) => {
  return (
    <figure className="flex items-center justify-center flex-col">
      <div className="h-20 border-l border-slate-300"></div>
      <p className="bg-white border border-slate-300 w-14 h-14 text-center content-center rounded-full text-desktop-5 text-slate-600">
        {number}
      </p>
    </figure>
  );
};
export default Number;
