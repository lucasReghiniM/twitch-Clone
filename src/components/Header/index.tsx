import React from 'react';

import { Container, Avatar, OnLineStatus, RightSide, Button } from './styles';

import colors from '../../styles/colors';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnLineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons 
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>   
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>   
        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>    
      </RightSide>
    </Container>
  );
};

export default Header;
