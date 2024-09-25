function Home({name, designation, imgSrc ,info ="Enter your Information"}){
    return(
        <>
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 m-4">
                <img src={imgSrc} className="w-full h-48 object-cover object-center " alt="{name}"/>
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                    <h4 className="text-md text-gray-600 mb-4">{designation}</h4>
                    <p className="text-gray-600 text-sm mb-4">{info}</p>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg shadow-md hover:bg-red-500 transition duration-300">Know More</button>
                </div>

            </div>
        </>
    )
}
export default Home;