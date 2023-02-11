import HTMLFlipBook from 'react-pageflip'
import { useRef } from 'react';


const Magazine = () => {
  const pagee = useRef(null);
  return (
    <div style={{
      backgroundImage: 'url(/bgpg.png)',
      backgroundSize: 'cover',

    }}>
      <div className="flex place-content-center items-center align-middle h-full">
        <HTMLFlipBook width={500} height={800} ref={pagee}>
          <div className='bg-white border-black px-2 py-2 border-solid border-4 text-center items-center rounded-lg'><h1 className='font-mono text-xl font-bold py-8'>Read Interesting <br /> Articles</h1><img src='/tree.gif' alt='cover' className='mx-auto mt-40' /><h1 className='font-mono text-xl font-bold pt-24'>The Speaking Tree</h1></div>
          <div className='bg-teal-200 text-black border-black px-2 py-2 border-solid border-4 rounded-lg '><div className='text-center font-bold text-2xl py-1'>Brush Up Fin!</div><p className='py-11'>
            <div className="py-2  font-bold">&#8377; Income </div>
            &#9734; List all sources of money that you receive in a month. <br />
            &#9734; It includes paychecks, investment income and money that you make from side jobs.<br />
            &#9734; You should find ways to increase your income morally.<br />
            <div className="py-2  font-bold">&#8377; Expenses </div>
            &#9734; List all purachases that you receive in a month. <br />
            &#9734; It is advisable to cut down on unnecessary spendings.<br />
            <div className="py-2  font-bold">&#8377; Budgeting  </div>
            &#9734; Keeping track of one’s spending patterns.
            <div className="py-2 font-bold">&#8377; Debt </div>
            &#9734; A sum of money that is owed or due.<br />
            &#9734; Borrowing money for goods that are required to make a livelihood is considered good debt.<br />
            &#9734; Borrowing money for unneeded expenses is considered bad debt.
            <div className="py-2  font-bold">&#8377; Savings  </div>
            &#9734; Savings ensure financial security and a bright future.
            <div className="py-2  font-bold">&#8377; Investment  </div>
            &#9734; Investments assist in the generation of additional monthly income. <br />
            &#9734; Mutual funds, real estate, and gold are some of the most popular investment possibilities.
          </p></div>
          <div className='bg-orange-200 text-black border-black px-2 py-2 border-solid border-4 rounded-lg '><div className='text-center font-bold text-2xl py-1'>50/20/30 Budget Rule</div><p className='py-11'>
            <div className="text-center py-3 text-xl font-bold">&#8377; 50% Needs</div>
            &#9734; Needs are those bills that you absolutely necessary for survival.<br />
            &#9734; Half of your after-tax income should cover your needs and obligations.<br />
            &#9734; These include rent or mortgage payments, car payments, groceries, insurance, health care and utilities. <br />
            <div className="text-center py-3 text-xl font-bold ">&#8377; 30% Wants<br /></div>
            &#9734; Wants are all the things you spend money on that are not absolutely essential, which make life more enjoyable and entertaining.<br />
            &#9734; This includes dinner and movies out, vacations, the latest electronic gadget, and ultra-high-speed Internet.<br />
            <div className="text-center py-3 text-xl font-bold">&#8377; 20% Savings</div>
            &#9734; Allocate 20% of your net income to savings and investments. <br />
            &#9734; Adding money to an emergency fund in a bank savings account.<br />
            &#9734; Making contributions to a mutual fund account.<br />
            &#9734; Investing in the stock market.<br />
            <div className="text-center py-3 text-xl font-bold">&#8377; Pro tip</div>
            &#9734; You should have at least three months of emergency savings on hand in case you lose your job or an unforeseen event occurs.<br /> God Forbid!<br />
          </p></div>
          <div className='bg-amber-100 text-black border-black px-2 py-2 border-solid border-4 rounded-lg '><div className='text-center font-bold text-2xl py-1'>Shark Tank Terminology!</div><p className='py-11'>
            <div className="py-2  font-bold">&#8377; Assests : </div>
            Assets are items that can provide future benefit to your business, such as cash, inventory, real estate.<br />
            <div className="py-2 font-bold">&#8377; Balance Sheet : </div>
            It is an important financial statement that includes a tally of the organization’s assets, liabilities, and shareholders’ equity for a given reporting period.
            <div className="py-2  font-bold">&#8377; Balance Sheet Equation :  </div>
            Assets = Liabilities + Owners’ Equity
            <div className="py-2  font-bold">&#8377; Liquidity:  </div>
            Liquidity describes how quickly your assets can be converted into cash.
            <div className="py-2  font-bold">&#8377; Equity :  </div>
            It is the amount of money that would be returned to a company's shareholders if all of the assets were liquidated and all of the company's debt was paid off in the case of liquidation.
            <div className="py-2  font-bold">&#8377; Valuation  </div>
            Valuation is a quantitative process of determining the fair value of an asset, investment, or firm.
            <div className="py-2  font-bold">&#8377; Cash Flow:  </div>
            It is the net balance of cash moving in and out of a business at a specific point in time.
          </p></div>
          
          <div className='bg-slate-300 text-black border-black px-2 py-2 border-solid border-4 rounded-lg '><div className='text-center font-bold text-2xl py-1'>Stocketing!</div><p className='py-11'>
            <div className="py-2 font-bold">&#8377; Stocks </div>
            &#9734; When you invest in stocks, you get a slice of ownership in a company that can yield returns if it's successful. <br />
            <div className="py-2 font-bold">&#8377; Goals & Budget </div>
            &#9734; Review your financial situation( After-tax income, expenses, debt, net worth, risk tolerance ).<br />
            &#9734; Set clear financial goals.<br />
            <div className="py-2 font-bold">&#8377; Get acquainted with stocks </div>
            &#9734; Different types of stocks to choose from such as blue-chip stocks, growth stocks, and penny stocks.<br />
            &#9734; Different-sized companies with varying market capitalizations and degrees of risk ( Small-cap, mid-cap, or large-cap stocks ) <br />
            &#9734; Explore exchange-traded funds (ETFs) ,mutual funds, index funds<br />
            <div className="py-2 font-bold">&#8377; Investing Strategy </div>
            &#9734; Passive investing —  buy-and-hold approach.<br />
            &#9734; Active investing —  buying and selling based on market conditions.<br />
            <div className="py-2 font-bold">&#8377; Investing Account & Portfolio </div>
            &#9734; Decide if you want to do it yourself or get a professional to help out.<br />
            &#9734; Diversify your portfolio by investing in different types of investment vehicles and industries.<br />



          </p></div>

        </HTMLFlipBook>

        <div className="flex justify-between p-4 w-full bottom-0">
          <button
            onClick={() => pagee.current.pageFlip().flipPrev()}
            className="bg-blue-500 text-white px-1 mx-3"
          >
            Prev page
          </button>
          <div><img src='/s.png' alt='tree' /></div>
          <button
            onClick={() => pagee.current.pageFlip().flipNext()}
            className="bg-blue-500 text-white px-1 mx-3"
          >
            Next page
          </button>
        </div>
      </div>
    </div>
  );
};
export default Magazine;
