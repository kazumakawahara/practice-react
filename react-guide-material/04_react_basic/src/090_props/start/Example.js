import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    return(
        <>
            <Child
                num={123}
                fn={hello}
            />
            {/*<Child color = "red" />;*/}
        </>
    )
};


export default Example;
