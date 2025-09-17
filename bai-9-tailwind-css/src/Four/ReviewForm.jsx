import Input from "./Input";
import Review from "./Review";

function ReviewForm() {
  return (
    <>
      <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
        <h1 className="text-2xl font-black">Overall Rating</h1>
        <div>
          <Review />
          <p className="text-sm font-normal">Click to rate</p>
        </div>

        <Input
          title="Review Title"
          placeholder="Example: Easy to use"
          type="text"
        />
        <p>Would you recommend this product to a friend?</p>
        <div className="flex gap-8">
          <div>
            <input
              type="radio"
              id="yes"
              name="fav_language"
              value="YES"
              className="mr-1 scale-150 accent-black"
            />
            <label className="cursor-pointer" htmlFor="yes">
              YES
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="no"
              name="fav_language"
              value="NO"
              className="mr-1 scale-150 accent-black"
            />
            <label className="cursor-pointer" htmlFor="no">
              NO
            </label>
          </div>
        </div>

        <Input
          title="Product Review"
          placeholder="Example: Easy to use"
          type="textarea"
        />
        <div className="flex gap-x-2">
          <div className="grow">
            <Input
              title="Nick Name"
              placeholder="Example: FuHuyn263"
              type="text"
            />
          </div>
          <div className="grow">
            <Input
              title="Email address(will not be published"
              placeholder="Example: youremail@gamil.com"
              type="text"
            />
          </div>
        </div>
        <div>
          <input
            type="radio"
            id="accept"
            name="accept"
            value="accept"
            className="mr-1 scale-150 accent-black"
          />
          <label className="cursor-pointer" htmlFor="accept">
            I accept the terms and conditions
          </label>
        </div>
        <p className="text-sm font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam maxime
          nobis eos voluptates error quo impedit libero, enim modi provident
          consequuntur nulla molestias voluptatem. Quo minus voluptatum vero
          tenetur illo.
        </p>
        <button className="rounded-md bg-black p-6 text-white">
          Submit product review
        </button>
      </div>
    </>
  );
}
export default ReviewForm;
