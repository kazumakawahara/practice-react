const Example = () => {
  const arry1: number[] = [1,2,3];

  type Parson = {name: string, age?: number}
  const obj1: Parson = {name:"Taro"}

  const users: Parson[] = [
    {name: "Taro"},
    {name: "Jiro", age:30}
  ]
};

export default Example;
