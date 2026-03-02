function Post({ number, name, description }) {
  return (
    <div className="post  border-4 border-teal-600 m-6.25px mb-10  ">
      <h2 className="text-black font-bold text-[30px] p-2">{number}</h2>
      <p className="text-black font-bold text-[15px] p-2 ">
        {name}
        <hr className="m-5" />
      </p>
      <p className="text-black font-bold text-[15px] p-2">{description}</p>
    </div>
  );
}

export default Post;
