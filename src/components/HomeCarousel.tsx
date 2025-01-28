import Image from "next/image";

export default function HomeCarousel() {
  return (
    <section>
      <div id="home-carousel" data-carousel='{ "loadingClasses": "opacity-0" }'>
        <div className="container relative">
          <div className="carousel rounded-none">
            <div className="carousel-body h-full opacity-0">
              <div className="carousel-slide">
                <div className="flex h-full justify-center">
                  <Image
                    src={"https://img.freepik.com/free-photo/medium-shot-woman-living-as-digital-nomad_23-2151205451.jpg?t=st=1737964160~exp=1737967760~hmac=eb888be9e443a653a73a497535e3f25993270c4803ea585a1948e4ef15a52bdf&w=1380"}
                    width={1200}
                    height={600}
                    alt="game"
                    className="h-[250px] sm:h-[480px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="carousel-prev">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button type="button" className="carousel-next">
            <span className="sr-only">Next</span>
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}