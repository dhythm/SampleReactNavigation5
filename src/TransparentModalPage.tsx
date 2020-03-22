import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const TransparentModalPage: React.FunctionComponent = ({ children }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback
        style={{ flex: 1, alignSelf: 'stretch' }}
        onPress={() => navigation.goBack()}
      >
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <View style={{ justifyContent: 'center' }}>{children}</View>
    </LinearGradient>
  );
};

const RoundView = styled(View)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: 'rgba(255,255,255,1)';
`;

export const ModalCard: React.FunctionComponent = ({ children }) => {
  return (
    <RoundView>
      <View style={{ paddingVertical: 16 }}>
        <View
          style={{
            alignSelf: 'center',
            width: 50,
            borderBottomWidth: 3,
            borderBottomColor: 'rgba(0,0,0,1)',
            borderRadius: 8,
          }}
        />
      </View>

      <View style={{ paddingHorizontal: 32, paddingBottom: 32 }}>
        {children}
      </View>

      {/* To avoid a typescript error. */}
      <SafeAreaView>
        <></>
      </SafeAreaView>
    </RoundView>
  );
};

export default TransparentModalPage;
