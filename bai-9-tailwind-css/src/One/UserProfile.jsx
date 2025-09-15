function UserProfile() {
  return (
    <>
      <div className="flex w-[36rem] gap-x-4 rounded-lg bg-white p-12">
        <img
          src="https://i.pinimg.com/736x/64/d8/43/64d8437e21236d3750e5b7e877b8b54a.jpg"
          alt="ava"
          className="w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
        />
        <div className="space-y-7">
          <h1 className="text-3xl font-bold">Dai Phu</h1>
          <h2>ReactJS TailwindCSS</h2>
          <div>
            <p>Duy Tan University</p>
            <p>26/03/2002</p>
            <p>Student</p>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            nesciunt, consequatur aspernatur exercitationem animi vero
            consectetur dolorem impedit accusantium? Eveniet alias nostrum
            dolor! Molestias est commodi autem officia. Eos, laudantium?
          </p>
          <button>Show more</button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
