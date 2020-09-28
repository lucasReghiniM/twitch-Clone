import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { StreamContainer, StreamThumbnail, StreamColumn, StreamRow, StreamHeader, StreamDescription, StreamCategory,StreamAvatar, StreamUsername, TagRow,TagView, TagText, List } from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}> Lucas Reghini Magalhães</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Dev frontend e webdesigner. Conhecimento em
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Programação
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText> FrontEnd </TagText>
          </TagView>
          <TagView>
            <TagText> Designer </TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
