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
        <div className='bg-white border-black px-2 py-2 border-solid border-4 text-center items-center'><h1 className='font-mono text-xl font-normal'>Read Interesting <br /> Articles</h1><img src='/tree.gif' alt='cover' className='mx-auto mt-40'/><h1 className='font-mono text-xl font-normal pt-24'>The Speaking Tree</h1></div>
        <div className='bg-green-700 text-white border-black px-2 py-2 border-solid border-4 text-center text-formatting'><span className='text-xl font-bold '>50/20/30 Budget Rule</span><p className='py-11'>
        <div className="magazine-heading">50%: Needs</div>
       Needs are those bills that you absolutely necessary for survival.<br/>
       Half of your after-tax income should be all that you need to cover your needs and obligations.<br/> I
       These include rent or mortgage payments, car payments, groceries, insurance, health care and utilities. <br/>
       <div className="magazine-heading">30%: Wants</div>
       Wants are all the things you spend money on that are not absolutely essential, all those little extras you spend money on that make life more enjoyable and entertaining.<br/>
       This includes dinner and movies out, that new handbag, tickets to sporting events, vacations, the latest electronic gadget, and ultra-high-speed Internet.<br/>
       <div className="magazine-heading">20%: Savings</div> 
      Allocate 20% of your net income to savings and investments. This includes adding money to an emergency fund in a bank savings account, making contributions to a mutual fund account, and investing in the stock market.<br/>
      <div className="magazine-heading">Pro tip:</div> 
       You should have at least three months of emergency savings on hand in case you lose your job or an unforeseen event occurs. God Forbid!<br/>
 </p></div>
        <div className=' text-green-700 bg-white border-black px-2 py-2 border-solid border-4 text-center'><span className='text-xl font-bold '>Page 2 content</span><p className='py-11'>This is where the content goes. We can use some api to request articles and display them here </p></div>
        <div className='bg-green-700 text-white border-black px-2 py-2 border-solid border-4 text-center'><span className='text-xl font-bold '>Page 3 content</span><p className='py-11'>This is where the content goes. We can use some api to request articles and display them here </p></div>
        <div className='bg-green-700 text-white border-black px-2 py-2 border-solid border-4 text-center'><span className='text-xl font-bold '>Page 4 content</span><p className='py-11'>This is where the content goes. We can use some api to request articles and display them here </p></div>
        <div className='bg-green-700 text-white border-black px-2 py-2 border-solid border-4 text-center'><span className='text-xl font-bold '>Page 5 content</span><p className='py-11'>This is where the content goes. We can use some api to request articles and display them here </p></div>
      </HTMLFlipBook>
  
        <div className="flex justify-between p-4 w-full bottom-0">
          <button
            onClick={() => pagee.current.pageFlip().flipPrev()}
            className="bg-blue-500 text-white px-3 mx-3"
          >
            Prev page
          </button>
          <div><img src='/s.png' alt='tree' /></div>
          <button
            onClick={() => pagee.current.pageFlip().flipNext()}
            className="bg-blue-500 text-white px-3 mx-3"
          >
            Next page
          </button>
        </div>
      </div>
      </div>
    );
  };
  export default Magazine;
  