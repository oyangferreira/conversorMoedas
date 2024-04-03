import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';

export default function App() {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('USD');
  const [moedaPara, setMoedaPara] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const converterMoeda = () => {
    const taxaConversao = {
      USD_BRL: 5.0, // Taxa de conversão de Dólar para Real
      USD_EUR: 0.9, // Taxa de conversão de Dólar para Euro
      BRL_USD: 0.2, // Taxa de conversão de Real para Dólar
      BRL_EUR: 0.18, // Taxa de conversão de Real para Euro
      EUR_USD: 1.12, // Taxa de conversão de Euro para Dólar
      EUR_BRL: 5.5, // Taxa de conversão de Euro para Real
    };

    const taxa = `${moedaDe}_${moedaPara}`;
    const taxaAtual = taxaConversao[taxa];
    
    if (taxaAtual) {
      const resultadoConvertido = parseFloat(valor) * taxaAtual;
      setResultado(resultadoConvertido.toFixed(2).toString());
    } else {
      setResultado('Erro ao converter moeda');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Conversor de Moedas Dólar, Real e Euro</Text>
      <View style={styles.formRow}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={text => setValor(text)}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>De:</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaDe}
          onValueChange={(itemValue) => setMoedaDe(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
        </Picker>
      </View>
      <View style={styles.formRow}>
        <Text style={styles.label}>Para:</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaPara}
          onValueChange={(itemValue) => setMoedaPara(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
        </Picker>
      </View>
      <Button
        title="Converter"
        onPress={converterMoeda}
        color="blue"
        style={styles.button}
      />
      <Text style={styles.resultado}>Resultado: <Text style={styles.resultadoValor}>{resultado}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    height: 40,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  resultadoValor: {
    color: 'green',
  },
  button: {
    color: 'black',
  },
});
