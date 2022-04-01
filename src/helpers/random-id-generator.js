
export default function randomIdGenerator() {
  const HEXA = 16;
  const TWO = 2;
  return (
    Date.now().toString(HEXA * TWO)
    + Math.random()
      .toString(HEXA * TWO)
      .substring(TWO)
  );
}