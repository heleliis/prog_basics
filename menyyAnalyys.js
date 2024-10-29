function analyzeMenu(menuItems) {
  const cheapItems = menuItems.filter((item) => item.price < 10);
  const cheapItemNames = cheapItems.map((item) => item.name);
  cheapItems.forEach((item) => {
    console.log(`Nimi: ${item.name}, Hind: ${item.price}€`);
  });
  const totalCost = cheapItems.reduce((sum, item) => sum + item.price, 0);

  return {
    cheapitems: cheapItemNames,
    totalCost: totalCost,
  };
}
