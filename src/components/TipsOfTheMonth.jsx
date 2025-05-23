const TipsOfTheMonth = () => {
  const tips = [
    {
      title: "Watering Basics",
      summary: "Water your plants early in the morning to reduce evaporation.",
    },
    {
      title: "Composting 101",
      summary: "Use kitchen scraps and dry leaves to make rich compost for your garden.",
    },
    {
      title: "Pest Control Naturally",
      summary: "Try neem oil or introduce ladybugs to control pests without chemicals.",
    },
  ];

  return (
    <section className="my-12 px-6 max-w-5xl mx-auto bg-green-50 dark:bg-gray-800 rounded-lg p-8 shadow">
  <h2 className="text-3xl font-bold text-green-700 dark:text-green-200 mb-6 text-center">
    Gardening Tips of the Month
  </h2>
  <ul className="list-disc list-inside space-y-4 text-green-900 dark:text-green-100">
    {tips.map((tip, idx) => (
      <li key={idx}>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">{tip.title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{tip.summary}</p>
      </li>
    ))}
  </ul>
</section>
  );
};

export default TipsOfTheMonth;
