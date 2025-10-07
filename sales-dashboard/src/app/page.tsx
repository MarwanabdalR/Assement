import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Sales Dashboard
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
            A modern, interactive dashboard built with Next.js 15, TypeScript, and Tailwind CSS
          </p>
          
          <div className="mb-10 sm:mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                View Dashboard
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <Card title="Interactive Charts">
              <p className="text-gray-600 text-sm sm:text-base">
                Multiple chart types including bar, line, and pie charts using Recharts library
              </p>
            </Card>
            
            <Card title="Data Filtering">
              <p className="text-gray-600 text-sm sm:text-base">
                Custom threshold filtering to focus on specific sales ranges
              </p>
            </Card>
            
            <Card title="Responsive Design">
              <p className="text-gray-600 text-sm sm:text-base">
                Built with atomic design principles and fully responsive layout
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>• Next.js 15 with App Router</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Atomic design structure</li>
                <li>• Recharts for data visualization</li>
              </ul>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>• Multiple chart types</li>
                <li>• Custom data filtering</li>
                <li>• Responsive design</li>
                <li>• Modern UI components</li>
                <li>• Mock sales data (2022-2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}