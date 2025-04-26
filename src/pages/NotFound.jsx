import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <main className="grid h-screen place-items-center bg-base-300 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate("/")}
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Go back home
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
