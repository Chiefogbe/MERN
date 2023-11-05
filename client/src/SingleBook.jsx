import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleBook = () => {

  const [data, setData]=useState([])
  const urlSlug=useParams()
  const baseUrl=`http://localhost:8000/api/books/${urlSlug.slug}`


  const fetchData=async()=>{
    try {
      // const res= await fetch(`${baseUrl}${urlSlug.slug}`)
      const res= await fetch(baseUrl)

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
  }, [])

  
  function StarRating({ns}){
    const stars=[]
    for(let x=0; x<ns; x++){
      stars.push(<span key={x}>⭐</span>)
    }
    return <div>
      Rating: {stars}
    </div>
  }



  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Link to={'/Buuk'}>Books</Link>
      <br />
      <img src={`http://localhost:8000/uploads/${data.thumbnail}`} alt="" />
      <h4>{data.title}</h4>
      
      <StarRating ns={data?.stars}/>
      {data?.category?.map((item, index)=>(
        <li key={index}>{item}</li>
      ))}
    </div>
  )
}

export default SingleBook
