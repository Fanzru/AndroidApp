import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,Pressable,Button,Alert} from 'react-native';
import { t } from 'react-native-tailwindcss';

export default function Index() {

  const LoginClick = (e)=> {
    e.preventDefault()
    Alert.alert('Login Successfully')
  }
  
  return (
    <View style={[t.m10, t.hFull , t.flexCol, t.justifyCenter]}>
      <Text style={[t.text4xl, t.mB10, t.fontMedium, t.textCenter,t.textBlue400]}>
        Kerja Go
      </Text>
      <View
        style={[t.flexCol, t.bgWhite, t.justifyCenter, t.itemsCenter]}
      >
        <TextInput
          placeholder="Username"
         style={[t.wFull, t.border, t.roundedLg, t.h10,t.p2, t.borderBlue400]}
        />

        <TextInput
          placeholder="Password"
          style={[t.wFull, t.border, t.roundedLg, t.h10,t.p2, t.mT2,t.p2,t.borderBlue400]}
        />
      </View>

      <View
        style={[ t.mT5, t.flexCol, t.itemsCenter, t.justifyCenter]}
      >
        <Pressable 
          style={[t.w10, t.border, t.w20, t.h10, t.itemsCenter, t.justifyCenter, t.roundedLg,t.bgBlue400, t.borderWhite]}
          onPress={LoginClick}  
        >
          <View>
            <Text style={[t.textWhite, t.fontBold]}>Masuk</Text>
          </View>
        </Pressable>
        <View style={[t.mT5,t.flexRow]}>
          <Text>Belum punya akun ? </Text>
          <Pressable onPress={() => Alert.alert('Buat Akun')}>
            <Text
              style={[t.textBlue400]}
            >Buat Sekarang</Text>
          </Pressable>
        </View>
        
      </View>
      
      <View
        style={[t.wFull, t.roundedSm, t.mT10]}
      >
        <Text
          style={[ t.textCenter]}
        >
          Created by Fanzru
        </Text>
      </View>

      
      
      <StatusBar style="auto" />
    </View>
  );
}
