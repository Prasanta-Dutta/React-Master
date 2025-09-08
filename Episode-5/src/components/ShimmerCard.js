export const ShimmerCard = () => {
    return (
        <>
            <div className="shimmer-layout">
                {
                    Array(10).fill(0).map((_, index) => (
                        <div key={index} className="shimmer-card-container">
                            <div></div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}