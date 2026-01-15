console.log('APP LOADED');

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [phone, setPhone] = useState('');

  const isValid = phone.length >= 9;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Đăng nhập</Text>

        <View style={styles.content}>
          <Text style={styles.label}>Nhập số điện thoại</Text>
          <Text style={styles.description}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, !isValid && styles.buttonDisabled]}
          disabled={!isValid}
        >
          <Text style={[styles.buttonText, !isValid && styles.buttonTextDisabled]}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    fontSize: 22,
    fontWeight: '600',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  content: { padding: 16 },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  description: { fontSize: 14, color: '#555', marginBottom: 16 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8,
  },
  button: {
    margin: 16,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#0c9354',
    alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#eee' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  buttonTextDisabled: { color: '#999' },
});
