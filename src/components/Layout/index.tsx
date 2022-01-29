import React from 'react';

import Main from '../Main'
import SideBar from '../SideBar'
import MenuBar from '../MenuBar';

import * as S from './styles'

const Layout: React.FC = () => {
	return (
		<S.Container>
		<S.Wrapper>
<MenuBar />
<Main />
<SideBar /> 
		</S.Wrapper>
		</S.Container>
	)
}

export default Layout;