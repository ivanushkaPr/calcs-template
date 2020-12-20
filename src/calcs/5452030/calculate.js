export default function calculate({tfArray}){
  const [
    {value: initialСost},
    {value: modernizationCosts},
    {value: usefulLife},
  ] = tfArray;
  const result = (Number(initialСost) + Number(modernizationCosts)) / Number(usefulLife);
  return result;
};