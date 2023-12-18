/* eslint-disable react/prop-types */
import './List.css'
import User from './User'

function List({data,search}) {

      const filteredData = data.filter((el) => {
        //if no input the return the original
        if (el.Name === "") {
          return el;
        }
        //return the item which contains the user input
        else {
          return el.Name.toLowerCase().includes(search);
        }
      });
  return (
    <div className='list'>
     { data.map(user=><User key={user.img} user={user}/>)}
      
    </div>
  )
}

export default List
