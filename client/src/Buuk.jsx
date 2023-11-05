import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Buuk = () => {

  const [data, setData]=useState([])
  const [selectedCategory, setSelectedCategory]=useState('')
  const baseUrl='http://localhost:8000/api/books'

  function getCategory(e){
    setSelectedCategory(e.target.value)
  }

  const fetchData=async()=>{
    try {
      let url=baseUrl
      if(selectedCategory){
        url+=`?category=${selectedCategory}`
      }
      const res= await fetch(url)

      if(!res.ok){
        throw new Error ('Failed to fetch data.')
      }
      const jsonData= await res.json()
      console.log(jsonData)
      setData(jsonData)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [selectedCategory])


  return (
    <div>
      <div className='filters'>
        <label>Categories</label>
        <select onChange={getCategory}>
          <option value="">All</option>
          <option value="science">Science</option>
          <option value="economics">Economics</option>
          <option value="psychology">Psychology</option>
          <option value="romance">Romance</option>
          <option value="social">Social</option>
        </select>

      </div>


      {data.map((x, key)=>{
        return(
          <div key={key}>
            <Link to={`/books/${x.slug}`}>
              <img src={`http://localhost:8000/uploads/${x.thumbnail}`} alt={x.title} />
              <h4>{x.title}</h4>

            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Buuk
