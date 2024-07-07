const Example = () => {
    const repeatStr = (value: string, times: number): string[] => {
        return new Array(times).fill(value);
    }

    const repeatNum = (value: number, times: number): number[] => {
        return new Array(times).fill(value);
    }

    const repeat =<T> (value: T, times: number): T[] => {
        return new Array(times).fill(value);
    }

    const arry = repeat<number>(10, 3);
    const strArry = repeatStr("hello", 3);
    const numArry = repeatNum(10, 3);
};

export default Example;
