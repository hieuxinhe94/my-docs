import React from 'react';

const PackageCard = ({ title, price, products, support }) => (
  <div
    className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-2xl hover:border-primary shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
    <h2 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center'>
      {title}
    </h2>
    <div className='flex mb-2 items-baseline text-gray-900 dark:text-white'>
      <span className='text-3xl font-semibold'>$</span>
      <span className='text-5xl font-extrabold tracking-tight'>{price}</span>
      <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
      /month
    </span>
    </div>
    <ul role='list' className='space-y-5 my-10'>
      {products.map((product, index) => (
        <li className='flex items-center mb-4' key={index}>
          <svg
            className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500 mr-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3'>
        {product}
      </span>
        </li>
      ))}
    </ul>
    <button
      type="button"
      className="border border-gray-200 py-2.5 px-5 me-2 mb-2 rounded-lg hover:border-primary hover:text-primary inline-flex justify-center w-full text-center"
    onClick={()=>{console.log(title)}}
    >
      Choose plan
    </button>
  </div>
);

const PackageCards = () => {
  const packages = [
    {
      title: 'Gói Cơ Bản',
      price: '50',
      products: ['1 sản phẩm A', '1 sản phẩm B', '1 sản phẩm C'],
      support: 'Hỗ trợ qua email'
    },
    {
      title: 'Gói Tiêu Chuẩn',
      price: '80',
      products: ['1 sản phẩm A', '2 sản phẩm B', '1 sản phẩm C'],
      support: 'Hỗ trợ qua email và điện thoại'
    },
    {
      title: 'Gói Premium',
      price: '120',
      products: ['2 sản phẩm A', '3 sản phẩm B', '2 sản phẩm C'],
      support: 'Hỗ trợ 24/7 qua email, điện thoại và chat trực tuyến'
    }
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  );
};

export default PackageCards;
