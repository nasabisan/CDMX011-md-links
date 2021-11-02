const stadistics = (validatedLinks, validate) => {
  const total = validatedLinks.length
  const unique = [...new Set(validatedLinks.map(link => link.href))].length
  let broken = 0;

  for (const link of validatedLinks) {
    if (link.ok === 'fail') {
      broken++
    }
  }

  if (validate) {
    return {total, unique, broken}
  }

  return {total, unique}
}

module.exports = {
  stadistics
}