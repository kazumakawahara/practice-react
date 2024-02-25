const Example = () => {
    function sum1(x: number, y:number) {
        return x + y;
    }

    const result1 = sum1(1,2);

    const sum2 = (x: number, y:number):number =>  x + y;

    type Sum = (x: number,y :number) => number;
    const sum3: Sum = (x,y) => x+y;
    const result = sum3(1,2);
};

export default Example;
