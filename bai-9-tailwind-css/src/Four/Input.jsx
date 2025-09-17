function Input({ title, placeholder, type }) {
  return (
    <>
      <div>
        <label className="block text-sm font-semibold" htmlFor="title">
          {title}
        </label>
        {type === "text" ? (
          <input
            id={title}
            placeholder={placeholder}
            className="mt-1 w-full rounded-md border-2 p-4 py-3"
          ></input>
        ) : (
          <textarea
            id={title}
            placeholder={placeholder}
            className="mt-1 w-full rounded-md border-2 p-4 py-3"
          ></textarea>
        )}
      </div>
    </>
  );
}

export default Input;
