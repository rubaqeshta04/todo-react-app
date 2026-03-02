function Button({ name, children }) {
  return (
    <button className="bg-[#770071] text-white font-bold p-2 rounded-xl hover:bg-purple-400 hover:text-black">
      {name}
      {children}
    </button>
  );
}

export default Button;
