import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import {getStatusBarHeight} from 'react-native-status-bar-height'
;

export default styled(LinearGradient).attrs({
  colors: ['#ff1e56',  '#ffac41'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1}
})`
  flex: 1;
  padding-top: ${10 +getStatusBarHeight()}px;
`;
