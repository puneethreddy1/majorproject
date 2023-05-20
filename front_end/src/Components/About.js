// import React from 'react'

// const About = () => {
//   const style = {
//     color : '#079458',
//     fontWeight : 440
//   }
//   const weight = {
//     fontWeight : 600
//   }
//   const style1 = {
//     backgroundColor: '#f7f1f1'
// }
//   return (
//     <div className='container my-3' style={style1}>
//       <div>
//         <h1 className="display-4" style={style}>Diabetes</h1>
//         <hr></hr>
//         <h4 className='fw-normal' style={weight}>
//           Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy. Sometimes your body doesn’t make enough—or any—insulin or doesn’t use insulin well. Glucose then stays in your blood and doesn’t reach your cells.

//           Over time, having too much glucose in your blood can cause health problems. Although diabetes has no cure, you can take steps to manage your diabetes and stay healthy.

//           Sometimes people call diabetes “a touch of sugar” or “borderline diabetes.” These terms suggest that someone doesn’t really have diabetes or has a less serious case, but every case of diabetes is serious.
//         </h4>
//       </div>
//       <div>
//         <h1 className="display-4" style={style}>Different types of diabetes</h1>
//         <hr></hr>
//         <h1 className="display-6 my-3" style={style}>Type 1 diabetes</h1>
//         <h4 className='fw-normal'>
//         If you have type 1 diabetes, your body does not make insulin. Your immune system attacks and destroys the cells in your pancreas that make insulin. Type 1 diabetes is usually diagnosed in children and young adults, although it can appear at any age. People with type 1 diabetes need to take insulin every day to stay alive
//         </h4>
//         <h1 className="display-6 my-3" style={style}>Type 2 diabetes</h1>
//         <h4 className='fw-normal'>
//         If you have type 2 diabetes, your body does not make or use insulin well. You can develop type 2 diabetes at any age, even during childhood. However, this type of diabetes occurs most often in middle-aged and older people. Type 2 is the most common type of diabetes.        </h4>
//         <h1 className="display-6 my-3" style={style}>Gestational diabetes</h1>
//         <h4 className='fw-normal'>
//         Gestational diabetes develops in some women when they are pregnant. Most of the time, this type of diabetes goes away after the baby is born. However, if you’ve had gestational diabetes, you have a greater chance of developing type 2 diabetes later in life. Sometimes diabetes diagnosed during pregnancy is actually type 2 diabetes.        </h4>
//       </div>
//     </div>
//   )
// }

// export default About
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import NavBar from './Navbar'

const features = [
  {
    name: 'Type 1 diabetes',
    description:
      "If you have type 1 diabetes, your body does not make insulin. Your immune system attacks and destroys the cells in your pancreas that make insulin. Type 1 diabetes is usually diagnosed in children and young adults, although it can appear at any age. People with type 1 diabetes need to take insulin every day to stay alive",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Type 2 diabetes',
    description:"If you have type 2 diabetes, your body does not make or use insulin well. You can develop type 2 diabetes at any age, even during childhood. However, this type of diabetes occurs most often in middle-aged and older people. Type 2 is the most common type of diabetes.",
    icon: LockClosedIcon,
  },
  {
    name: 'Gestational diabetes',
    description:"Gestational diabetes develops in some women when they are pregnant. Most of the time, this type of diabetes goes away after the baby is born. However, if you’ve had gestational diabetes, you have a greater chance of developing type 2 diabetes later in life. Sometimes diabetes diagnosed during pregnancy is actually type 2 diabetes.",
    icon: ArrowPathIcon,
  },
  
]

export default function About() {
  return (
    <>
    <NavBar />
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Diabates
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
          Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy. Sometimes your body doesn’t make enough—or any—insulin or doesn’t use insulin well. Glucose then stays in your blood and doesn’t reach your cells.

          Over time, having too much glucose in your blood can cause health problems. Although diabetes has no cure, you can take steps to manage your diabetes and stay healthy.

           Sometimes people call diabetes “a touch of sugar” or “borderline diabetes.” These terms suggest that someone doesn’t really have diabetes or has a less serious case, but every case of diabetes is serious.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base text-2xl font-bold leading-7 text-gray-900">
                   {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

