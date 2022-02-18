import { Link } from 'react-router-dom';
import styles from './index.less';

export default function IndexPage(props) {
  return (
    <div>
      <ul>
        <li><Link to='/find'>发现音乐</Link></li>
        <li><Link to='/my'>我的音乐</Link></li>
        <li><Link to='/friend'>关注</Link></li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}
