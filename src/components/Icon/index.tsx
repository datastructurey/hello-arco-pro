import { Icon } from '@arco-design/web-react';
import React from 'react';
import styles from '@/style/layout.module.less';

function OwnIcon(icon, style?: React.CSSProperties) {
  const IconFont = Icon.addFromIconFontCn({
    src: '//at.alicdn.com/t/c/font_4215852_zj9e08xar8.js',
  });
  if (Object.prototype.toString.call(icon) === '[object Object]') {
    return React.createElement(icon);
  } else if (Object.prototype.toString.call(icon) === '[object String]') {
    return <IconFont type={icon} style={style} className="arco-icon" />;
  } else {
    return <div className={styles['icon-empty']} />;
  }
}

export default OwnIcon;
