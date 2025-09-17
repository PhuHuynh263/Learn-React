function Collections() {
  const tags = ["Profile", "New York", "Relax", "Person", "Fashion"];
  return (
    <>
      <div className="w-full rounded-lg bg-gray-300 p-16 shadow-lg">
        <h1 className="text-3xl font-bold">Popular Collections</h1>
        <div className="mt-6 space-x-2">
          {tags.map((item) => {
            return (
              <>
                <a className="mb-2 inline-block cursor-pointer rounded-lg bg-white p-4 hover:text-blue-400">
                  {item}
                </a>
              </>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-4">
            <div>
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video w-full rounded-2xl"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <img
                src="https://placewaifu.com/image/100"
                className="aspect-video w-full rounded-2xl"
              />
              <img
                src="https://placewaifu.com/image/300"
                className="aspect-video w-full rounded-2xl"
              />
              <img
                src="https://placewaifu.com/image/400"
                className="aspect-video w-full rounded-2xl"
              />
            </div>
            <div className="flex pt-6">
              <p className="grow text-2xl font-medium">People</p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                144
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4">
            <div>
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video w-full rounded-2xl"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <img
                src="https://placewaifu.com/image/100"
                className="aspect-video w-full rounded-2xl"
              />
              <img
                src="https://placewaifu.com/image/300"
                className="aspect-video w-full rounded-2xl"
              />
              <img
                src="https://placewaifu.com/image/400"
                className="aspect-video w-full rounded-2xl"
              />
            </div>
            <div className="flex pt-6">
              <p className="grow text-2xl font-medium">People</p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                144
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4">
            <div>
              <img
                src="https://placewaifu.com/image/200"
                className="aspect-video w-full rounded-2xl"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <img
                src="https://placewaifu.com/image/100"
                className="aspect-video w-full rounded-2xl"
              />
              <img
                src="https://placewaifu.com/image/300"
                className="aspect-video w-full rounded-2xl"
              />
              <img
                src="https://placewaifu.com/image/400"
                className="aspect-video w-full rounded-2xl"
              />
            </div>
            <div className="flex pt-6">
              <p className="grow text-2xl font-medium">People</p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                144
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Collections;
