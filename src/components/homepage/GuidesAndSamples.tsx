import React from 'react';
import Link from '@docusaurus/Link';
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
  PersonAccountsRegular,
  BackpackRegular,
  DocumentQuestionMarkRegular
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight, GitHub } from 'react-feather';

interface Guide {
  title: string;
  icon: any;
  text: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: 'Làm cách nào để bắt đầu sử dụng TryonAI trên trang web của tôi?',
    icon: PersonAccountsRegular,
    text: 'Bạn có thể bắt đầu bằng cách đăng ký tài khoản trên trang web TryonAI, sau đó nhận API key để tích hợp vào trang web của bạn.',
    link: '/guides/capabilities/recording'
  },
  {
    title: 'Tôi cần phải đăng ký và nhận API key từ đâu?',
    icon: AppsAddInRegular,
    text: 'Đăng ký tài khoản trên trang web chính của TryonAI. Sau khi đăng ký thành công, bạn sẽ nhận được API key trong trang quản lý tài khoản của mình.',
    link: '/guides/migration/twilio/concepts-twilio-vs-dyte'
  },
  {
    title: 'Gói cơ bản của TryonAI bao gồm những tính năng nào?',
    icon: BackpackRegular,
    text: 'Gói cơ bản cung cấp trải nghiệm thử đồ cơ bản, giúp người dùng xem trước sản phẩm trên hình ảnh ảo chân thực.',
    link: '/guides/migration/twilio/concepts-twilio-vs-dyte'
  }
];

const solutions: Guide[] = [
  {
    title: 'Giải Pháp Tùy Chỉnh',
    icon: DocumentQuestionMarkRegular,
    text: 'Tích hợp TryonAI để tương thích hoàn toàn với thiết kế và màu sắc của trang web của bạn, tạo ra trải nghiệm thử đồ được tùy chỉnh.',
    link: '/guides/migration/twilio/concepts-twilio-vs-dyte'
  },
  {
    title: 'Tối Ưu Hóa Trải Nghiệm Người Dùng:',
    icon: DocumentQuestionMarkRegular,
    text: 'Tối ưu hóa trải nghiệm thử đồ để tăng tương tác và giữ chân khách hàng.',
    link: '/guides/capabilities/recording'
  },
  {
    title: 'Tích Hợp Mạnh Mẽ',
    icon: DocumentQuestionMarkRegular,
    text: 'Đảm bảo tích hợp trơn tru và linh hoạt trên nhiều nền tảng và loại trang web khác nhau.',
    link: '/guides/migration/twilio/concepts-twilio-vs-dyte'
  }
];

interface Sample {
  title: string;
  platform?: string;
  source?: string;
  blog?: string;
  demo?: string;
}


function Guide({ title, text, icon: Icon, link }: (typeof guides)[0]) {
  return (
    <Link
      to={link}
      className='group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary'
    >
      <Icon className='h-6 w-6' />

      <div className='flex flex-col'>
        <h4 className='mb-1 font-semibold'>{title}</h4>
        <p className='mb-0 text-sm text-text-400'>{text}</p>
      </div>

      <ChevronRight className='ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100' />
    </Link>
  );
}

function Sample({ title, platform, blog, source, demo }: Sample) {
  return (
    <div
      className='group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary'>
      <div className='flex flex-col'>
        <h4 className='mb-1 text-black group-hover:text-primary dark:text-white'>
          {title}
        </h4>
        <div className='text-sm text-text-400'>{platform}</div>
      </div>

      <div className='flex items-center gap-2.5'>
        {blog && (
          <Link to={blog} className='text-inherit'>
            <DocumentRegular className='h-5 w-5' />
          </Link>
        )}

        {demo && (
          <Link to={demo} className='text-inherit'>
            <OpenRegular className='h-5 w-5' />
          </Link>
        )}

        {source && (
          <Link
            to={source}
            className='flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white'
          >
            <GitHub className='h-4 w-4' />
            <span className='font-semibold'>Clone</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function GuidesAndSamples() {
  return (
    <section
      className='no-underline-links my-40 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0'>
      <div className='flex-1 mr-4'>
        <div className='mb-8 flex items-center justify-between'>
          <h3 className='m-0'>Câu hỏi thường gặp</h3>

          <Link to='/guides' className='font-jakarta text-sm font-semibold'>
            View more <ArrowRightFilled className='ml-1' />
          </Link>
        </div>

        <div className='flex flex-col gap-4'>
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>
      <div
        className='m-4 h-auto min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100'></div>
      <div className='w-full md:max-w-sm'>
        <div className='mb-8 flex items-center justify-between'>
          <h3 className='m-0'>Các giải pháp</h3>

          <Link to='/guides' className='font-jakarta text-sm font-semibold'>
            View more <ArrowRightFilled className='ml-1' />
          </Link>
        </div>

        <div className='flex flex-col gap-4'>
          {solutions.map((solution) => (
            <Guide {...solution} key={solution.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
