
export default function Separator({ children, ...props }) {

  return (
    <>
      <div {...props} className="select-none text-lg bg-purple-800 font-semibold text-white w-full flex justify-center px-3 py-3 border-b-8 border-purple-300 rounded-md">{children}</div>
    </>
  );
}