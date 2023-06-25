
export default function Button({ children, ...props }) {

  return (
    <button {...props} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-150 mr-2" >
      {children}
    </button>
  );
}