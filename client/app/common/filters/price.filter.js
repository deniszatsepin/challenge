export default () => {
  return (input, fraction) => {
    input = parseFloat(input);
    const parts = input.toFixed(2).split('.');
    return  !fraction 
      ? parts[0] 
      : parseInt(parts[1]) 
        ? parts[1] 
        : undefined;
  };
}
