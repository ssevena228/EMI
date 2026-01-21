
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [principle, setPrinciple] = useState(0);

  const [interest, setinterest] = useState(0);

  const [year, setYear] = useState(0);

  const [emi, setEMI] = useState(0);





  const handleChande = (e) => {

    console.log(e.target.id, e.target.value);

    const id = e.target.id
    const value = Number(e.target.value);
    if (id === 'principle') {
      setPrinciple(value);
    }
    else if (id === 'interest') {
      setinterest(value);
    } else {
      setYear(value);
    }

  }
  console.log(principle, interest, year);


  //  P(r(1+r)^n/((1+r)^n)-1))
  const calculateEMI = () => {
    let r = interest;


    if (principle && r && year) {
      r = r / 12 / 100  //per month
      const calPow = Math.pow(1 + r, year * 12);
      const amount = principle * ((r * calPow) / (calPow - 1));
      setEMI(amount);
      console.log(emi)

    }

  }

  useEffect(() => {

    calculateEMI();

  }, [principle, interest, year]);



  return (
    <div className='loan-calc'>
      <h1>Mortgage Calulator</h1>


      <div className='inputes'>
        <p>Principle :</p>
        <input
          onChange={handleChande}
          type='number'
          id='principle'
          value={principle}
        />

        <p>Interest:</p>
        <input
          onChange={handleChande}
          type='number'
          id='interest'
          value={interest}
        />


        <p>Years:</p>
        <input
          onChange={handleChande}
          type='number'
          id='year'
          value={year}
        />


      </div>



      <div className='output'>

        Your EMI is {emi}

      </div>

    </div>
  );
}

export default App;
