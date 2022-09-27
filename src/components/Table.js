import React from 'react';

function Data(props) {
    const[data1,setdata] = useState(props.arr)
    const handledelete = (i) =>{
        //props.setarr(props.arr.filter(data=>(data.name&& data.email && data.number)! == (name && email && number)))
   let h=[]
   data1.forEach((element,index) => {
    if(index!==i){
        h.push(element)
    }
   });
   setdata(h);
    }
  return (
    <div className="container">
        <h2>Table of Function Component</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>   S.No </th>
                    <th>   Name</th>
                    <th>   S.No </th>
                </tr>
            </thead>
        </table>
      
    </div>
  );
}

export default Data;
