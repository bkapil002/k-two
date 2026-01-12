import React from 'react';
import { FileText, Download, Info } from 'lucide-react';
import pdf from '../image/pdf.png'
import { Link } from 'react-router-dom';

export default function CrocsMaterialTable() {
  const materials = [
    {
      id: 1,
      title: "Croslite™ Material Guide",
      description: "Comprehensive guide covering the properties and benefits of our proprietary Croslite™ foam material"
    },
    {
      id: 2,
      title: "Material Safety Data Sheet",
      description: "Safety information and handling guidelines for Crocs foam materials and components"
    },
    {
      id: 3,
      title: "Sustainability Report 2024",
      description: "Detailed report on our eco-friendly material sourcing and manufacturing processes"
    },
    {
      id: 4,
      title: "Care & Maintenance Instructions",
      description: "Best practices for cleaning and maintaining Crocs footwear to extend product life"
    },
    {
      id: 5,
      title: "Material Composition Analysis",
      description: "Technical breakdown of material composition, durability testing, and quality standards"
    }
  ];

  return (
    <div className="  py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Crocs Material
        </h1>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              {/* <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                  PDF
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr> */}
            </thead>
            <tbody className="divide-y divide-gray-200">
              {materials.map((material) => (
                <tr key={material.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      {material.title}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">
                      {material.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <img src={pdf} className='w-10'/>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <Link to='/signin' className="inline-flex items-center gap-2 bg-[#2d2f92] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </Link>
                      <Link to='/signin' className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        <Info className="w-4 h-4" />
                        Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {materials.map((material) => (
            <div key={material.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-10 h-10 text-red-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {material.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2d2f92] text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors">
                  <Info className="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}