const Example = () => {
  let strOrNum: string | number = "Hello"

  strOrNum = 123

  type HelloOrNum = "Hello" | number
  const hello: HelloOrNum = "Hello"
};

export default Example;
