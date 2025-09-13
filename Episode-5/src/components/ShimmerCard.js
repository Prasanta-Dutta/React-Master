export const ShimmerCard = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {
                    Array(10).fill(0).map((_, index) => (
                        <div key={index} className="w-80 h-96 bg-slate-100 m-3 rounded-lg">
                            <div></div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}