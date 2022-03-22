import React from 'react';

import {
  Container,
  CategoryButton,
  CategoryView,
  CategoryImageButton,
} from './Categories.styles';

const Categories: React.FC = () => {
  const cateIcon = {
    uri: 'https://emc.acidadeon.com/dbimagens/lanches_como_790x505_06032018153232.jpg',
  };

  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <CategoryButton>
        <CategoryView>
          <CategoryImageButton source={cateIcon} />
        </CategoryView>
      </CategoryButton>

      <CategoryButton>
        <CategoryView>
          <CategoryImageButton source={cateIcon} />
        </CategoryView>
      </CategoryButton>

      <CategoryButton>
        <CategoryView>
          <CategoryImageButton source={cateIcon} />
        </CategoryView>
      </CategoryButton>

      <CategoryButton>
        <CategoryView>
          <CategoryImageButton source={cateIcon} />
        </CategoryView>
      </CategoryButton>

      <CategoryButton>
        <CategoryView>
          <CategoryImageButton source={cateIcon} />
        </CategoryView>
      </CategoryButton>
    </Container>
  );
};

export default Categories;
