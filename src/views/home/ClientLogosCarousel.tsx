import Image from "next/image";

const clientLogos = [
  { src: "/images/clients/numa.svg", alt: "Numa", width: 121, height: 30 },
  {
    src: "/images/clients/ancora.svg",
    alt: "Âncora Consórcios",
    width: 119,
    height: 36,
  },
  {
    src: "/images/clients/saude-movel.svg",
    alt: "Saúde Móvel",
    width: 136,
    height: 32,
  },
];

// Repeating the same group lets the track loop without a visible jump.
const logoGroups = Array.from({ length: 3 });

export default function ClientLogosCarousel() {
  return (
    <div
      aria-label="Clientes que confiam na Majapi"
      className="client-logos-carousel relative w-full overflow-hidden"
      role="region"
    >
      <div className="client-logos-track flex w-max items-center py-2">
        {logoGroups.map((_, groupIndex) => (
          <div
            aria-hidden={groupIndex > 0}
            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16"
            key={groupIndex}
          >
            {clientLogos.map((logo) => (
              <div
                className="flex h-8 w-[136px] shrink-0 items-center justify-center md:h-9"
                key={`${logo.src}-${groupIndex}`}
              >
                <Image
                  alt={logo.alt}
                  className="max-h-7 max-w-[136px] object-contain md:max-h-8"
                  height={logo.height}
                  src={logo.src}
                  width={logo.width}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
