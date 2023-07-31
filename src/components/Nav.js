import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link
        to="#"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 font-['Roboto']"
      >
        Home
      </Link>
      <Link
        to="#"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        About
      </Link>
    </>
  );
}
