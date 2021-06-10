import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet, StatusBar, Pressable, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/ThemeContext'
import { globalStylesDark } from '../styles/globalDark'
import { globalStylesLight } from '../styles/globalLight'
import Header from './header';


const POSTS = [
  { title: "Conoce Gelsenkirchen!",
    details: "En este foro podras conocer acerca de los puntos turisticos de esta ciudad, ver las experiencias de tus compañeros y compartir tus propias experiencias. ",
    date: 'Jun 07',
    comments: 0,
    type: 'Publico',
    content: `Castillo de Berge (Schloss Berge), Adenauerallee 103, autobús 302 (parada: Berger See). Hay un festival tradicional de verano a finales de julio de cada año. Los conciertos y otros eventos se realizan con regularidad en este lugar históricamente preservado.

Zoom Erlebniswelt es el zoológico interactivo de Gelsenkirchen. El zoológico se divide en tres secciones o mundos África, Asia y Alaska y ofrece una atmósfera más natural de los hábitats de los animales. Entrada de día 17,50 €. 

El Revierpark y el Stadtgarten son parques populares ubicados en el centro de la ciudad. Nordsternpark un antiguo parque industrial que ofrece muchas atracciones,como senderos para caminar o andar en bicicleta a lo largo de un canal, un teatro al aire libre (que presenta películas destacadas en el horario de verano), escalada en roca, una tierra de juegos para niños y una mina de carbón. 

Veltins Arena, hogar del Football Club Schalke 04, así como uno de los estadios más modernos de Europa. El área de Veltins alberga de todo, desde conciertos de música pop hasta óperas, fútbol y carreras de motos. Los recorridos por la Arena y un museo sobre el Schalke 04 están abiertos al público`,
    id: 1
  },
  { title: "Normas sociales: Gelsenkirchen",
    details: "En este foro podras conocer acerca de las normas sociales de Gelsenkirchen o Alemania en general, aprende que no debes hacer durante tu estadia. ",
    date: 'Jun 08',
    comments: 0,
    type: 'Publico',
    content: ``,
    id: 2
  },
  { title: "A donde ir",
    details: "En este grupo vamos a poner a donde ir y otras cosas.",
    date: 'Jun 08',
    comments: 0,
    type: 'Privado',
    content: ``,
    id: 3
  },
]

export default function Home({ navigation }) {
  const context = useContext(ThemeContext);
  const theme = context.theme.isLight ? globalStylesLight : globalStylesDark;
  const statusColor = context.theme.isLight ? '#4285f4' : '#000';
  const iconColor = context.theme.isLight ? '#000':  '#fff';

  return (
    <ScrollView>
    <View style={theme.container}>
      <View >
        <Header/>
          {
            POSTS.map((post) => (
              <Pressable style={theme.postEntry} key={post.id} onPress={() => navigation.navigate('Post', {title: post.title, content: post.content, comments: post.comments} )}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={theme.postTitle}>
                    {post.title}
                  </Text>
                  <Text style={theme.text}>
                    {post.date}
                  </Text>
                </View>
                <Text style={theme.postText}>
                  {post.details} 
                </Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between', margin: 3}}>
                  <Text style={theme.flair}>
                      {post.type}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Ionicons color={iconColor} name='chatbox-outline' size={20} />
                    <Text style={theme.commentCount}>
                      {post.comments}
                    </Text>
                  </View>
                </View>
              </Pressable>  
            ))
          }
          <View style={{alignItems: 'flex-end', marginTop:20, marginRight: 5}}>
            <Ionicons name="add-circle" size={50} color={iconColor}/>
          </View>

      </View>
    </View>
    </ScrollView>
  );
}
