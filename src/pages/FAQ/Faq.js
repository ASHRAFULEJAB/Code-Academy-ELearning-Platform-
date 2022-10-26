import React from 'react'

const Faq = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400'>
              Code Academy
            </p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='70326c9b-4a0f-429b-9c76-792941e326d5'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Code</span>
            </span>{' '}
            Academy
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            Code Academy is a famous onlime learing platfrom where you can learn so many updated technology with fun and easiest way..
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto'>
        <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              why we need to know programming language?
              </p>
              <p className='text-gray-700'>
              Learning to code not only allows you to give machines instructions, but it also teaches you abstract thinking and problem-solving. In fact, problem-solving skills and creativity are key to becoming a successful computer programmer. 
                <br />
                <br />
                Of course, you'll also need to know some coding languages to apply your knowledge.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              what we need to learn react js?
              </p>
              <p className='text-gray-700'>
                Well, You should know how to write semantic HTML tags, how to write CSS selectors, how to use classes, 
                <br />
                <br />
                how to implement a CSS reset, box model, how to reset to border-box, flexbox, how to write responsive web applications including media queries, and how to build a frontend application using HTML and CSS..
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              what we need to learn react native?
              </p>
              <p className='text-gray-700'>
              You should have a basic knowledge of JavaScript. You should have some familiarity with HTML and CSS. Finally, if you have worked with React before, you already know a lot about React Native, and there should be absolutely no problem in working with it.
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              what are benefits of learning data structures and algorithms?
              </p>
              <p className='text-gray-700'>
              Data structures and algorithms (DSA) goes through solutions to standard problems in detail and gives you an insight into how efficient it is to use each one of them. It also teaches you the science of evaluating the efficiency of an algorithm. This enables you to choose the best of various choices.
                <br />
                <br />
                Data Structure helps you store data IBM MO memory, helps you understand computer memory better. It certainly improves coding skills if you've a sound knowledge ...
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              what is artificial intelligence?
              </p>
              <p className='text-gray-700'>
              Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.
                <br />
                <br />
                The ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal. A subset of artificial intelligence is ML.
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              why should we use machine learning??
              </p>
              <p className='text-gray-700'>
              Machine learning is important because it gives enterprises a view of trends in customer behavior and business operational patterns, as well as supports the development of new products. Many of today's leading companies, such as Facebook, Google and Uber, make machine learning a central part of their operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
