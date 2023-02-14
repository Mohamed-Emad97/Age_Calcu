import React from 'react';

export default function Home() {

    function ageCalcu(e) {
        e.preventDefault();
        let ageByYears = document.getElementById("age").value;
        let ageByMonths = ageByYears * 12;
        let ageByWeeks =  ageByYears * 52.14;
        let ageByDays = ageByWeeks * 7;
        let ageByHours = ageByDays * 24;
        let ageByMins = ageByHours * 60;
        //let ageBySecs = ageByMins * 60;
        
        document.querySelector("#years").innerHTML = `${ageByYears} <br/> Years`;
        document.querySelector("#months").innerHTML = `${ageByMonths} <br/> Months`;
        document.querySelector("#weeks").innerHTML = `${ageByWeeks} <br/> Weeks`;
        document.querySelector("#days").innerHTML = `${ageByDays} <br/> Days`;
        document.querySelector("#hours").innerHTML = `${ageByHours} <br/> Hours`;
        document.querySelector("#mins").innerHTML = `${ageByMins} <br/> Mins`;
        //console.log(`${ageByYears} = ${ageByMonths} = ${ageByWeeks} = ${ageByWeeks} = ${ageByDays} = ${ageByHours} = ${ageByMins} = ${ageBySecs}`)
    }

  return (
    <>
        <section id="home">
            <div className="container">
                <div className="inputFiled py-3 rounded-2 my-5 center flex-column gap-2">
                    <h3 className="title fw-bolder text-capitalize">
                        Age By Months , Weeks & Days
                    </h3>
                    <div className="form">
                        <form>
                            <input className='rounded-2 p-2' type="text" name="age" id="age" placeholder='Enter Your Age By Years'/>
                            <button className='btn btnMain rounded-2 px-2 p-2 ms-2' onClick={ageCalcu}>Calculate</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div id="years" className='text-center p-3 mainCard fs-4 my-2 text-black-50 rounded-2'></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div id="months" className='text-center p-3 mainCard fs-4 my-2 text-black-50 rounded-2'></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div id="weeks" className='text-center p-3 mainCard fs-4 my-2 text-black-50 rounded-2'></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div id="days" className='text-center p-3 mainCard fs-4 my-2 text-black-50 rounded-2'></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div id="hours" className='text-center p-3 mainCard fs-4 my-2 text-black-50 rounded-2'></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div id="mins" className='text-center p-3 mainCard fs-4 my-2 text-black-50 rounded-2'></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
