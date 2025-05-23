const SeasonalPlants = () => {
  const plants = [
    {
      name: "Rose",
      season: "Spring",
      description: "Bright and fragrant flowers perfect for spring.",
      image: "https://i.ibb.co/LD6NM59R/annie-spratt-p-DGNBK9-A0sk-unsplash.jpg",
    },
    {
      name: "Tulip",
      season: "Spring",
      description: "Colorful bulbs that bloom beautifully in spring.",
      image: "https://i.ibb.co/5d5bhTN/uljana-borodina-v-I1tsd3-G2fs-unsplash.jpg",
    },
    {
      name: "Chrysanthemum",
      season: "Autumn",
      description: "Hardy and vibrant flowers for fall gardens.",
      image: "https://i.ibb.co/Gvqj41h6/harald-arlander-Gs-GZJMK0b-Jc-unsplash.jpg",
    },
    {
      name: "Poinsettia",
      season: "Winter",
      description: "Popular festive plant with bright red leaves.",
      image: "https://i.ibb.co/Kx67XgCn/erol-ahmed-huz-RVx9-SND0-unsplash.jpg",
    },
  ];

  return (
    <section className="my-12 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-extrabold text-green-800 dark:text-green-200 mb-10 text-center tracking-wide drop-shadow-md">
    Seasonal Plants Guide
  </h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {plants.map((plant, index) => (
      <div
        key={index}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-6 border border-green-500 dark:border-green-700"
      >
        <img
          src={plant.image}
          alt={plant.name}
          className="w-28 h-28 object-cover rounded-full border-4 border-green-300 dark:border-green-600 shadow-md"
        />
        <div>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1 tracking-tight">
            {plant.name}
          </h3>
          <p className="text-green-700 dark:text-green-300 italic mb-3 text-lg font-medium">
            Best Season: <span className="font-semibold">{plant.season}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-md">
            {plant.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default SeasonalPlants;

