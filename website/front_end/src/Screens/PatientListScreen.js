import Navbar from "../Components/Navbar"
import React, { useState, useEffect, Component } from 'react'
import Patient from "../Components/Patient";
const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
      {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
      },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]
  
  export default function PatientListScreen() {
    
    useEffect(() => {
        try {
            //RETRIVE DATA FROM FIREBASE, only basic details 
            //store data IN PEOPLE
        }
        catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <>
      <Navbar />
      <div class="hover:overflow-y-scroll h-screen border-4 hover:border-t-8 ">
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <Patient person={person} />
        ))}
      </ul>
      </div>
      </>
    )
  }
  