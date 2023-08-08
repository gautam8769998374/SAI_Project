import Image from 'next/image'

import { BankingLinks, ChemicalLinks, DefenceLinks, IR_Links, LifeScienceLinks, TechLinks } from '.'
import Button from './Button';

const IndustryReport = () => {
  return (
    <section>
        <h6 className='font-satoshi font-semibold text-black text-2xl mb-5 text-center'>INDUSTRY REPORTS</h6>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <div className='flex justify-center gap-5'>
                     <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                     </div>
                      <a href='#' class="text-gray-900 text-3xl font-extrabold    mb-4">Consumer Oriented Sector </a>
                 </div>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">From the latest market research reports on the consumer-oriented sector, you can get a deeper insight of the consumer goods industry and know about its various market segmentations in details.</p>
                <IR_Links/>
                <Button label="View Reports"/>
            </div>
            <div class="bg-gray-50 border-gray-200 rounded-lg p-8 md:p-12">
                <div className='flex justify-center gap-5'>
                     <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                     <svg class="w-auto h-auto text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
                     </svg>
                     </div>
                      <a href='#' class="text-gray-900 text-3xl font-extrabold    mb-4">Technology Sector </a>
                 </div>
                 <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Find the latest market reports and trends in the information technology & market. Check out in-depth market research analysis and global market insights of its various verticals.</p>
                  <TechLinks/>
                  <Button label="View Reports"/>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <div className='flex justify-center gap-5'> 
                       <div>     
                         <Image
                           src='/aeroplane_image.jpg'
                           alt='aeroplane'
                           width={60}
                           height={40}
                           className='rounded-full'
                         />  
                        </div>       
                      <a href='#' class="text-gray-900 text-3xl font-extrabold mb-4">Defence Aerospace And Automotives </a>
                 </div>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The aerospace & defense industry research sector is involved in development of various military equipment such as weapon system, control systems, components, and others. Check global market insight.</p>
                <DefenceLinks/>
                <Button label="View Reports"/>
            </div>
            <div class="bg-gray-50 border-gray-200 rounded-lg p-8 md:p-12">
                <div className='flex justify-center gap-5'>
                     <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                     <svg class="w-auto h-auto text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
                     </svg>
                     </div>
                      <a href='#' class="text-gray-900 text-3xl font-extrabold    mb-4">Life Science  </a>
                 </div>
                 <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The life science industry & solutions is a very diversified industry which consists of pharmaceuticals, biotechnology, medical devices, and healthcare. Check out the latest market research analysis of the biotechnology, healthcare, and pharmaceutical industry.</p>
                  <LifeScienceLinks/>
                  <Button label="View Reports"/>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <div className='flex justify-center gap-5'>
                      <a href='#' class="text-gray-900 text-3xl font-extrabold    mb-4">Chemical Materials And Energy</a>
                 </div>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The chemicals, materials and energy industry market are growing with the increasing usage of its raw materials by various end-user industries. Find out more through the chemicals, materials and energy industry market research, in-depth market analysis, market forecast and more.</p>
                <ChemicalLinks/>
                <Button label="View Reports"/>
            </div>
            <div class="bg-gray-50 border-gray-200 rounded-lg p-8 md:p-12">
                <div className='flex justify-center gap-5'>
                  <a href='#' class="text-gray-900 text-3xl font-extrabold mb-4"> Banking, Financial Services And Insurance Sector </a>
                 </div>
                 <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">According to the industry research firm the demand of integrated solution is driving the market of BFSI along with the growing preferences towards common security platforms which is reducing the rate and difficulties of financial services. More business market research and analysis here.</p>
                  <BankingLinks/>
                  <Button label="View Reports"/>
            </div>            
        </div>
    </section>
  )
}

export default IndustryReport