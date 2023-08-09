import React, { useState, useMemo } from 'react';
const Body = () => {
    const [weight, setWeight] = useState(70)
    const [height, setHeight] = useState(120)
    let color;

    const BmiCalculator = () => {
        let a = (weight / height / height) * 10000
        return a.toFixed(1)

    }
    useMemo(() => BmiCalculator(),
        [weight, height])



    if (BmiCalculator() < 18.5) {
        color = "orange";
    } else if (BmiCalculator() < 24.9) {
        color = "lime";
    } else {
        color = "red"
    }

    return (
        <div>
            <section className="flex items-center text-gray-600 body-font relative bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-screen ">
                <div className="container px-5 jusify mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md shadow-lg shadow-gray-500">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            BMI CALCULATOR</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Free Body Mass Index calculator gives out the BMI value and categorizes BMI based on provided information from WHO and CDC for both adults and children.</p>
                        <div className="relative mb-4">
                            <label htmlFor="weight" className="leading-7 text-sm text-gray-600">
                                Weight is {weight} Kg</label>
                            <input
                                type="range"
                                id="weight"
                                name="weight"
                                className="w-full bg-white outline-none accent-indigo-500 hover:accent-indigo-700"
                                min={10}
                                max={200}
                                value={weight}
                                onChange={(element) => setWeight(element.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="height" className="leading-7 text-sm text-gray-600 ">
                                Height is {height} cm</label>
                            <input
                                type="range"
                                id="weight"
                                name="weight"
                                className="w-full bg-white outline-none accent-indigo-500 hover:accent-indigo-700"
                                min={100}
                                max={200}
                                value={height}
                                onChange={(element) => setHeight(element.target.value)}
                            />
                        </div>
                        <button className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700"} rounded text-lg`}>
                            {"BMI: " + BmiCalculator()}
                        </button>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Body
