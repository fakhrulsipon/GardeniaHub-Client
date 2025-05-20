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
    <section className="my-12 px-6 max-w-5xl mx-auto bg-green-50 rounded-lg p-8 shadow">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Gardening Tips of the Month</h2>
      <ul className="list-disc list-inside space-y-4 text-green-900">
        {tips.map((tip, idx) => (
          <li key={idx}>
            <h3 className="text-xl font-semibold">{tip.title}</h3>
            <p>{tip.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TipsOfTheMonth;
