export default function LandingSection() {
  return (
    <section className="bg-primary">
      <div
        className="mx-auto flex flex-col max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <h1 className="font-['Roboto'] text-[#6B576A] text-center font-semibold text-4xl px-8">
          Easily divide expenses
        </h1>
        <div>
          <img className="object-contain w-[200px]" src={require("../images/pig.webp")} alt="Money pig with money faling into it in between of three stacks of coins."/>
          <span className="sr-only">Image by <a href="https://www.freepik.com/free-vector/purple-piggy-bank-background-with-coins_1147625.htm#query=bills&position=18&from_view=search&track=sph">Freepik</a></span>
        </div>
      </div>
    </section>
  );
}
