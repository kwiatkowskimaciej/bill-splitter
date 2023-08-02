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
          <img className="object-contain w-[200px]" src={require("../images/pig.webp")} />
        </div>
      </div>
    </section>
  );
}
