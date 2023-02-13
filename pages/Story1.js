import Head from "next/head";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const quizAnswers = {
    job: "Income",
    allowance: "Income",
    food: "Expenses",
    starbucks: "Expenses",
    friend: "Expenses",
    tuition: "Expenses"
};
const classAnswers = {
    star: "Want",
    phone: "Need",
    bike: "Want",
    bus: "Need",
    eat: "Want",
    paint: "Want"
}
export default function Story1() {


    const { user } = useUser();
    const [answers, setAnswers] = useState({
        job: "",
        allowance: "",
        food: "",
        starbucks: "",
        friend: "",
        tuition: ""
    });
    const [ans, setAns] = useState({
        star: "",
        phone: "",
        bike: "",
        bus: "",
        eat: "",
        paint: ""
    });
    const handleChange = event => {
        const { name, value } = event.target;
        setAnswers({ ...answers, [name]: value });
    };
    const handlerChange = event => {
        const { name, value } = event.target;
        setAns({ ...ans, [name]: value });
    };

    const checkAnswers = () => {
        let correctAnswers = 0;
        Object.keys(answers).forEach(key => {
            if (answers[key] === quizAnswers[key]) {
                correctAnswers++;
            }
        });
        alert(`You got ${correctAnswers} out of 6 answers correct!`);
    };
    const checkAns = () => {
        let correctAns = 0;
        Object.keys(ans).forEach(key => {
            if (ans[key] === classAnswers[key]) {
                correctAns++
            }
        });
        alert(`You got ${correctAns} out of 6 answers correct!`);
    }

    return (
        <>
            <Head>
                <title>Your Finance Aid</title>
                <link rel="icon" href="/learn.png" />
            </Head>
            <main>


                <div className="text-2xl font-bold tracking-wider">
                    {user && <h1 className="flex place-content-center font-serif -tracking-wider text-cyan-900 mt-11">Welcome to Your First story {user.name}</h1>}
                    {!user && <><h1 className="flex place-content-center font-serif -tracking-wider text-cyan-900 font-semibold mt-11">Welcome to Your First story!</h1>
                        <span className="font-light text-sm flex place-content-center font-serif -tracking-wider text-cyan-900 ">Login to get personalised story</span></>}
                    <img
                        src="/learn.png"
                        alt="animated character"
                        className="w-96 h-96 flex place-content-center justify-center items-center mx-auto mr-64"
                    />
                </div>
                
                <div className="mt-36 mx-24">
                <h1 className="flex place-content-center justify-center py-12 font-serif -tracking-wider text-cyan-900 text-xl font-bold">Story Introduction</h1>
                    <p>
                        Say, you have just started your college, with it comes a need to
                        manage your money wisely. You are working part-time at a local library for
                        &#8377;200 per hour, working for 5 hours a week. After tax and deductions you take
                        home &#8377;3000.
                    </p>
                    <p>
                        In addition, your parents are providing you an allowance of &#8377;1500 every
                        month, plus you are saving on rent by staying at home. Starbucks coffee at
                        least 3 times is a must for you and eating out once a week.
                        Occasionally, you will go out with friends and spend money on
                        entertainment.
                    </p>
                    <p>
                        You have played guitar your entire life and wanted to save up for a new
                        electric guitar, with your own money, for your band performance in 2
                        months. The guitar you want is priced at &#8377;3000. Figure out your
                        current financial situation and determine if you will have enough
                        before your performance!
                    </p>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------- */}
                <div className="mt-40 mx-24 font-bold text-2xl">
                    <h2 className="font-serif -tracking-wider text-cyan-900 italic font-bold">Step 1: Income and Expenses</h2>
                    <hr /><hr /><hr /><hr /><hr />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="inline-block place-content-start mx-24 mt-32">
                        <h4 className="font-semibold mb-8 font-mono">How much do you <i>make</i> and how much do you <i>spend</i>?</h4>
                        <br />
                        <p>
                            Before starting your budgeting journey, it is essential to know your
                            income and expenses.
                        </p>
                        <br />
                        <p>
                            <b className="text-cyan-800">Income: </b> Think of all the means that you get money from 
                            <br /><br />
                            <b className="text-cyan-800">Expenses:</b>
                            Think of all the ways you spend the money you got from your incomes
                        </p><br />
                        <br />
                        <p>
                            Identiy which of your situations is an income or an expense:
                        </p>

                    </div>
                    <img
                        src="/faq.png"
                        alt="animated character"
                        className="w-96  mr-40"
                    />

                </div>

                <div class="flex place-content-start  px-24">

                    <form>

                        <label className="inline-block px-2 text-gray-700 font-bold mb-2" for="type">Job</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-1 px-3 mt-4 mx-1 appearance-none focus:outline-none focus:shadow-outline"
                            name="job"
                            id="job"
                            onChange={handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>


                        <label className="inline-block px-2 text-gray-700 font-bold mb-2" htmlFor="allowance">
                            Allowance
                        </label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-1 px-3 mt-4 mx-1 appearance-none focus:outline-none focus:shadow-outline"
                            name="allowance"
                            id="allowance"
                            onChange={handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>


                        <label className="inline-block px-2 text-gray-700 font-bold mb-2" htmlFor="food">
                            Eating out
                        </label>

                        <select
                            className="bg-white border border-gray-400 rounded-lg py-1 px-3 mt-4 mx-1 appearance-none focus:outline-none focus:shadow-outline"
                            name="food"
                            id="food"
                            onChange={handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>



                        <label className="inline-block px-2 text-gray-700 font-bold mb-2" for="type">Buying Starbucks</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-1 px-3 mt-4 mx-1 appearance-none focus:outline-none focus:shadow-outline"
                            name="starbucks"
                            id="starbucks"
                            onChange={handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>



                        <label className="inline-block px-2 text-gray-700 font-bold mb-2" for="type">Going out with friends</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-1 px-3 mt-4 mx-1 appearance-none focus:outline-none focus:shadow-outline"
                            name="friend"
                            id="friend"
                            onChange={handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>


                        <label className="inline-block px-2 text-gray-700 font-bold mb-2" for="type">College supply</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-1 px-3 mt-4 mx-1 appearance-none focus:outline-none focus:shadow-outline"
                            name="tuition"
                            id="tuition"
                            onChange={handleChange}
                        >
                            <option value="">Please select</option>
                            <option value="Income">Income</option>
                            <option value="Expenses">Expenses</option>
                        </select>

                    </form>

                </div>


                <button
                    type="button"
                    className="bg-blue-500 text-white px-3  py-2  mx-24 mt-10"
                    onClick={checkAnswers}
                >
                    Check Answer
                </button>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className="mt-24 mx-24 items-center justify-center">

                    <h2 className="font-bold text-2xl mb-16 font-serif -tracking-wider text-cyan-900 italic ">Step 2: Identifying Needs and Wants</h2>

                    <h4>Do you really <i className="font-semibold">need</i> it, or do you just <i className="font-semibold">want</i> it?</h4>
                    <p>
                        Identifying your current needs and wants is one of the most important
                        things in your financial journey.
                    </p>
                    <img
                        src="/contact.png"
className="w-1/2 mr-11 ml-11"
                    />
                    <h6>Definitions</h6>
                    <p>
                        <b>Need:</b> A necessity, something required, something essential for
                        life <br />
                        <b>Want:</b> A desire, something wished for, something non-essential
                    </p>
                    <h6>In Real Life</h6>
                    <p  >
                        Using these definitions, "a roof over my head" is a need. So are
                        clothing, food, tools for work and medications. "A vacation" is a want,
                        and so are meals in restaurants, video games, gym memberships and
                        designer shoes. <br />Of course, one person's want may be another
                        person's need.
                        <br /> By learning how to differentiate between wants and needs, you can save money for retirement and emergencies, or for saving up to buy something that you really want.
                    </p>

                    <p>Identify the following as needs or wants so that you can save up for a guitar:</p>




                    <form>
                        <label className="block text-gray-700 font-bold mb-2" for="type">Buying Starbucks 3 times a week</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-2 px-4 appearance-none focus:outline-none focus:shadow-outline"
                            name="star"
                            id="star"
                            onChange={handlerChange}
                        >
                            <option value="">Please select</option>
                            <option value="Need">Need</option>
                            <option value="Wants">Wants</option>
                        </select>


                        <label className="block text-gray-700 font-bold mb-2" for="type">Getting a mobile to go to college </label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-2 px-4 appearance-none focus:outline-none focus:shadow-outline"
                            name="phone"
                            id="phone"
                            onChange={handlerChange}
                        >
                            <option value="">Please select</option>
                            <option value="Need">Need</option>
                            <option value="Wants">Wants</option>
                        </select>


                        <label className="block text-gray-700 font-bold mb-2" for="type">Getting a Bike to go to college</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-2 px-4 appearance-none focus:outline-none focus:shadow-outline"
                            name="bike"
                            id="bike"
                            onChange={handlerChange}
                        >
                            <option value="">Please select</option>
                            <option value="Need">Need</option>
                            <option value="Wants">Wants</option>
                        </select>

                        <label className="block text-gray-700 font-bold mb-2" for="type">Bus fare to go to college</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-2 px-4 appearance-none focus:outline-none focus:shadow-outline"
                            name="bus"
                            id="bus"
                            onChange={handlerChange}
                        >
                            <option value="">Please select</option>
                            <option value="Need">Need</option>
                            <option value="Wants">Wants</option>
                        </select>

                        <label className="block text-gray-700 font-bold mb-2" for="type">Eating outside with friends</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-2 px-4 appearance-none focus:outline-none focus:shadow-outline"
                            name="eat"
                            id="eat"
                            onChange={handlerChange}
                        >
                            <option value="">Please select</option>
                            <option value="Need">Need</option>
                            <option value="Wants">Wants</option>
                        </select>


                        <label className="block text-gray-700 font-bold mb-2" for="type">Painting your house over</label>
                        <select
                            className="bg-white border border-gray-400 rounded-lg py-2 px-4 appearance-none focus:outline-none focus:shadow-outline"
                            name="paint"
                            id="paint"
                            onChange={handlerChange}
                        >
                            <option value="">Please select</option>
                            <option value="Need">Need</option>
                            <option value="Wants">Wants</option>
                        </select>
                    </form>
                    <button
                     
                        type="button"
                        className="bg-blue-500 text-white px-3 py-1 font-serif mt-4"
                        onClick={checkAns}
                    >
                        Check Answer</button
                    >
                </div>
<h1 className="font-serif -tracking-wider text-cyan-900 italic font-bold flex justify-center text-xl">Please hold on While we are working to add more such stories for you !</h1>
            </main>
        </>
    );
}