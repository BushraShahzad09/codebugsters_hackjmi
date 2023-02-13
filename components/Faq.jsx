// import React from 'react';

// export default function Faq() {
//   return (
//     <div className="min-h-screen p-5">
//       <main className="bg-white shadow-md rounded p-5  mt-10">
//         <h1 className="text-2xl font-bold mb-5 text-green-600">Frequently Asked Questions</h1>
//         <div className="accordion">
//           <div className="mb-4">
        
//             <label htmlFor="question-1" className="block font-bold mb-2">
//             Do I need a budget, and how do I create one?
//             </label>
//             <p className="ml-5 mb-5">One survey found that only 39% of four-year college students used a budget. Additionally, 38% never check their account balance.

// This is despite half of the students worrying that they will not have enough money to last the semester and almost half worried about keeping track of their money.

// Budgeting can help students get a handle on these financial concerns. </p>
//           </div>
//           <div className="mb-4">
          
//             <label htmlFor="question-2" className="block font-bold mb-2">
//             Do I need to think about saving for retirement now?
//             </label>
//             <p className="ml-5 mb-5">A Morning Consult report4 found that only 39% of people begin saving for retirement in their 20s.

// Nonetheless, financial advisors suggest saving 10% of one’s income starting as early as possible to take advantage of compounding interest. 

// When it comes to your students’ personal finance questions, a student financial wellness program can:

// Define, show examples, provide tools, and encourage students to create and use a budget
// Explain general IRS guidelines and forms
// Show the benefits of compounding interest
// Help students understand how much money they need for retirement
// </p>
//           </div>
//           <div className="mb-4">
          
//             <label htmlFor="question-3" className="block font-bold mb-2">
//             What is the difference between a grant, federal loan, and private loan?
//             </label>
//             <p className="ml-5 mb-5">What is the difference between a grant, federal loan, and private loan?</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
      {
          title: "Why is financial literacy important?",
          content: `Financial literacy is important because it equips individuals with the necessary tools to take control of their financial well-being and make informed decisions about their money. Without a strong understanding of personal finance, individuals may struggle to achieve their financial goals and may fall into debt.`,
      },
      {
          title: "How can I teach my children about money?",
          content:
              "To teach children about money, parents can give them an allowance, have them track their spending, and involve them in family financial discussions. Additionally, parents can also teach children about saving, investing, and budgeting through games and real-life experiences.",
      },
      {
          title: "What does our WiseAI do?",
          content: `Wise AI is an AI model provided as a service by FinWise which is meant to resolve all your doubts regarding finance , be it about the right time to start investing or a general query about a topic which takes a lot of time when you google it which otherwise are not covered in our story and magazine components . We aim to provide the best and the most accurate information and strive to work towards that`,
      },
      {
          title: "Do I need a budget, and how do I create one?",
          content: `A Morning Consult report4 found that only 39% of people begin saving for retirement in their 20s.

           Nonetheless, financial advisors suggest saving 10% of one’s income starting as early as possible to take advantage of compounding interest. 
          
           When it comes to your students’ personal finance questions, a student financial wellness program can:
      
           Define, show examples, provide tools, and encourage students to create and use a budget
           Explain general IRS guidelines and forms
           Show the benefits of compounding interest
           Help students understand how much money they need for retirement`,
      },
  ],
};
const styles = {
   bgColor: '#ccffee',
  titleTextColor: "rgb(22 78 99",
  rowTitleColor: "rgb(22 78 99)",

  rowContentColor: 'rgb(48 29 99)',
  arrowColor: "red",
};
const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

export default function Qna() { 
return(
  <div className="mx-11 justify-center ">
  <Faq data={data} styles={styles} config={config}/>
  </div>
)
}