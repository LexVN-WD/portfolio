import BeatLoader from "react-spinners/BeatLoader";

export default function Loading({ loading }) {

  return (
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-5xl py-4 text-secondary font-semibold">Loading</h1>
        </div>
        <div>
          <BeatLoader
            color={'#ff6699'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
  )
}