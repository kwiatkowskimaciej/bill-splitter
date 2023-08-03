import Header from './Header';
import LandingSection from './LandingSection';

export default function AboutPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <LandingSection />
      <div className="flex flex-col items-center">
        <p>
          Image by{' '}
          <a href="https://www.freepik.com/free-vector/purple-piggy-bank-background-with-coins_1147625.htm#query=bills&position=18&from_view=search&track=sph">
            Freepik
          </a>
        </p>
      </div>
      <div
        className={`transition-[top] ease-out duration-500 w-screen h-[calc(100vh-160px-96px-24px-84px-20px)] bg-secondary absolute top-[384px] rounded-t-3xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)] px-6 pt-7 flex flex-col gap-5 overflow-y-auto pb-[20px]`}
      >
        <h1 className='font-["Roboto"] text-xl font-medium'>About</h1>
        <p className='font-["Roboto"]'>
          Welcome to Bill Splitter – the easiest way to split party expenses and
          ensure a fair and equitable sharing experience among friends.Try it now and say
          goodbye to awkward bill-splitting moments!
        </p>
        <h2 className='font-["Roboto"] text-xl font-medium '>How it works:</h2>
        <ul>
          <li>1. Enter each person's name and the amount they paid.</li>
          <li>2. Click "Calculate".</li>
          <li>
            3. That's it! Bill Splitter will find the most efficient money
            transfers and show you who should transfer money to whom.
          </li>
        </ul>
        <footer className="flex flex-col items-center font-['Roboto']">
          <p>&copy; Created by <a href="https://github.com/kwiatkowskimaciej">Maciej Kwiatkowski</a>, {year}</p>
        </footer>
      </div>
    </>
  );
}
