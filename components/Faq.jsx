import React from 'react';

export default function Faq() {
  return (
    <div className="min-h-screen p-5">
      <main className="bg-white shadow-md rounded p-5  mt-10">
        <h1 className="text-2xl font-bold mb-5 text-green-600">Frequently Asked Questions</h1>
        <div className="accordion">
          <div className="mb-4">
        
            <label htmlFor="question-1" className="block font-bold mb-2">
            Do I need a budget, and how do I create one?
            </label>
            <p className="ml-5 mb-5">One survey found that only 39% of four-year college students used a budget. Additionally, 38% never check their account balance.

This is despite half of the students worrying that they will not have enough money to last the semester and almost half worried about keeping track of their money.

Budgeting can help students get a handle on these financial concerns. </p>
          </div>
          <div className="mb-4">
          
            <label htmlFor="question-2" className="block font-bold mb-2">
            Do I need to think about saving for retirement now?
            </label>
            <p className="ml-5 mb-5">A Morning Consult report4 found that only 39% of people begin saving for retirement in their 20s.

Nonetheless, financial advisors suggest saving 10% of one’s income starting as early as possible to take advantage of compounding interest. 

When it comes to your students’ personal finance questions, a student financial wellness program can:

Define, show examples, provide tools, and encourage students to create and use a budget
Explain general IRS guidelines and forms
Show the benefits of compounding interest
Help students understand how much money they need for retirement
</p>
          </div>
          <div className="mb-4">
          
            <label htmlFor="question-3" className="block font-bold mb-2">
            What is the difference between a grant, federal loan, and private loan?
            </label>
            <p className="ml-5 mb-5">What is the difference between a grant, federal loan, and private loan?</p>
          </div>
        </div>
      </main>
    </div>
  );
}