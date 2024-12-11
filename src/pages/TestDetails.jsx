import React from 'react'

export default function TestDetails() {
  return (
    <>
      <div className='w-full h-[100vh] bg-gray-200'>
        <h1 className='text-blue-300 text-3xl pt-5 pl-5 font-bold'>Assessment</h1>
        <div className='flex justify-center items-center'>
          {/* White Box */}
          <div className='bg-white w-[60%] h-[80vh] rounded-lg flex flex-col justify-center items-center p-8'>
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <h2 className='text-xl font-bold mb-4'>Artificial Intelligence (AI)</h2>
              <p className='text-gray-700 text-center mb-4'>
                Artificial Intelligence (AI) empowers systems to replicate human intelligence by automating tasks such as learning, problem-solving, and decision-making. It plays a vital role in various fields like natural language processing (NLP), computer vision, and robotics, enabling innovations such as virtual assistants, image recognition, and self-driving cars. AI simplifies complex processes, improves efficiency, and enhances decision-making capabilities in both personal and professional settings.
                <br />
                By taking this test, you’ll gain a deeper understanding of AI applications, their potential, and how they contribute to solving real-world problems. You’ll also develop critical thinking, problem-solving, and analytical skills essential for understanding emerging technologies.
              </p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-xl'>Start</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
