import React from 'react';
import { Composition } from 'atomic-layout';
import styled from 'styled-components';
import { Text, Button, Image } from './atoms';


// Template string literal helps to preserve the vertical relation
// of areas. Below, we've described three areas one by one,
// just as they appear on the design.
const areasMobile = `
  thumbnail
  content
  actions
`

const AlbumContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export const Album = ({ title, imageUrl, releaseYear, artistName }) => (
    <Composition areas={areasMobile} gap={10} as={AlbumContainer} inline padding={32}>
      {({ Thumbnail, Content, Actions }) => (
        <>
        <Thumbnail>
          <Image src={imageUrl} alt={title} />
        </Thumbnail>
        <Content>
          <Text lead>{title}</Text>
          <Text muted>
            {artistName} • {releaseYear}
          </Text>
        </Content>
        <Actions>
          <Button wide>Buy</Button>
        </Actions>
      </>
      )}
    </Composition>
  )