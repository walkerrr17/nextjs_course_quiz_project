export function shuffleNumbers(numbers: any[]): any[] {
  return numbers
        .map(number => ({ number, randomFactor: Math.random() }))
        .sort((object1, object2) => object1.randomFactor - object2.randomFactor)
        .map(object => object.number)
}