"use client"
import Link from 'next/link';
import React, { Fragment } from 'react'

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default function Mypage() {
  return (
    <Fragment>
      <h1>Developer Name</h1>
      <ul>
        {details.map((developer)=>(
          <li key={developer.id}>
             <Link href={`/aboutus/${developer.id}`}> {developer.name}</Link>
          </li>  
        ))}
      </ul>
    </Fragment>
  )
}
