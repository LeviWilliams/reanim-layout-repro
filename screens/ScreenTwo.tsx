import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const SomeComponent = () => {
  const [showNested, setShowNested] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowNested(true);
    }, 1000);
  }, []);
  return (
    <View style={styles.component}>
      <Text style={styles.componentText}>This is a component</Text>

      {showNested && (
        <View style={styles.nestedView}>
          <Text>Nested text</Text>
        </View>
      )}
    </View>
  );
};
const ScreenTwo = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const toggle = (show: boolean) => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setShowComponent(show);
    }, 3500);
  };

  useEffect(() => {
    if (showComponent) {
      toggle(false);
    } else if (!showComponent) {
      toggle(true);
    }
  }, [showComponent]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Screen Two</Text>
      {showComponent && <SomeComponent />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  component: {
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  componentText: {
    color: 'white',
    fontSize: 20,
  },
  nestedView: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  nestedText: {
    fontSize: 20,
  },
});

export default ScreenTwo;
