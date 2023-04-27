import React, { ReactNode } from 'react';
import {
  Flex,
  Icon,
  Link,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiUsers,
  FiSettings,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { useMatch } from "react-router-dom";
  
export function ItensMenu(){
    return (
        <>
            <Link href="/" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <NavItem to="/" icon={FiHome}>
                  Home
                </NavItem>
            </Link>
            <Link href="/chart" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <NavItem to="/chart" icon={FiTrendingUp}>
                  Graficos
                </NavItem>
            </Link>
            <Link href="/explore" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <NavItem to="/explore" icon={FiCompass}>
                  Explore
                </NavItem>
            </Link>
            <Link href="/dashboard" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <NavItem to="/dashboard" icon={FiStar}>
                    Favoritos
                </NavItem>
            </Link>
            <Link href="/users" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <NavItem to='/users' icon={FiUsers}>
                    Usuários
                </NavItem>
            </Link>
        </>
    );
}


interface NavItemProps extends FlexProps {
  icon: IconType;
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  const match = useMatch({
    path: to,
  });

  const isActive = match ? true : false;  
    return (
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          bg={isActive ? "blue.900" : ""}
          color={isActive ? "white" : ""}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
    //   </Link>
    );
  };