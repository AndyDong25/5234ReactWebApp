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
      title: 'more info',
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: 'cse5234',
          url: 'https://com',
          description: 'cse5234',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yuque"
            />
          ),
          title: 'cse5234',
          url: 'https://com',
          description: 'cse5234',
          openExternal: true,
        },
      ],
    },
  ]}
/>

);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <SampleFooter />;