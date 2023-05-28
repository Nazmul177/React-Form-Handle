import React, { useState } from 'react'

const Home = () => {
    const [input, setInput] = useState({
        name : "",
        email : "",
        age  : "",
        color : "",
        gender : "",
        edu : ""
    });
    //CheckBox Section Here
    const [stack, setStack] = useState([
        "Mern Stack", "Laravel" , "Django", "Dot net", "Ruby Rails", "Next Js"
    ]);
    const [selected, setSelected] = useState([
        "Mern Stack", "Dot net", "Next Js"
    ]);

    const handleCheckboxChange = (e) => {
          const value = e.target.value;
          const updatelist = [...selected];
          if(selected.includes(value)){
            updatelist.splice(selected.indexOf(value), 1);

          }else{
            updatelist.push(value);
          }
          setSelected(updatelist);
    }
    // Form Input value
    const handleInputChange = (e) =>{
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    };

   
  return (
    <>
        <div className="page my-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                           <h2>Create an account</h2>
                           <form action="">
                           <div className="my-3">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className='form-control' 
                                    name='name' 
                                    value={input.name}
                                    onChange={handleInputChange} />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className='form-control'
                                     name='email' 
                                     value={input.email}
                                     onChange={handleInputChange} />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Age</label>
                                    <input type="range" step={1} min="10" max="70"  name='age' 
                                    value={input.age}
                                    onChange={handleInputChange} />
                                    {input.age}
                                </div>
                               
                                <div className="my-3">
                                    <label htmlFor="">Color</label>
                                    <input type="color" 
                                     name='color' 
                                     value={input.color}
                                     onChange={handleInputChange} />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Gender</label>
                                    <br />
                                    <label htmlFor="">
                                    <input type="radio" name="gender" value="Male" onChange={handleInputChange} id="" />Male
                                    </label>
                                    <label htmlFor="">
                                    <input type="radio" name='gender' value="Female" onChange={handleInputChange} id="" />Female
                                    </label>
                                    <label htmlFor="">
                                    <input type="radio" name='gender' value="Others" onChange={handleInputChange} id="" />Others
                                    </label>
                                         
                                </div>
                                <div className="my-3">
                                    <label htmlFor="">Education</label>
                                    <br />
                                    <select name="edu" id="" className='form-control' onChange={handleInputChange}>
                                        <option value="">-select-</option>
                                        <option value="jsc">JSC</option>
                                        <option value="ssc">SSC</option>
                                        <option value="hsc">HSC</option>
                                        <option value="bsc">BSC</option>
                                        <option value="msc">MSC</option>
                                    </select>
                                </div>

                                <div className="my-3">
                                    <label htmlFor="">Dept</label>
                                    <br />
                                    {stack.map((item, index) => {
                                        return(
                                            <>
                                                <label htmlFor="" key={index}>
                                                    <input type="checkbox" checked={selected.includes(item)} value={item} onChange={handleCheckboxChange} />{item}
                                                </label>
                                                <br />
                                            </>
                                        )
                                    })}
                                    
                                    
                                         
                                </div>
                           </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;