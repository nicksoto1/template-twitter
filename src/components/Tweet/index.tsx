import React from 'react';

import * as S from './styles';

const Tweet: React.FC = () => {
  return (
    <S.Container>
      <S.Retweeted>
        <S.RocketseatIcon />
     Voce retweetou
      </S.Retweeted>

      <S.Body>
        <S.Avatar />

        <S.Content>
          <S.Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <S.Dot />
            <time>27 de jun</time>
          </S.Header>
          <S.Description>Foguete não tem ré</S.Description>
          <S.ImageContent />

          <S.Icons>
            <S.Status>
              <S.CommentIcon />
              18
            </S.Status>
            <S.Status>
              <S.RetweetIcon />
              18
            </S.Status>
            <S.Status>
              <S.LikeIcon />
              999
            </S.Status>
          </S.Icons>
        </S.Content>
      </S.Body>
    </S.Container>
  );
};

export default Tweet;
