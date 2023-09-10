import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'cdeo自学出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <a>
              <GithubOutlined /> git源码
            </a>
          ),
          href: 'https://github.com/coderGuoHL/usercenter-fontend',
          blankTarget: true,
        },
        {
          key: '自学加油',
          title: 'git',
          href: 'https://github.com/coderGuoHL/usercenter-fontend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
