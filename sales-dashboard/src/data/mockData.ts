export interface SalesData {
  month: string;
  sales: number;
  year: number;
}

export interface YearlySalesData {
  year: number;
  data: SalesData[];
  totalSales: number;
}

// Mock sales data for 2022, 2023, 2024
export const salesData: YearlySalesData[] = [
  {
    year: 2022,
    totalSales: 1250000,
    data: [
      { month: 'Jan', sales: 85000, year: 2022 },
      { month: 'Feb', sales: 92000, year: 2022 },
      { month: 'Mar', sales: 78000, year: 2022 },
      { month: 'Apr', sales: 105000, year: 2022 },
      { month: 'May', sales: 98000, year: 2022 },
      { month: 'Jun', sales: 112000, year: 2022 },
      { month: 'Jul', sales: 89000, year: 2022 },
      { month: 'Aug', sales: 95000, year: 2022 },
      { month: 'Sep', sales: 108000, year: 2022 },
      { month: 'Oct', sales: 125000, year: 2022 },
      { month: 'Nov', sales: 135000, year: 2022 },
      { month: 'Dec', sales: 142000, year: 2022 },
    ]
  },
  {
    year: 2023,
    totalSales: 1580000,
    data: [
      { month: 'Jan', sales: 105000, year: 2023 },
      { month: 'Feb', sales: 112000, year: 2023 },
      { month: 'Mar', sales: 98000, year: 2023 },
      { month: 'Apr', sales: 125000, year: 2023 },
      { month: 'May', sales: 118000, year: 2023 },
      { month: 'Jun', sales: 135000, year: 2023 },
      { month: 'Jul', sales: 108000, year: 2023 },
      { month: 'Aug', sales: 122000, year: 2023 },
      { month: 'Sep', sales: 138000, year: 2023 },
      { month: 'Oct', sales: 145000, year: 2023 },
      { month: 'Nov', sales: 162000, year: 2023 },
      { month: 'Dec', sales: 178000, year: 2023 },
    ]
  },
  {
    year: 2024,
    totalSales: 1920000,
    data: [
      { month: 'Jan', sales: 128000, year: 2024 },
      { month: 'Feb', sales: 135000, year: 2024 },
      { month: 'Mar', sales: 118000, year: 2024 },
      { month: 'Apr', sales: 152000, year: 2024 },
      { month: 'May', sales: 145000, year: 2024 },
      { month: 'Jun', sales: 168000, year: 2024 },
      { month: 'Jul', sales: 132000, year: 2024 },
      { month: 'Aug', sales: 148000, year: 2024 },
      { month: 'Sep', sales: 165000, year: 2024 },
      { month: 'Oct', sales: 172000, year: 2024 },
      { month: 'Nov', sales: 185000, year: 2024 },
      { month: 'Dec', sales: 198000, year: 2024 },
    ]
  }
];

export const getSalesDataByYear = (year: number): YearlySalesData | undefined => {
  return salesData.find(data => data.year === year);
};

export const getAllSalesData = (): SalesData[] => {
  return salesData.flatMap(yearData => yearData.data);
};
