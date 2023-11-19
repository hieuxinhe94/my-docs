import React from 'react';

const PackageCard = ({ title, price, products, support }) => (
  <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p><strong>Giá:</strong> {price}</p>
    <p><strong>Sản phẩm bao gồm:</strong></p>
    <ul className="list-disc ml-6">
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
    <p><strong>Hỗ trợ khách hàng:</strong> {support}</p>
  </div>
);

const PackageCards = () => {
  const packages = [
    {
      title: 'Gói Cơ Bản',
      price: '$50',
      products: ['1 sản phẩm A', '1 sản phẩm B'],
      support: 'Hỗ trợ qua email',
    },
    {
      title: 'Gói Tiêu Chuẩn',
      price: '$80',
      products: ['1 sản phẩm A', '2 sản phẩm B', '1 sản phẩm C'],
      support: 'Hỗ trợ qua email và điện thoại',
    },
    {
      title: 'Gói Premium',
      price: '$120',
      products: ['2 sản phẩm A', '3 sản phẩm B', '2 sản phẩm C'],
      support: 'Hỗ trợ 24/7 qua email, điện thoại và chat trực tuyến',
    },
  ];

  return (
    <div>
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  );
};

export default PackageCards;
