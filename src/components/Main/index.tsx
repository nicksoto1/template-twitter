import React from 'react';

import ProfilePage from '../ProfilePager';

import * as S from './styles';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <button>
          <S.BackIcon />
        </button>

        <S.ProfileInfo>
          <strong>Michael Soto</strong>
          <span>612 Tewwets</span>
        </S.ProfileInfo>
      </S.Header>

      <ProfilePage />

      <S.BottomMenu>
        <S.HomeIcon className="active" />
        <S.SearchIcon />
        <S.BellIcon />
        <S.EmailIcon />
      </S.BottomMenu>
    </S.Container>
  );
};

export default Main;
