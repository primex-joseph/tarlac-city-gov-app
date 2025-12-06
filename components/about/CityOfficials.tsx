import React from "react";

interface Official {
    name: string;
    position: string;
    img: string;
}

const App: React.FC = () => {
    const officials: Official[] = [
        { 
            name: "Hon. Governor Name", 
            position: "Provincial Governor, Tarlac", 
            img: "https://placehold.co/400x500/004D40/E0F2F1?text=GOVERNOR" 
        },
        { 
            name: "Hon. Vice Governor Name", 
            position: "Provincial Vice Governor, Tarlac", 
            img: "https://placehold.co/400x500/00695C/E0F2F1?text=VICE+GOV" 
        },
        { 
            name: "Hon. Rep. District 1", 
            position: "Congressman (1st District)", 
            img: "https://placehold.co/400x500/00796B/E0F2F1?text=DISTRICT+1" 
        },
        { 
            name: "Hon. Rep. District 2", 
            position: "Congressman (2nd District)", 
            img: "https://placehold.co/400x500/00897B/E0F2F1?text=DISTRICT+2" 
        },
        { 
            name: "Hon. Rep. District 3", 
            position: "Congressman (3rd District)", 
            img: "https://placehold.co/400x500/009688/E0F2F1?text=DISTRICT+3" 
        },
        { 
            name: "Hon. Mayor Name", 
            position: "City Mayor, Tarlac City", 
            img: "https://placehold.co/400x500/00A38E/E0F2F1?text=MAYOR" 
        },
        { 
            name: "Hon. Vice Mayor Name", 
            position: "City Vice Mayor, Tarlac City", 
            img: "https://placehold.co/400x500/00BF9A/E0F2F1?text=VICE+MAYOR" 
        },
    ];

    const governor = officials[0];
    const viceGovernor = officials[1];
    const remainingOfficials = officials.slice(2);

    // Component for a single official card
    const OfficialCard: React.FC<{ official: Official }> = ({ official }) => (
        <div 
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl overflow-hidden 
                flex flex-col items-center transition duration-300 transform hover:-translate-y-1 
                border-b-4 border-teal-600 p-3 sm:p-6 h-full"
        >
            {/* Image */}
            <div className="w-full h-auto overflow-hidden rounded-lg shadow-md mb-4 aspect-[4/5] max-w-xs">
                <img
                    src={official.img}
                    alt={official.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
            </div>

            {/* Text */}
            <h4 className="text-lg font-bold text-teal-800 text-center mt-2 leading-snug">
                {official.name}
            </h4>
            <p className="text-sm font-medium text-gray-500 text-center mt-1 mb-4">
                {official.position}
            </p>

            {/* Button */}
            <button className="w-full px-3 py-2 bg-teal-600 text-white text-xs font-semibold rounded-lg 
                hover:bg-teal-700 transition duration-150 shadow-md transform hover:scale-[1.02]">
                Read Biography
            </button>
        </div>
    );

    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-800 text-center mb-3">
                    Provincial and City Leadership
                </h2>
                <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
                    Meet the officials leading the province and the city towards progress and development.
                </p>

                {/* Governor + Vice Governor */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-teal-700 text-center mb-8">
                        Provincial Executives
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <OfficialCard official={governor} />
                        <OfficialCard official={viceGovernor} />
                    </div>
                </div>

                {/* Other Officials */}
                <div>
                    <h3 className="text-3xl font-bold text-teal-700 text-center mb-8">
                        District Representatives and City Leaders
                    </h3>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
                        {remainingOfficials.map((official, i) => (
                            <OfficialCard key={i} official={official} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default App;
