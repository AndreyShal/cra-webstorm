 export const Post  = () => {
    const sum = (a: number, b: number) => {
        return a + b;
    }

    return (
        <div>
            <h2>Post</h2>
            <button onSubmit={() => sum(2, 9)}>sum</button>
        </div>
    )
 }