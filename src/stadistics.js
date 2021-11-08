const stadistics = (validatedLinks, validate) => {
  const total = validatedLinks.length;
  const unique = [...new Set(validatedLinks.map((link) => link.href))].length;
  // Array.from(unique).length

  if (validate) {
    let broken = 0;

    validatedLinks.forEach((link) => {
      if (link.ok === 'fail') {
        broken += 1;
      }
    });

    return { total, unique, broken };
  }

  return { total, unique };
};

module.exports = {
  stadistics,
};
