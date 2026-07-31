/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: Poster.tsx
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Reusable Poster component for displaying streaming content.
 * Combines Card, Image and Text into a single reusable UI element.
 * ----------------------------------------------------------------
 */

import React from 'react';
import { Image, View } from 'react-native';

import { Card } from '../Card';
import { Text } from '../Text';

import { styles } from './Poster.styles';

export interface PosterProps {
  title: string;
  subtitle?: string;
  image: string;
  onPress?: () => void;
}

const Poster: React.FC<PosterProps> = ({
  title,
  subtitle,
  image,
  onPress,
}) => {
  return (
    <Card onPress={onPress}>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.image}
      />

      <View style={styles.content}>
        <Text
          variant="title"
          weight="bold"
          numberOfLines={1}
        >
          {title}
        </Text>

        {subtitle ? (
          <Text
            variant="caption"
            color="secondary"
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
    </Card>
  );
};

export default Poster;