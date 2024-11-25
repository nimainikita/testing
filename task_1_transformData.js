const data = [
  [
    ["id", 1],
    ["name", "Ivan"],
    ["age", 23],
  ],
  [
    ["id", 2],
    ["name", "Marina"],
    ["age", 30],
  ],
  [
    ["id", 3],
    ["name", "Anna"],
    ["age", 28],
  ],
]

const transformData = (data) => {
  return data.map((el) => {
    const obj = Object.fromEntries(el)

    return {
      label: `${obj.name}, ${obj.age}`,
      value: obj.id,
    }
  })
}

console.log(transformData(data))
