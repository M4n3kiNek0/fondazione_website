import Image from 'next/image'

export function CoreValues() {
  const values = [
    {
      icon: "🫂",
      label: "Empatia",
      image: "/images/hands.jpg",
      alt: "Hands against tree bark representing empathy"
    },
    {
      icon: "👂",
      label: "Ascolto",
      image: "/images/deer.jpg",
      alt: "Deer in nature representing listening"
    },
    {
      icon: "🔍",
      label: "Trasparenza",
      image: "/images/ocean.jpg",
      alt: "Calm ocean surface representing transparency"
    },
    {
      icon: "🤝",
      label: "Inclusione",
      image: "/images/rainbow.jpg",
      alt: "Palm leaf with rainbow representing inclusion"
    }
  ]

  return (
    <section className="py-20 px-4">
      <h2 className="text-center text-3xl font-bold text-[#102fd8] mb-4">CORE VALUE</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {values.map((value) => (
          <button
            key={value.label}
            className="px-6 py-2 rounded-full border-2 border-[#102fd8] text-[#102fd8] hover:bg-[#102fd8] hover:text-white transition-colors text-sm font-medium"
          >
            {value.icon} {value.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {values.map((value) => (
          <div key={value.label} className="relative aspect-[4/3] w-full">
            <Image
              src={value.image}
              alt={value.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

