import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css'

const SampleFooter = () => ( 
  <Footer  className='footer'
  onClick
  autoFocus
  columns={[
    {
      title: 'Contact Us',
      items: [
        {
          title: 'Address',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'Email',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'Phone',
          url: 'https://ceo/',
          openExternal: true,
        },
      ],
    },
    {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="more products"
        />
      ),
      title: 'More Info',
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: 'PDF',
          url: 'https://com',
          description: 'coming soon...',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yuque"
            />
          ),
          title: 'PDF',
          url: 'https://com',
          description: 'coming soon...',
          openExternal: true,
        },
      ],
    },
  ]}
/>

);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <SampleFooter />;