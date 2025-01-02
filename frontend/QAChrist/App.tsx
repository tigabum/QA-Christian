import React from 'react';
import {Text, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

function App(): React.JSX.Element {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledText className="text-black text-xl">Hello TailwindCSS!</StyledText>
    </StyledView>
  );
}

export default App;
