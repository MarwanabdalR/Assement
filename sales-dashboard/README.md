# Sales Dashboard

A modern, interactive sales dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates atomic design principles and provides comprehensive data visualization capabilities.

## 🚀 Features

- **Interactive Charts**: Multiple chart types (Bar, Line, Pie) using Recharts
- **Data Filtering**: Custom threshold filtering to focus on specific sales ranges
- **Responsive Design**: Built with atomic design principles and fully responsive layout
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Mock Data**: Realistic sales data for 2022, 2023, and 2024

## 🏗️ Project Structure

This project follows atomic design principles with a clear component hierarchy:

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── molecules/       # Simple component groups
│   │   ├── FilterInput.tsx
│   │   ├── ChartTypeSelector.tsx
│   │   └── YearSelector.tsx
│   └── organisms/       # Complex UI components
│       ├── BarChart.tsx
│       ├── LineChart.tsx
│       ├── PieChart.tsx
│       ├── SalesChart.tsx
│       └── SalesStats.tsx
├── data/
│   └── mockData.ts      # Mock sales data
└── app/
    ├── page.tsx         # Home page
    └── dashboard/       # Dashboard page
        └── page.tsx
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Design System**: Atomic Design Principles

## 📊 Data Structure

The application includes mock sales data for three years:

```typescript
interface SalesData {
  month: string;
  sales: number;
  year: number;
}

interface YearlySalesData {
  year: number;
  data: SalesData[];
  totalSales: number;
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sales-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Dashboard Features

1. **Year Selection**: Switch between 2022, 2023, and 2024 data
2. **Chart Types**: Toggle between Bar, Line, and Pie charts
3. **Data Filtering**: Set custom sales thresholds to filter data
4. **Statistics**: View total, average, highest, and lowest sales

### Component Usage

#### Basic Components (Atoms)
```tsx
import { Button, Input, Card } from '@/components/atoms';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>

<Input 
  type="number" 
  label="Sales Amount" 
  value={value} 
  onChange={setValue} 
/>

<Card title="Sales Data">
  <p>Your content here</p>
</Card>
```

#### Chart Components (Organisms)
```tsx
import { SalesChart } from '@/components/organisms';

<SalesChart 
  data={salesData} 
  chartType="bar" 
  threshold={100000} 
/>
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Structure

The project follows these principles:

1. **Atomic Design**: Components are organized by complexity (atoms → molecules → organisms)
2. **TypeScript**: Full type safety throughout the application
3. **Responsive Design**: Mobile-first approach with Tailwind CSS
4. **Component Composition**: Reusable, composable components

## 📈 Future Enhancements

- **API Integration**: Replace mock data with real API calls
- **Authentication**: Add user authentication and authorization
- **Data Export**: Export charts and data to various formats
- **Real-time Updates**: WebSocket integration for live data
- **Advanced Filtering**: Date range pickers and multiple filter options
- **Dashboard Customization**: User-configurable dashboard layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Recharts](https://recharts.org/) - Chart library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library