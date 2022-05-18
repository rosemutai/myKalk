import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import {useState,  React} from 'react' 

const Index = () => {

    const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

    const removeSpaces = (num) => num.toString().replace(/\s/g, "");

    const [displayAreaValue, setDisplayAreaValue] = useState({
        num: 0,
        sign: "",
        result: 0
    })

    // Number Click
    const handleNumClick = (e) =>{
        const value = Number(e.target.innerHTML)
        console.log("Type of num: " + typeof(value))

        // display area
        if(removeSpaces(displayAreaValue.num)){
            setDisplayAreaValue({
                
                ...displayAreaValue,
                num:
                    displayAreaValue.num === 0 && value === "0"
                    ? "0"
                    : removeSpaces(displayAreaValue.num) % 1 === 0
                    ? toLocaleString(Number(removeSpaces(displayAreaValue.num + value)))
                    : toLocaleString(displayAreaValue.num + value),
                result: !displayAreaValue.sign ? 0 : displayAreaValue.res,
                
            })
        }
    }

    // percentege sign
    const convertToPercent = () =>{
        let numToPercent = displayAreaValue.num ? parseFloat(displayAreaValue.num) : 0
        let resultToPercent = displayAreaValue.result ? parseFloat(displayAreaValue.result) : 0

        setDisplayAreaValue({
            ...displayAreaValue,
            num: (numToPercent /= Math.pow(100, 1)),
            result: (resultToPercent /= Math.pow(100, 1)),
            sign: ""

        })
        console.log("percentage sign")
    }

    //operator selected
    const handleOperator = (e) =>{
        const operator = e.target.innerHTML
        setDisplayAreaValue({
            ...displayAreaValue,
            sign: operator,
            num: 0,
            result: !displayAreaValue.result && displayAreaValue.num ? displayAreaValue.num : displayAreaValue.result,
        })
        
    }

    // Add Decimal point
    const handleDecimalPoint = (e) =>{
        const value = e.target.innerHTML
        console.log(value)

        setDisplayAreaValue({
            ...displayAreaValue,
            num: !displayAreaValue.num.toString().includes(".") ? displayAreaValue.num + value : displayAreaValue.num
        })
    }


    // Equals to
    const equalsClickHandler = () => {
        if (displayAreaValue.sign && displayAreaValue.num) {
            const math = (a, b, sign) =>
                sign === "+"
                ? a + b
                : sign === "-"
                ? a - b
                : sign === "/"
                ? a / b
                : a * b;
            
                setDisplayAreaValue({
                    ...displayAreaValue,
                    result:
                        displayAreaValue.num === 0 && displayAreaValue.sign === "/"
                        ? "Can't divide with Zero"
                        :math(Number(displayAreaValue.num), Number(displayAreaValue.num), displayAreaValue.sign),
                    sign: "",
                    num: 0
                })
                console.log("Result: " + displayAreaValue.result)
            }
       
    }

    // Change sign of number (positive / negative)
    const handleChangeSign = () =>{

        setDisplayAreaValue({
            ...setDisplayAreaValue,
            num: displayAreaValue.num ? displayAreaValue.num * -1 : 0,
            result: displayAreaValue.result ? displayAreaValue.result * -1 : 0,
            sign: ""
        })
        console.log("chnge sign")
    }

    // clear everything
    const handleClearClickEvent = () =>{
       setDisplayAreaValue({
           ...setDisplayAreaValue,
           num: 0,
           result: 0,
           sign: ""
       })
    }


    // delete one character 
    const deleteOneCharacter = () =>{
        setDisplayAreaValue({
            ...displayAreaValue,
            num: displayAreaValue.num ? displayAreaValue.num.delete() : 0
        })
    }

    


  return (
    <section className='home bg-slate-200 dark:bg-gray-900 w-full h-3/6  
        text-gray-500 dark:text-gray-100 pb-12 md:w-3/6 md:h-2/6 md:mx-auto'>
        <header className='page-header w-full flex justify-between relative items-center py-6 px-12 font-bold'>
            <div className='logo '>
                <h1 className='text-3xl tracking-wider text-orangish'>myCalc</h1>
            </div>
            <div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-6 right-8 mx-auto z-40 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg> */}
            </div>
        </header>
        <main className='main-content'>
            <section className='display-area flex flex-col justify-between p-8 items-end mt-40 md:mt-10 h-64 text-gray-500 dark:text-gray-100'>
                <p className='input'>{displayAreaValue.num}</p>
                <h3 className='results text-3xl font-bold'>{displayAreaValue.result}</h3>
            </section>

             {/* <div className='circle absolute bg-orangish  w-56 h-56 rounded-bl-full bottom-0 left-0'></div>  */}

            <section className='numbers-operators  gap-y-1 gap-x-1 grid grid-rows-5 grid-cols-4 
                w-10/12 rounded-lg shadow shadow-gray-600 z-50 mx-auto h-screen font-extrabold bg-slate-200 dark:bg-gray-900'>

                <div onClick={handleClearClickEvent} className="grid-item clearall w-full flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">C
                </div>

                <div onClick={deleteOneCharacter} className="grid-item delete-one flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2
                            2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                    </svg>
                </div>

                <div onClick={convertToPercent} className="grid-item percent flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">%
                </div>
                
                <div onClick={handleOperator} className="grid-item text-3xl division flex justify-center items-center 
                    bg-orangish hover:bg-orange-300 font-bold"> /
                </div>

                <div onClick={handleNumClick} className="grid-item seven flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">7
                </div>

                <div onClick={handleNumClick} className="grid-item eight flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">8
                </div>

                <div onClick={handleNumClick} className="grid-item nine flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">9
                </div>


                <div onClick={handleOperator} className="grid-item text-3xl times flex justify-center items-center 
                    bg-orangish hover:bg-orange-300 font-bold">x
                </div>

                <div onClick={handleNumClick} className="grid-item four flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">4
                </div>

                <div onClick={handleNumClick} className="grid-item five flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">5
                </div>

                <div onClick={handleNumClick} className="grid-item six flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">6
                </div>

                <div onClick={handleOperator} className="grid-item text-3xl minus flex justify-center items-center 
                    bg-orangish hover:bg-orange-300 font-bold">-
                </div>

                <div onClick={handleNumClick} className="grid-item one flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">1
                </div>

                <div onClick={handleNumClick} className="grid-item two flex justify-center items-center
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">2
                </div>

                <div onClick={handleNumClick} className="grid-item three flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">3
                </div>

                <div onClick={handleOperator} className="grid-item text-3xl plus flex justify-center items-center 
                    bg-orangish hover:bg-orange-300 font-bold">+
                </div>

                <div onClick={handleChangeSign} className="grid-item negative flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">+/-
                </div>

                <div onClick={handleNumClick} className="grid-item zero flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">0
                </div>

                <div onClick={handleDecimalPoint} className="grid-item decimal flex justify-center items-center 
                    bg-slate-100 hover:bg-slate-50 dark:bg-gray-800 dark:hover:bg-gray-700">.
                </div>

                <div onClick={equalsClickHandler} className="grid-item text-3xl equalsto flex justify-center items-center 
                    bg-orangish hover:bg-orange-300 font-bold">=
                </div>
            </section>
        </main>
       
    </section>
  )
}

export default Index