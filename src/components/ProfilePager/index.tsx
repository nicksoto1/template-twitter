import React from 'react';

import Feed from '../Feed';

import * as S from './styles';

const ProfilePager: React.FC = () => {
  return (
    <S.Container>
      <S.Banner>
        <S.Avatar />
      </S.Banner>

      <S.ProfileData>
        <S.EditButton outlined>Editar perfil</S.EditButton>

        <h1>Michael Soto</h1>
        <h2>@michael.soto</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <S.LocationIcon />
            São Paulo,Brasil
          </li>
          <li>
            <S.CakeIcon />
            Nascido(a) em 21 de junho de 2001
          </li>
        </ul>

        <S.Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </S.Followage>
      </S.ProfileData>
    </S.Container>
  );
};

export default ProfilePager;
